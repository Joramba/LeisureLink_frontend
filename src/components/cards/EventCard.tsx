import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Divider } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTranslation } from "react-i18next";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import Image from "../../assets/event.jpg";
import Image1 from "../../assets/1.png";
import { Link } from "react-router-dom";

interface EventCardProps {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  address: string;
  latitude: number;
  longitude: number;
  category: string;
  link: string;
}

const EventCard: React.FC<EventCardProps> = ({
  name,
  startDate,
  category,
  address,
  link,
}) => {
  const { t } = useTranslation();

  const startDateObject = new Date(startDate);
  const formattedStartDate = startDateObject.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <Card
      sx={{
        border: "1px solid #ccc",
        textDecoration: "none",
        borderRadius: 2,
        width: 300,
        display: "flex",
        justifyContent: "center",
        "@media (max-width: 628px)": {
          width: "65%",
        },
      }}
    >
      <CardContent
        sx={{
          padding: 2,
        }}
      >
        <Link style={{ textDecoration: "none" }} to={`/events/${link}`}>
          <img
            width="100%"
            height="150px"
            src={Image}
            alt="image"
            className="event-card"
          />
          <Typography
            sx={{ mt: 1, color: "text.primary" }}
            variant="h5"
            component="div"
          >
            {name}
          </Typography>
        </Link>

        <Divider sx={{ mb: 1 }} />
        <Box
          sx={{ display: "flex", flexDirection: "column", ml: 2, width: "90%" }}
        >
          <Typography sx={{ mb: 1 }} variant="body2" color="text.primary">
            {t("homeContent.categories")}: {category}
          </Typography>

          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
              mb: 1,
            }}
            variant="body2"
            color="text.primary"
          >
            <EventIcon />
            {formattedStartDate}
          </Typography>

          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
              mb: 1,
            }}
            variant="body2"
            color="text.primary"
          >
            <LocationOnIcon />
            {address}
          </Typography>

          <Divider sx={{ mb: 2 }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{ width: 50, height: 50, marginRight: 2 }}
                src={Image1}
                alt="image"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 1,
                  }}
                  variant="body2"
                  color="text.secondary"
                >
                  Host of the event:
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 1,
                    mb: 1,
                  }}
                  variant="body2"
                  color="text.main"
                >
                  Name Surname
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CheckCircleIcon />
              <Typography>10 guests</Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EventCard;
