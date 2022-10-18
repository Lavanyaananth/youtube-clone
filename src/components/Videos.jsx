import React from "react";
import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard, Loader } from "./";

const Videos = ({ videos }) => {
  if (!videos?.length) return <Loader />;
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}></VideoCard>}
          {item.id.ChannelId && (
            <ChannelCard channelDetail={item}></ChannelCard>
          )}
        </Box>
      ))}
    </Stack>
  );
};
export default Videos;
