import { memo } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function MasterLayout({ children, ...props }) {
  return (
    <div {...props}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default memo(MasterLayout);
