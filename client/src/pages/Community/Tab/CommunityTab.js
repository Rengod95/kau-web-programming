import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const CommunityTab = () => {
  const [value, setValue] = React.useState("notice");
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
    navigate(`/community/${newValue}`);
  };

  return (
    <Box
      sx={{
        borderRadius: 10,
        width: 720,
        display: "flex",
        justifyContent: "center",
        backgroundImage: "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",
        boxShadow:
          "rgba(0, 0, 0, 0.3) 0px 10px 15px -3px, rgba(11, 4, 127, 0.3) 0px 4px 6px -2px",
      }}
    >
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="styled tabs example"
      >
        <StyledTab label="공지사항" value={"notice"} />
        <StyledTab label="이벤트" value={"event"} />
        <StyledTab label="피드" value={"feed"} />
      </StyledTabs>
    </Box>
  );
};

export default CommunityTab;

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 70,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#00bf8e",
    bottom: 30,
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
      color: "#fff",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#6c63ff",
    },
  })
);
