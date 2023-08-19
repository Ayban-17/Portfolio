"use client";
import { useSearchParams } from "next/navigation";
import IntroductionSection from "./IntroductionSection";
import AchievementSection from "./AchievementSection";
import CertificateSection from "./CertificateSection";

const RenderActiveNav = () => {
  const searchParams = useSearchParams();
  const currentPath = searchParams.get("section");

  const checkActiveNav = () => {
    switch (currentPath) {
      case "Introduction":
        return <IntroductionSection />;

      case "Achievements":
        return <AchievementSection />;

      case "Certificates":
        return <CertificateSection />;

      default:
        return <IntroductionSection />;
    }
  };

  return (
    <div className="text-white">
      <hr />
      {checkActiveNav()}
    </div>
  );
};

export default RenderActiveNav;
