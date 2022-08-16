// List all products by brand, category and release date
import {products} from './../api/productoBusqueda'

// self invoking async function
async function getProducts()  {
  // TechSpecs API Key
  const techspecs_key = "V789x4dvUg31urlkjp7T70ce0TnNxdDi";

  // TechSpecs base https://apis.dashboard.techspecs.io/{techspecs_base}
  const techspecs_base = "a8TD3mkN49fhg2y";

  // enter the page number to fetch results from
  const page = 1;

  // type in the name of the brand you're looking for or leave this field empty to see results from all brands
  const brand = ["Apple"];

  // type in the name of the category you're looking for or leave this field empty to see results from all categories
  const category = ["smartphone"];

  // please provide a date range to narrow your search. Leave this field empty to fetch all results from all dates
  const date = {
    from: "2010-01-01", // YYYY-MM-DD
    to: "2022-03-15", // YYYY-MM-DD
  };

  // choose between "pretty" or "raw" mode for viewing response
  const response = await products(
    techspecs_base,
    brand,
    category,
    date,
    page,
    techspecs_key,
    "pretty"
  );

  // print the search results
  console.log(response);
}


getProducts();