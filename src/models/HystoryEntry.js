class HistoryEntry {
  constructor(request, response) {
    this.request = {
      countryId: request.countryId,
      period: request.period,
      year: request.year || null,
    };

    this.response = response;
    this.timestamp = new Date();
  }

  // Confronto richieste fatte
  isSameRequest(otherRequest) {
    return (
      this.request.countryId === otherRequest.countryId &&
      this.request.period === otherRequest.period &&
      this.request.year === otherRequest.year
    );
  }

  hasErrors() {
    return this.response.errors !== null;
  }

  getErrorDetails() {
    return this.response.errors?.detail || "No errors";
  }
}

export default HistoryEntry;
