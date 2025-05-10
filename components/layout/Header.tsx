import Notification from "../user/Notification";
import User from "../user/User";

export default function Header({
  title,
  subtitle,
  actions,
}: {
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
}) {
  return (
    <header className="flex justify-center items-center mt-5 z-10 mb-5 ">
      <div className="flex justify-between w-[1060px] px-[43px] pr-[42.998px] pt-[22px] pb-[21px] border-[0.2px] border-[#A19C9C] bg-[#F6F6F6]">
        <div>
          {title && (
            <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
          )}
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
        <div className="flex justify-between items-center space-x-4">
          <div className="flex items-center space-x-4">{actions}</div>
          <Notification />
          <User />
        </div>
      </div>
    </header>
  );
}
