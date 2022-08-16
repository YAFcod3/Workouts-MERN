import axios from 'axios';


export async function products(
    techspecs_base,
    brand ,
    category ,
    date,
    page,
    key,
    mode = "raw"
  ) {
  
  
    const url = `https://apis.dashboard.techspecs.io/${techspecs_base}/api/product/getAll?page=${page}`;
  
  
    const header = {
      Accept: "application/json",
      "x-blobr-key": key,
      "Content-Type": "application/json",
    };
  
  
    const payload = {
      brand: brand,
      category: category,
      date: date.from,
      to: date.to,
    };
  
  
    const req = await axios.post(url, payload, {
      headers: header,
    });
  
  
  
  
  
  
    if (mode === "raw") {
      return req.data.data;
    } else if (mode === "pretty") {
      try {
        return req.data.data.product;
      } catch (err) {
        return req.data.data;
      }
    } else {
      return "Invalid Mode";
    }
  }
  
  
  
  
  
  