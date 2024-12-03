import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "failed", message: "Error in connection to database" });
    return;
  }
  if (req.method === "POST") {
    const data = req.body.data;

    if (!data.name || !data.lastName || !data.email)
      return res.status(400).json({ status: "failed", message: "Please enter name, last name and email" });
    
    try {
      const customer = await Customer.create(data);
      res.status({ status: "success", message: "Data saved successfully", data: customer });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: "failed", message: "Error in creating new customer" });
    }
  }
}
