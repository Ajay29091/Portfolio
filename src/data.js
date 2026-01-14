import { FaPython, FaDatabase, FaServer, FaCloud, FaChartBar, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiMicrosoftazure, SiApachespark, SiDatabricks, SiPowerbi, SiJupyter, SiVisualstudiocode, SiOracle } from 'react-icons/si';

export const personalDetails = {
    name: "Ajay Pratap Singh",
    role: "Associate Data Engineer",
    tagline: "Building scalable data platforms using Microsoft Fabric, PySpark, and Azure.",
    email: "singhajay29091@gmail.com",
    phone: "+91-8081363068",
    location: "Greater Noida, India",
    social: [
        { name: "GitHub", url: "https://github.com/Ajay29091", icon: FaGithub },
        { name: "LinkedIn", url: "https://linkedin.com/in/ajay-pratap-singh-41821337b/", icon: FaLinkedin },
    ]
};

export const aboutContent = {
    summary: "Data Engineer with 6 months of experience in Microsoft Fabric, SQL Server, Notebooks, and PySpark. Skilled in building and managing Lakehouses, Data Warehouses, Data Marts, and ETL pipelines using Medallion Architecture. Strong understanding of data engineering principles with a focus on scalable analytics solutions and continuous learning."
};

export const skills = [
    {
        category: "Languages",
        items: [
            { name: "Python", icon: FaPython },
            { name: "SQL", icon: FaDatabase }
        ]
    },
    {
        category: "Frameworks",
        items: [
            { name: "PySpark", icon: SiApachespark },
            { name: "Delta Lake", icon: FaServer } // Generic server icon for Delta Lake
        ]
    },
    {
        category: "Cloud & Analytics",
        items: [
            { name: "Microsoft Fabric", icon: FaCloud },
            { name: "Azure", icon: SiMicrosoftazure },
            { name: "Databricks", icon: SiDatabricks },
            { name: "Power BI", icon: SiPowerbi }
        ]
    },
    {
        category: "Tools & DBs",
        items: [
            { name: "SQL Server", icon: FaDatabase },
            { name: "Azure Data Lake", icon: FaCloud },
            { name: "Oracle", icon: SiOracle },
            { name: "GitHub", icon: FaGithub },
            { name: "Jupyter", icon: SiJupyter },
            { name: "VS Code", icon: SiVisualstudiocode }
        ]
    }
];

export const experience = [
    {
        role: "Associate Data Engineer",
        company: "Dataminerz Innovative Solutions",
        location: "Greater Noida, U.P",
        period: "Aug 2025 – Present",
        type: "Full-time | On-site",
        description: [
            "Developed end-to-end data pipelines using Microsoft Fabric and Azure.",
            "Implemented Medallion Architecture in Lakehouse environments.",
            "Built ELT workflows using PySpark and SQL for optimized data processing.",
            "Designed Power BI dashboards to visualize KPIs and enable business insights."
        ]
    }
];

export const projects = [
    {
        title: "End-to-End Data Pipeline",
        date: "Sep 02, 2025",
        techStack: ["Microsoft Fabric", "SQL Server", "PySpark", "Power BI"],
        description: "Designed enterprise-grade data integration using Medallion Architecture (Landing → Bronze → Silver → Gold).",
        highlights: [
            "Ingested data from SQL Server, Dataverse, SFTP, and SharePoint.",
            "Built modular notebooks for each data layer with automated orchestration.",
            "Created a master pipeline to schedule, invoke, and monitor child pipelines.",
            "Improved reporting performance by 30% through scalable analytics architecture."
        ]
    }
];

export const education = [
    {
        degree: "B.Tech – CSE & AIML",
        school: "Noida International University",
        location: "Greater Noida",
        period: "2023 – 2027"
    },
    {
        degree: "Intermediate (CBSE)",
        school: "Shri Raghukul Vidya Peeth",
        period: "2020 – 2022"
    }
];

export const certifications = [
    {
        title: "Machine Learning Industrial Visit Program",
        issuer: "DUCAT",
        date: "Sep 2025"
    },
    {
        title: "Power BI Workshop Certification",
        issuer: "DUCAT",
        date: "Jan 2025"
    }
];
