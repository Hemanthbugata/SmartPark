import React from "react";

export default function page() {
  const teamData = [
    {
      name: "Tushar",
      role: "Block chain Developer",
      img: "./avatar1.png",
      bg: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      linkedin: "",
      github: "",
      twitter: "",
    },
    {
      name: "Suraj Thammi",
      role: "Fullstack Developer",
      img: "./avatar2.png",
      bg: "https://images.unsplash.com/photo-1680007631114-cc0b37816fff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      linkedin: "https://www.linkedin.com/in/surajthammi/",
      github: "https://github.com/suraj719",
      twitter: "https://twitter.com/0xsuraj719",
    },
    {
      name: "Hemanth Bugata",
      role: "Smart Contract Developer",
      img: "./avatar3.png",
      bg: "https://images.unsplash.com/photo-1562910084-5811d97429cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80",
      linkedin: "https://www.linkedin.com/in/hemanth-bugata",
      github: "https://github.com/HemanthBugata",
      twitter: "https://twitter.com/HemanthBugata",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap justify-evenly items-center">
        {teamData.map((mem, index) => {
          return (
            <div
              key={index}
              className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-md hover:shadow-xl pb-5 rounded-lg text-gray-900"
            >
              <div className="rounded-t-lg h-32 overflow-hidden">
                <img
                  className="object-cover object-top w-full"
                  src={mem.bg}
                  alt="Mountain"
                />
              </div>
              <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img
                  className="object-cover object-center w-full h-32 bg-white"
                  src={mem.img}
                  alt="avatar1"
                />
              </div>
              <div className="text-center mt-2">
                <h2 className="font-semibold">{mem.name}</h2>
                <p className="text-gray-500">{mem.role}</p>
              </div>
              <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
                {/* <li className="flex flex-col items-center justify-around"> */}
                <a href={mem.linkedin} target="_blank" rel="noreferrer" className="px-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className={`h-3.5 w-3.5 text-primary dark:text-primary-400 ${ index == 4 && "hidden" }`}
                    >
                      <path
                        fill="currentColor"
                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                      />
                    </svg>
                    </a>
                {/* </li> */}
                <a href={mem.github} target="_blank" rel="noreferrer" className="px-2 -mt-1">
                       <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="bi bi-github"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.58.82-2.14-.08-.2-.36-1.07.08-2.23 0 0 .71-.23 2.33.86.68-.2 1.41-.3 2.14-.3s1.46.1 2.14.3c1.62-1.1 2.33-.86 2.33-.86.44 1.16.16 2.03.08 2.23.51.56.82 1.27.82 2.14 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.47 0 1.06-.01 1.92-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                      />
                    </svg>
                    </a>

                    <a href={mem.twitter} target="_blank" rel="noreferrer" className="px-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-4 w-4 text-primary dark:text-primary-400"
                    >
                      <path
                        fill="currentColor"
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                      />
                    </svg>
                    </a>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}
