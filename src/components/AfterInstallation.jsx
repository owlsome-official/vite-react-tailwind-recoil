import ReactIcon from "assets/icons/react.svg";
import ViteIcon from "assets/icons/vite.svg";
import LogoImage from "assets/images/logo200.png";
import { GetEnv } from "utils/index";
import { version } from "../../package.json";

const AfterInstallation = () => {
  return (
    <div className="w-full bg-linear-to-l from-[#f0f0f0] to-[#e8e8e8] p-1.5">
      <div className="relative p-8">
        <div className="mb-6 rounded-lg border border-dashed border-gray-400 bg-gray-200 px-4 py-3 text-center">
          <div className="text-lg font-bold text-gray-600">
            ARCHIVED &mdash; This project is no longer maintained
          </div>
          <div className="mt-1 text-sm text-gray-500">
            Recoil has been discontinued by Meta. Please migrate to{" "}
            <a
              href="https://github.com/buildingwatsize/vite-react-tailwind-jotai"
              target="_blank"
              className="font-semibold text-gray-700 underline"
            >
              vite-react-tailwind-jotai
            </a>
          </div>
        </div>

        <div className="mb-4 flex flex-col justify-between sm:flex-row">
          <div className="text-h3 font-bold text-gray-500">
            After Installation
          </div>
          <div className="text-small flex flex-col items-end gap-2.5">
            <div className="flex gap-1 rounded-full bg-gray-500 px-4 py-0.5 text-white">
              <img
                src={ViteIcon}
                width="16px"
                alt="vite-icon"
                className="grayscale"
              />
              <img
                src={ReactIcon}
                width="16px"
                alt="react-icon"
                className="grayscale"
              />
              <strong>Template v{version}</strong>
            </div>
          </div>
        </div>
        <div className="mx-auto mb-4 w-full max-w-xs rounded-xl bg-linear-to-r from-gray-300 to-gray-400 p-1.5 text-center shadow-lg">
          <div className="flex flex-col items-center">
            <img
              src={LogoImage}
              alt="logo"
              className="w-[30vw] max-w-40 grayscale"
            />
            <div className="w-full rounded-lg bg-gray-100 p-1">
              <div className="text-gray-500">
                This is the way -- Mandalorian
              </div>
              <div className="text-gray-400">
                <strong>Mode: </strong>
                {GetEnv("MODE")}
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 text-gray-500">
          <strong>
            You have to edit text by name below this{" "}
            <span className="text-gray-400">
              (Spoiled Alert!, use "Find All and Replace")
            </span>
          </strong>
          <ul className="list-[upper-roman] pl-8">
            <li>REPLACE_WITH_YOUR_PROJECT_NAME</li>
            <li>REPLACE_WITH_YOUR_PROJECT_DESCRIPTION</li>
            <li>REPLACE_WITH_YOUR_APP_API</li>
            <li>REPLACE_WITH_YOUR_APP_GIT_LINK</li>
            <li>REPLACE_WITH_YOUR_GROUP_NAME</li>
            <li>REPLACE_WITH_YOUR_SONARQUBE_IP_AND_PORT</li>
            <li>REPLACE_WITH_YOUR_DOCKER_REGISTRY</li>
          </ul>
        </div>
        <div className="text-small leading-tight text-gray-400">
          Note: REPLACE_WITH_YOUR_SONARQUBE_IP_AND_PORT should be like
          "sub.host.com:9000" or "172.1.2.3:9000"
        </div>
        <sup className="opacity-10">
          จะรู้ได้ไงคนไหนคนไทย ถ้าแบ่งปันให้กันใช้ละคนไทยแน่นอน
        </sup>
      </div>
    </div>
  );
};

export default AfterInstallation;
