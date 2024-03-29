import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchData";
import { Sidebar, Videos } from "./index";
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Marvel movies");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        ></Sidebar>
        <Typography className="copyright" variant="body2">
          {" "}
          Copyright 2022 @lavanya - YouTube Clone
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography sx={{ color: "white" }}>
          {selectedCategory}
          <span style={{ color: "#f31503" }}> Videos</span>
        </Typography>
        <Videos videos={videos}> </Videos>
      </Box>
    </Stack>
  );
};

export default Feed;
