import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import myAxios from '../../axios.config';
import AllQueriesCard from './AllQueriesCard';

const AllQueries = () => {

    const [allQueries, setAllQueries] = useState([]);

    useEffect(()=>{

        myAxios.get('/queries').then(res=>{
            const data = res.data;
            setAllQueries(data);
        })
        
    },[])
    
    return (
      <div className=" p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
        {allQueries.map((card) => {
          return <AllQueriesCard key={card._id} cardData={card}></AllQueriesCard>;
        })}
      </div>
    );
};

AllQueries.propTypes = {
    
};

export default AllQueries;