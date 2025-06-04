// import { useState, useEffect } from 'react';
// import axios from 'axios';

// export function useAxios(config) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let cancelToken = axios.CancelToken.source(); // chống leak khi unmount

//     setLoading(true);
//     axios({
//       ...config,
//       cancelToken: cancelToken.token,
//     })
//       .then((response) => setData(response.data))
//       .catch((error) => {
//         if (axios.isCancel(error)) {
//           console.log('Request canceled', error.message);
//         } else {
//           setError(error);
//         }
//       })
//       .finally(() => setLoading(false));

//     return () => cancelToken.cancel('Operation canceled by the user.');
//   }, [config.url]); // dependency để tự fetch lại nếu url thay đổi

//   return { data, loading, error };
// }