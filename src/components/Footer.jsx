import {
  FaGithub,
  FaReact,
  FaServer,
  FaTwitter,
  FaLinkedin,
  FaDiscord,
  FaHeart,
  FaCode,
  FaLeaf,
} from "react-icons/fa";

const Footer = () => {
  const footerArray = [
    {
      title: "Platform",
      links: [
        { title: "About", link: "" },
        { title: "Features", link: "" },
        { title: "Blog", link: "" },
      ],
    },
    {
      title: "Community",
      links: [
        {
          title: "Discussions",
          link: "https://github.com/HacktoberBlog/hackerblog-frontend/discussions",
        },
        {
          title: "Issues",
          link: "https://github.com/HacktoberBlog/hackerblog-frontend/issues",
        },
        {
          title: "Contributing",
          link: "https://github.com/HacktoberBlog/hackerblog-frontend/blob/main/CONTRIBUTING.md",
        },
        { title: "Hacktoberfest", link: "https://hacktoberfest.com" },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          title: "Documentation",
          link: "https://github.com/HacktoberBlog/hackerblog-frontend/blob/main/README.md",
        },
        { title: "Help Center", link: "" },
        { title: "Status", link: "" },
        { title: "API", link: "" },
      ],
    },
    {
      title: "Legal",
      links: [
        { title: "Privacy Policy", link: "" },
        { title: "Terms of Service", link: "" },
        {
          title: "Code of Conduct",
          link: "https://github.com/HacktoberBlog/hackerblog-frontend/blob/main/CODE_OF_CONDUCT.md",
        },
        { title: "Cookie Policy", link: "" },
      ],
    },
  ];

  const socialsArray = [
    {
      title: "Github",
      link: "https://github.com/HacktoberBlog",
      icon: <FaGithub />,
    },
    {
      title: "Discord",
      link: "https://discord.gg/hackerblog",
      icon: <FaDiscord />,
    },
    {
      title: "LinkedIn",
      link: "https://linkedin.com/company/hackerblog",
      icon: <FaLinkedin />,
    },
    {
      title: "Twitter",
      link: "https://twitter.com/hackerblog",
      icon: <FaTwitter />,
    },
  ];

  const tagArray = [
    { title: "React", icon: <FaReact className="text-[0.75rem]" /> },
    { title: "Spring Boot", icon: <FaServer className="text-[0.75rem]" /> },
    { title: "Open Source", icon: <FaLeaf className="text-[0.75rem]" /> },
  ];

  return (
    <>
      <footer
        className="font-google-code text-gray-300 border-t"
        style={{
          background:
            "linear-gradient(135deg, rgb(15, 15, 35) 0%, rgb(20, 20, 48) 100%)",
          borderTopColor: "rgba(160, 160, 255, 0.2)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
          {/* Main Footer Content */}
          <div className="mb-8">
            {/* brand section with social links */}
            <div className="flex flex-col max-w-md mb-8 lg:mb-0 lg:float-left lg:w-2/5 lg:pr-8">
              <h3
                className="flex items-center gap-2 text-2xl font-semibold mb-4"
                style={{ color: "rgb(160, 160, 255)" }}
              >
                <FaCode
                  className="text-xl"
                  aria-hidden="true"
                  focusable={false}
                />
                HackerBlog
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 text-[0.95rem]">
                Where developers share stories, insights, and code - no cap! 🔥
              </p>
              <div className="flex gap-4">
                {socialsArray.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-lg text-xl transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      backgroundColor: "rgba(160, 160, 255, 0.1)",
                      color: "rgb(160, 160, 255)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgb(160, 160, 255)";
                      e.currentTarget.style.color = "rgb(20, 20, 48)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(160, 160, 255, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(160, 160, 255, 0.1)";
                      e.currentTarget.style.color = "rgb(160, 160, 255)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                    aria-label={social.title}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* links section */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 lg:w-3/5 lg:float-right">
              {footerArray.map((array, index) => (
                <div key={index} className="flex flex-col">
                  <h4 className="text-base font-semibold text-gray-50 mb-4">
                    {array.title}
                  </h4>
                  <div className="flex flex-col gap-2">
                    {array.links.map((subArr, subIndex) => (
                      <a
                        key={subIndex}
                        href={subArr.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 text-sm transition-colors duration-300 py-1 hover:text-[rgb(160,160,255)]"
                      >
                        {subArr.title}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* bottom text */}
          <div
            className="pt-6 border-t"
            style={{ borderTopColor: "rgba(160, 160, 255, 0.1)" }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 flex-wrap">
              <p className="text-gray-400 text-sm flex items-center gap-1 flex-wrap justify-center">
                © 2025 HackerBlog. Made with{" "}
                <FaHeart
                  className="inline-block mx-2 text-red-500 text-xs"
                  aria-hidden="true"
                  focusable={false}
                />{" "}
                by the developer community.
              </p>
              <div className="flex gap-3 flex-wrap justify-center">
                {tagArray.map((item) => (
                  <span
                    className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: "rgba(160, 160, 255, 0.1)",
                      color: "rgb(160, 160, 255)",
                    }}
                  >
                    {item.icon}
                    {item.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
