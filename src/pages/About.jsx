export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 px-6 py-8 md:py-16 flex justify-center">
      
      <div className="max-w-4xl bg-white/60 backdrop-blur-xl shadow-xl rounded-3xl px-4 py-6 md:p-10 border border-white/40">
        
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 text-center drop-shadow-sm">
          About AI-Powered Resume Analyzer 🚀
        </h1>

        <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-6">
          The <span className="font-semibold text-purple-600">AI-Powered Resume Analyzer</span> is built to help job seekers improve their resumes using advanced 
          Artificial Intelligence. It analyzes your resume against key ATS (Applicant Tracking System) parameters like:
        </p>

        <ul className="list-disc ml-6 text-gray-700 text-md md:text-lg mb-6 space-y-2">
          <li>Relevant skills & keyword matching</li>
          <li>Resume structure & formatting</li>
          <li>Role alignment & achievements</li>
          <li>Grammar & content clarity</li>
        </ul>

        <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-10">
          Whether you’re a fresher or an experienced professional, this tool gives personalized 
          improvement suggestions to make your resume more impactful and increase your shortlisting chances.
        </p>

        {/* Contact Card */}
        <div className="bg-linear-to-r from-blue-100 to-purple-100 p-6 rounded-2xl shadow-md border border-white/50">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            📩 Reach Out
          </h2>
          <p className="text-gray-700 mb-2">
            Have a suggestion or need help? We're here for you!
          </p>

          <p className="text-gray-900 font-medium">
            📧 Email:{" "}
            <a className="text-blue-600 underline" href="mailto:mithleshkumar.wrk@gmail.com">
              mithleshkumar.wrk@gmail.com
            </a>
          </p>
          <p className="text-gray-900 font-medium mt-1">
            📞 Phone:{" "}
            <a className="text-blue-600 underline" href="tel:+917217663942">
              +91-7217663942
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}
