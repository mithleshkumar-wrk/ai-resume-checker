import React from "react";

const ResumeResultCard = ({ resumeResult }) => {
  if (!resumeResult) return null;

  return (
    <div className="max-w-5xl mx-auto py-6 px-3 md:my-6  md:p-6 bg-white rounded-2xl shadow-lg border border-gray-200 md:mt-16 ">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Resume Analysis Result
      </h2>

      {/* Scores */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex-1 p-4 bg-green-100 rounded-xl text-center">
          <p className="text-green-800 font-semibold">ATS Score</p>
          <p className="text-3xl font-bold">{resumeResult.atsScore}</p>
        </div>
        <div className="flex-1 p-4 bg-green-100 rounded-xl text-center">
          <p className="text-green-800 font-semibold">Skills Score</p>
          <p className="text-3xl font-bold">{resumeResult.skillsScore}</p>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-4 p-4 rounded-xl border-l-4 border-green-500 bg-green-50">
        <h3 className="text-green-800 font-semibold mb-2">Candidate Summary</h3>
        <p className="text-gray-800">{resumeResult.summary}</p>
      </div>

      {/* Missing Skills */}
      <div className="mb-4 p-4 rounded-xl border-l-4 border-red-500 bg-red-50">
        <h3 className="text-red-700 font-semibold mb-2">Missing Skills</h3>
        {resumeResult.missingSkills.length > 0 ? (
          <ol className="list-decimal list-inside text-gray-800 space-y-1">
            {resumeResult.missingSkills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ol>
        ) : (
          <p className="text-gray-800">None identified</p>
        )}
      </div>

      {/* Improvements */}
      <div className="mb-4 p-4 rounded-xl border-l-4 border-green-500 bg-green-50">
        <h3 className="text-green-800 font-semibold mb-2">Suggested Improvements</h3>
        <ol className="list-decimal list-inside text-gray-800 space-y-1">
          {resumeResult.improvements.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
      </div>

      {/* Role-Specific Suggestions */}
      {resumeResult.roleSuggestions && resumeResult.roleSuggestions.length > 0 && (
        <div className="mb-4 p-4 rounded-xl border-l-4 border-blue-500 bg-blue-50">
          <h3 className="text-blue-800 font-semibold mb-2">Role-Specific Suggestions</h3>
          {resumeResult.roleSuggestions.map((roleItem, idx) => (
            <div key={idx} className="mb-3">
              <p className="font-semibold text-blue-700 mb-1">{roleItem.role}:</p>
              <ol className="list-decimal list-inside text-gray-800 space-y-1">
                {roleItem.detailedSuggestions.map((suggestion, sidx) => (
                  <li key={sidx}>{suggestion}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResumeResultCard;
