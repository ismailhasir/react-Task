import { Popover, Button } from "@mui/material";
import { useState } from "react";
import { QuestionMark } from "../assets/icons";

const FirmInfo = ({ firmName, popoverContent = [], productDesc }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="firm-description">
      <span>{productDesc}</span>
      <h4>
        {firmName}&nbsp;
        <Button onClick={handleClick}>
          <QuestionMark />
        </Button>
      </h4>
      {!!popoverContent.length && (
        <Popover
          id={!!anchorEl ? "someid" : undefined}
          open={!!anchorEl}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          {/* ben buraya key koydum ama neden koydum */}
          {popoverContent.map((content, key) => (
            <div className="popover-content" key={key}>
              <h6 className="popover-title">{content.Title}</h6>
              <p className="popover-text">{content.Description}</p>
            </div>
          ))}
        </Popover>
      )}
    </div>
  );
};

export default FirmInfo;
