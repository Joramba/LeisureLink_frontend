import { Box, Pagination } from "@mui/material";
import React, { useRef, useState } from "react";
import MapCard from "./MapCard";

interface MapComponentProps {
  events: EventCard[];
}

const MapCards: React.FC<MapComponentProps> = ({ events }) => {
  const itemsPerPage = 10;
  const [page, setPage] = useState<number>(1);
  const topRef = useRef<any>(null);

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const count = Math.ceil(events.length / itemsPerPage);

  const currentEvents = events.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Box ref={topRef}></Box>
      {currentEvents.map((event) => (
        <MapCard event={event} />
      ))}
      <Pagination
        count={count}
        page={page}
        onChange={handleChangePage}
        color="primary"
      />
    </Box>
  );
};

export default MapCards;
