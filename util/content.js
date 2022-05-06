export const is404 = (error) => /not found/i.test(error.message)
export const toDate = (timestamp) => new Date(timestamp).toLocaleDateString('en-US')