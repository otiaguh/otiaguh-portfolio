import { type AppType } from "next/dist/shared/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "fallback",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={poppins.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
