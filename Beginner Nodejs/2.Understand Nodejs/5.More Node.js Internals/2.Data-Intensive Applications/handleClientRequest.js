function handleClientRequest(request) {
  makeDbCall(request.someInfo, function (result) {
    // The request corresponds to the correct db result because of closure
    request.complete(result);
  });
}
