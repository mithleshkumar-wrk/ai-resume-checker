import Select from "react-select";
import { 
  FaCode, FaServer, FaReact, FaMobile, FaAws, FaDatabase, FaShieldAlt,
  FaProjectDiagram, FaTools, FaSearch, FaUserTie 
} from "react-icons/fa";

export default function JobRoleSelect({ selectedRoles, setSelectedRoles }) {
  const groupedOptions = [
    {
      label: "Frontend",
      options: [
        { value: "Frontend Developer", label: "Frontend Developer", icon: <FaCode /> },
        { value: "React Developer", label: "React Developer", icon: <FaReact /> },
        { value: "JavaScript Developer", label: "JavaScript Developer", icon: <FaCode /> },
        { value: "UI/UX Developer", label: "UI/UX Developer", icon: <FaCode /> },
      ]
    },
    {
      label: "Backend",
      options: [
        { value: "Backend Developer", label: "Backend Developer", icon: <FaServer /> },
        { value: "Node.js Developer", label: "Node.js Developer", icon: <FaServer /> },
        { value: "Java Developer", label: "Java Developer", icon: <FaServer /> },
        { value: "Python Developer", label: "Python Developer", icon: <FaServer /> },
        { value: "PHP Developer", label: "PHP Developer", icon: <FaServer /> },
      ]
    },
    {
      label: "Full Stack",
      options: [
        { value: "Full Stack Developer", label: "Full Stack Developer", icon: <FaCode /> },
      ]
    },
    {
      label: "Mobile Development",
      options: [
        { value: "Mobile App Developer", label: "Mobile App Developer", icon: <FaMobile /> },
        { value: "Android Developer", label: "Android Developer", icon: <FaMobile /> },
        { value: "Flutter Developer", label: "Flutter Developer", icon: <FaMobile /> },
      ]
    },
    {
      label: "Cloud & DevOps",
      options: [
        { value: "DevOps Engineer", label: "DevOps Engineer", icon: <FaAws /> },
        { value: "Cloud Engineer", label: "Cloud Engineer", icon: <FaAws /> },
      ]
    },
    {
      label: "Data Roles",
      options: [
        { value: "Data Engineer", label: "Data Engineer", icon: <FaDatabase /> },
        { value: "Data Scientist", label: "Data Scientist", icon: <FaDatabase /> },
        { value: "Machine Learning Engineer", label: "Machine Learning Engineer", icon: <FaDatabase /> },
      ]
    },
    {
      label: "Testing & QA",
      options: [
        { value: "QA Engineer", label: "QA Engineer", icon: <FaTools /> },
        { value: "Automation Tester", label: "Automation Tester", icon: <FaTools /> },
        { value: "Manual QA Tester", label: "Manual QA Tester", icon: <FaTools /> },
      ]
    },
    {
      label: "Cyber / IT",
      options: [
        { value: "Cybersecurity Analyst", label: "Cybersecurity Analyst", icon: <FaShieldAlt /> },
        { value: "IT Support Specialist", label: "IT Support Specialist", icon: <FaTools /> },
      ]
    },
    {
      label: "Management",
      options: [
        { value: "Project Manager", label: "Project Manager", icon: <FaProjectDiagram /> },
        { value: "Product Manager", label: "Product Manager", icon: <FaUserTie /> },
        { value: "Business Analyst", label: "Business Analyst", icon: <FaSearch /> },
      ]
    }
  ];

  return (
    <div className="my-4">
      <label className="block mb-2 font-medium text-center text-gray-700">
        Select Job Role(s)
      </label>

      <Select
        isMulti
        options={groupedOptions}
        value={selectedRoles}
        onChange={setSelectedRoles}
        placeholder="Search job roles..."
        formatOptionLabel={(option) => (
          <div className="flex items-center gap-2">
            {option.icon} {option.label}
          </div>
        )}
        className="text-gray-800 "
        classNamePrefix="select"
      />
    </div>
  );
}
