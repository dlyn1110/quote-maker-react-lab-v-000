// TODO: Create action creators as defined in tests

export const addQuote = quote => {
  return {
    type: 'ADD_Quote',
    quote: {...quote}
  }
}

export const removeQuote = quote => {
  return {
    type: 'REMOVE_QUOTE',
    quote: quoteID
  }
}
