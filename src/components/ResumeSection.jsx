import React, { useEffect, useRef, useState } from 'react'
import { RiDownload2Line } from 'react-icons/ri';
import { RxText } from 'react-icons/rx';
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FiFile } from "react-icons/fi";
import { IoMdDocument } from 'react-icons/io';
import JobRoleSelect from './JobRoleSelect';
import { extractTextFromPdf } from '../utils/extractPdfText';
import Loader from './common/Loader';
import ResumeResultCard from './ResumeResultCard';



const ResumeSection = () => {
  const [OpenPasteText, setOpenPasteText] = useState(false);
  const [file, setFile] = useState(null);
  const [resumeText, setResumeText] = useState("");
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [textForAnalyze, setTextForAnalyze] = useState("");
  const [selectedExp, setSelectedExp] = useState();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [resumeResult, setResumeResult] = useState(null);
  const resultRef = useRef(null);

  const handleSubmit = () => {
    setTextForAnalyze(resumeText);
  };

  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
    return;
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    maxSize: 10 * 1024 * 1024, // 10MB
    accept: {
      "application/pdf": [],
      "text/plain": [],
    },
  });

  useEffect(() => {
    if (!file) return;

    const fetchPdfText = async () => {
      const pdfText = await extractTextFromPdf(file);
      setTextForAnalyze(pdfText);
    }

    fetchPdfText();
  }, [file]); // only runs when a new file is selected


  useEffect(() => {
    if (!textForAnalyze) return;

    const analyzeResume = async () => {
      try {
        setLoader(true);
        const formattedRoles = selectedRoles.length
          ? selectedRoles.join(", ")
          : "Not provided";

        const prompt = `
You are an ATS Resume Evaluator. Analyze the resume strictly.
Return **valid JSON** only.

{
  "atsScore": Number (0-100),
  "skillsScore": Number (0-100),
  "missingSkills": [array of skill strings],
  "improvements": [array of improvements],
  "summary": "1 short helpful summary",
  "roleSuggestions": [
    {
      "role": "Role Name",
      "detailedSuggestions": [array of strings explaining how the candidate can improve for this role]
    }
  ]
}

If experience is "fresher":
- Focus more on project skills, internships, basic tech knowledge.

If experience is > 3 years:
- Evaluate leadership, certifications, advanced tech skills.

Job Roles: ${formattedRoles}
Experience: ${selectedExp || "Not provided"}
Resume:
${textForAnalyze}

Instructions:
- Evaluate **each job role separately** if multiple roles are selected.
- Give **role-specific suggestions** in detail.
- Return valid JSON only.
`;


        const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-goog-api-key": import.meta.env.VITE_API_KEY,
            },
            body: JSON.stringify({
              contents: [
                {
                  role: "user",
                  parts: [{ text: prompt }],
                },
              ],
            }),
          }
        );

        const data = await res.json();
        const textResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text || "{}"

        const match = textResponse.match(/\{[\s\S]*\}/);
        const cleanedJSON = match ? match[0] : "{}";

        const parsed = JSON.parse(cleanedJSON);

        setResumeResult(parsed);

      } catch (error) {
        console.error("Error analyzing resume:", error);
        setError("Something Went Wrong", error)
      } finally {
        setLoader(false);
        setTextForAnalyze("");
      }
    }
    analyzeResume();

  }, [textForAnalyze])

  useEffect(()=>{
    if(resumeResult && resultRef.current){
      resultRef.current.scrollIntoView({behavior : "auto"})
    }
  },[resumeResult])

  if (loader) {
    return <Loader />
  }

  return (
    <div className='flex flex-col mx-4  justify-center items-center mt-6 mb-12'>
      <div className='flex flex-col w-full md:w-3xl  border border-gray-300 rounded-2xl bg-gray-50 mb-12'>

        <div className='flex  bg-gray-200 mt-6 mx-6 rounded-full py-1 justify-around items-center '>
          <div onClick={() => setOpenPasteText(false)} className={`flex gap-2  rounded-full w-1/2 mx-1 py-1.5 items-center justify-center ${OpenPasteText ? "bg-gray-200" : "bg-gray-50"} font-medium`}>
            <RiDownload2Line />
            <p>Upload File</p>
          </div>
          <div onClick={() => setOpenPasteText(true)} className={`flex items-center justify-center gap-2 rounded-full w-1/2 mx-1 py-1.5 ${OpenPasteText ? "bg-gray-50" : "bg-gray-200"} font-medium`}>
            <RxText />
            <p>Paste Text</p>
          </div>
        </div>

        <div className='   gap-4'>
          <div className="w-auto mx-2  md:mx-6  ">
            <JobRoleSelect selectedRoles={selectedRoles} setSelectedRoles={setSelectedRoles} />

          </div>

          <div className="flex gap-2 flex-col md:flex-row justify-center items-center">
            <label className="font-medium">Total Experience :</label>
            <select
              onChange={(e) => setSelectedExp(e.target.value)}
              className="rounded-full border-2 border-gray-200 px-4 py-1.5 outline-none bg-white"
              name="experience"
              defaultValue=""
            >
              <option value="" disabled>Select Experience</option>
              <option value="fresher">Fresher</option>
              <option value="0-1">0 - 1 year</option>
              <option value="1+">1 year +</option>
              <option value="2+">2 year +</option>
              <option value="3+">3 year +</option>
              <option value="4-5">4 - 5 year</option>
              <option value="5+">5 year +</option>
              <option value="7+">7 year +</option>
              <option value="10+">10 year +</option>
            </select>
          </div>



        </div>

        {error && (
          <div className="text-red-500">
            {error}
          </div>
        )}

        {
          OpenPasteText ?
            (
              <div className='w-full mx-x-auto mb-6 mt-8'>
                <div className="mx-6">

                  <textarea
                    value={resumeText}
                    onChange={(e) => setResumeText(e.target.value)}
                    placeholder="Paste resume text here..."
                    className="w-full h-72 p-4 bg-gray-200 rounded-xl outline-none resize-none text-gray-700 
                   focus:ring-2 focus:ring-gray-200 focus:bg-white transition-all"
                  />

                  <button
                    onClick={handleSubmit}
                    className="mt-4  w-full py-3 text-white  font-semibold rounded-xl 
                   bg-linear-to-r from-blue-400 to-purple-500
                   hover:opacity-95 transition-all cursor-pointer"
                  >
                    Analyze Resume
                  </button>

                </div>
              </div>


            )
            : (
              <div
                {...getRootProps()}
                className={`border-2 border-dashed  rounded-xl flex flex-col items-center 
        justify-center py-12 mb-6 bg-white transition cursor-pointer mt-6 mx-6
        ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
              >
                {/* Hidden input */}
                <input {...getInputProps()} />

                {/* Icon */}
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <IoMdDocument className="text-blue-600 w-8 h-8" />
                </div>

                {/* Text */}
                <p className="text-gray-600 text-center text-sm md:text-lg mb-3">
                  {isDragActive ? "Drop your resume here..." : "Drag & drop your resume here, or click to browse"}
                </p>

                <p className='border border-gray-300 px-6 font-medium py-1.5 rounded-full mb-3 hover:bg-gray-100 transition-all'>Browse Files</p>

                <p className="text-sm text-gray-500">
                  Supports PDF, TXT (Max 10MB)
                </p>

                {/* Show selected file */}
                {file && (
                  <div className="mt-4 flex items-center gap-2 p-3 bg-gray-100 rounded-lg border border-gray-300 mx-4 md:mx-0">
                    <FiFile className="text-blue-600 w-5 h-5" />
                    <span className="text-sm text-gray-700 font-medium">
                      {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                    </span>
                  </div>
                )}
              </div>

            )
        }



      </div>

      {
        resumeResult && (
          <div ref={resultRef}>
            <ResumeResultCard resumeResult={resumeResult} />
          </div>
        )
      }

    </div>
  )
}

export default ResumeSection



