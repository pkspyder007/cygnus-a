export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request

    console.log(req.body);
  } else {
    // Handle any other HTTP method
  }
}