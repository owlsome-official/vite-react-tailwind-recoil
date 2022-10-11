import ReactIcon from 'assets/icons/react.svg'
import ViteIcon from 'assets/icons/vite.svg'
import LogoImage from 'assets/images/logo200.png'
import { GetEnv } from "utils/index"
import { version } from '../../package.json'

const AfterInstallation = () => {
  return (
    <div className="p-1.5 w-full bg-gradient-to-l from-[#743ad5] to-[#d53a9d]">
      <div className="p-8 bg-base-100 relative">

        <div className="absolute top-2.5 right-4">
          <div className="py-0.5 px-4 flex gap-1 rounded-full text-small text-neutral bg-gradient-to-r from-[#743ad5] to-[#d53a9d]">
            <img src={ViteIcon} width="16px" alt="vite-icon" />
            <img src={ReactIcon} width="16px" alt="react-icon" />
            <strong>Template v{version}</strong>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <strong className="text-h3 bg-gradient-to-l from-[#743ad5] to-[#d53a9d] bg-clip-text text-transparent">After Installation</strong>
        </div>

        <div className="mx-auto p-1.5 mb-4 w-full max-w-xs text-center rounded-xl bg-gradient-to-r from-[#743ad5] to-[#d53a9d] shadow-lg">
          <div className="flex flex-col items-center">
            <img src={LogoImage} alt="logo" />
            <div className="w-full bg-neutral p-1 rounded-lg">
              <div><strong>App Version: </strong>{version}</div>
              <div><strong>Mode: </strong>{GetEnv("MODE")}</div>
            </div>
          </div>
        </div>

        <div className="py-2">
          <strong>You have to edit text by name below this <span className="text-[#d53a9d]">(Trick: use "Find All and Replace")</span></strong>
          <ul className="pl-8 pt-4 list-[upper-roman]">
            <li>REPLACE_WITH_YOUR_APP_NAME</li>
            <li>REPLACE_WITH_YOUR_APP_DESCRIPTION</li>
            <li>REPLACE_WITH_YOUR_APP_API</li>
            <li>REPLACE_WITH_YOUR_APP_GIT_LINK</li>
            <li>REPLACE_WITH_YOUR_PROJECT_NAME</li>
            <li>REPLACE_WITH_YOUR_SONARQUBE_IP_AND_PORT</li>
            <li>REPLACE_WITH_YOUR_DOCKER_REGISTRY</li>
          </ul>
        </div>

        <div className="pt-4 text-small leading-tight text-[#743ad5]">Note: REPLACE_WITH_YOUR_SONARQUBE_IP_AND_PORT should be like "sub.host.com:9000" or "172.1.2.3:9000"</div>
      </div>
    </div>
  )
}

export default AfterInstallation
