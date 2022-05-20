export default function handler(req, res) {
  console.log(req.body);
  if (req.method === 'POST') {
    // Process a POST request
    console.log("POST");
    
  } else {
    // Handle any other HTTP method
  }

  res.send('Ok')
}