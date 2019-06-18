// TODO: Create action creators as defined in tests

export const addQuote = quote => {
  return {
    type: 'ADD_QUOTE',
    quote: {...quote}
  };
};

export const removeQuote = quoteId => {
  return {
    type: 'REMOVE_QUOTE',
    quote: quoteID
  };
};

export const upvoteQuote = quoteId => {
  return {
    type: 'UPVOTE_QUOTE',
    quoteID
  };
};


export const downvoteQuote = quoteId => {
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteId
  };
};
