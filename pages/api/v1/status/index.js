function status(request, response) {
  response.status(200).json({
    findByAno: "Cadê meu rei!",
  });
}

export default status;
