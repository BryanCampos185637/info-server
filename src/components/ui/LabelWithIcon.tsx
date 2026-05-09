import { Box } from "@mui/material";

interface Props {
  icon: React.ReactNode;
  label: string;
}

export default function LabelWithIcon({ icon, label }: Props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          width: 32,
          height: 32,
          borderRadius: 1,
          backgroundColor: "#95baffff",
          justifyContent: "center",
        }}
      >
        {icon}
      </Box>
      {label}
    </Box>
  );
}
