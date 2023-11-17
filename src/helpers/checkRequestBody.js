const checkRequestBody = (request, response, next) => {
    console.log(request.body)
    if (!request.body || Object.keys(request.body).length === 0) {
      return response.status(400).json({ error: 'Request body is empty.' });
    }
    
    next();
  };
  
  export { checkRequestBody };
 