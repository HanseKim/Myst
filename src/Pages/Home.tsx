import React, { useMemo } from "react";
import "./CSS/Home.css";
import DataListComponent from "./DataListComponent";
import Detail from "./Detail";
import StylistDetail from "./StylistDetail";

type HomeProps = {
  id: number;
  stylistid: number;
  detail: number;
  Gohome: () => void;
  Godetail: (id: number, detail: number) => void;
  GoStylist: () => void;
};

const Home: React.FC<HomeProps> = ({
  id,
  stylistid,
  detail,
  Godetail,
  Gohome,
  GoStylist,
}) => {
  const renderDetail = useMemo(() => {
    switch (detail) {
      case 0:
        return (
          <div className="container">
            <DataListComponent Godetail={Godetail} />
          </div>
        );
      case 1:
        return <Detail id={id} Goback={Gohome} />;
      case 2:
        return <StylistDetail stylistid={stylistid} Goback={GoStylist} />;
      default:
        return (
          <div className="container">
            <DataListComponent Godetail={Godetail} />
          </div>
        );
    }
  }, [detail, id, stylistid, Godetail, Gohome, GoStylist]);

  return <div>{renderDetail}</div>;
};

export default Home;
