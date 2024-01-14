import { Box, Button } from "@mui/material";
import RadiusFilter from "./MapFilters/RadiusFilter";
import { useEffect } from "react";
import DateFilter from "./MapFilters/DateFilter";
import NameFilters from "./MapFilters/NameFilters";
import CityFilter from "./MapFilters/CityFilter";
import CategoriesFilter from "./MapFilters/CategoriesFilter";
import { useTranslation } from "react-i18next";
import CategotyFilter from "./MapFilters/CategotyFilter";

const MapFilters = ({
  filters,
  setFilters,
  fetchData,
  mapRef,
}: {
  filters: EventFilters;
  setFilters: React.Dispatch<React.SetStateAction<EventFilters>>;
  fetchData: () => Promise<void>;
  mapRef: React.MutableRefObject<any>;
}) => {
  const { t } = useTranslation();

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  const handleFilters = (name: string, value: any) => {
    setFilters((old: EventFilters) => ({
      ...old,
      [name]: value,
    }));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <CityFilter setFilters={setFilters} mapRef={mapRef} />
      <NameFilters filters={filters} handleFilters={handleFilters} />
      <RadiusFilter filters={filters} handleFilters={handleFilters} />
      <CategotyFilter filters={filters} setFilters={setFilters} />
      <DateFilter filters={filters} handleFilters={handleFilters} />
      <Button variant="contained" onClick={fetchData}>
        {t("map.enter_filters")}
      </Button>
    </Box>
  );
};

export default MapFilters;
