import React, { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const category = 'success';
    const apiKey = '8iXdcUPROaJsg0MumrSIig==q4GLeMSLf6RiwxHD';

    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: { 'X-Api-Key': `${apiKey}` },
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('No quotes for today');
        }
        return resp.json();
      })
      .then((json) => {
        setQuote(json);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [error]);

  if (loading) {
    return (<p className="quote_content">Loading...</p>);
  } if (error) {
    return (<p className="quote_content">Error ocurred accessing the API </p>);
  }

  return (
    <div className="quote_container">
      {quote?.map((value) => (
        <div key={value.id + 1}>
          <p className="quote_content">{`" ${value.quote} "`}</p>
          <p className="quote_author">{value.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Quote;
