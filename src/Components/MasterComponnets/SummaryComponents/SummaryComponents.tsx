import { Stack } from "@mui/material";
import InventoryAndProductContent from "./InventoryAndProductContent";
import InventoryFirst from "../../../Icones/InventoryFirst";
import InventoryTwo from "../../../Icones/InventoryTwo";
import ProductOne from "../../../Icones/ProductOne";
import ProductTwo from "../../../Icones/ProductTwo";

export default function SummaryComponents() {
  return (
    <>
      <Stack spacing={2} sx={{ w: "100%" }}>
        {/* Inventory */}
        <InventoryAndProductContent
          header="Inventory Summary "
          icon={InventoryFirst}
          numberLeft="300"
          titleLeft="Quantity in Hand"
          iconTwo={InventoryTwo}
          numberRight="200"
          titleRight="To be received"
        />
        {/* Product */}
        <InventoryAndProductContent
          header="Product Summary"
          icon={ProductOne}
          numberLeft="852"
          titleLeft="Number of Suppliers"
          iconTwo={ProductTwo}
          numberRight="321"
          titleRight="Number of Categories"
        />
     
      </Stack>
    </>
  );
}
