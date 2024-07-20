import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchUsers, toggleEmailVisibility, setCurrentPage } from '../redux/actions/userActions';
import RootLayout from '@/app/layout';



const List = () => {

  //get session
  const { data: session, status } = useSession();
  const router = useRouter();

  //data section
  const dispatch = useDispatch();
  const { users, loading, error, showEmails, currentPage, totalPages } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    if (status === 'loading') {
            return; 
          }

    //check if user is logged in, protect route if they haven't
    if (!session) {
      router.replace('/'); 
    }

    dispatch(fetchUsers(currentPage));
  }, [dispatch, currentPage, session, router, status]);

  if (status === 'loading') {
        return <p>Loading...</p>;
      }

  const handleToggleEmail = () => {
    dispatch(toggleEmailVisibility());
  };

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  //if user is logged in, return the below.
  return (
    <RootLayout>
    <div>
      <h1 style={{margin:'1.5rem', fontSize: '1.5rem' }}>User List</h1>
      
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '1rem',
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: '0.75rem',
                borderBottom: '1px solid #ddd',
              }}
            >
              ID
            </th>
            <th
              style={{
                padding: '0.75rem',
                borderBottom: '1px solid #ddd',
              }}
            >
              First Name
            </th>
            <th
              style={{
                padding: '0.75rem',
                borderBottom: '1px solid #ddd',
              }}
            >
              Last Name
            </th>
            <th
              style={{
                padding: '0.75rem',
                borderBottom: '1px solid #ddd',
              }}
            >
              Email
            </th>
            <th
              style={{
                padding: '0.75rem',
                borderBottom: '1px solid #ddd',
              }}
            >
              User Photo
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #ddd' }}>{user.id}</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #ddd' }}>{user.first_name}</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #ddd' }}>{user.last_name}</td>
              <td style={{
                padding: '1rem',
                marginTop:'1.1rem',
                borderBottom: '1px solid #ddd',
                display: 'flex',  
                alignItems: 'center',  
              }}>
                <span style={{ flex: '1' }}>
                  {showEmails ? user.email : 'xxxxxxxxxx@regres.in'}
                </span>
                <button
                  style={{
                    fontSize: '12px',
                    color: '#fff',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onClick={handleToggleEmail}
                >
                  {showEmails ? (
                    
                      <img
                        src="/view-icon.svg"
                        alt="open eye icon"
                        width="20"
                        height="20"
                        style={{ marginLeft: '0.5rem' }}
                      />
                    
                  ) : (
                    
                      <img
                        src="/closed-eye-icon.svg"
                        alt="close eye icon"
                        width="20"
                        height="20"
                        style={{ marginLeft: '0.5rem' }}
                      />
                  
                  )}
                </button>
              </td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #ddd' }}>
                {user.avatar && (
                  <img
                    src={user.avatar}
                    alt={`Avatar of ${user.first_name}`}
                    style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '1rem',
        }}
      >
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            style={{
              padding: '0.5rem 1rem',
              fontSize: '1rem',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '5px',
              margin: '0.2rem',
            }}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
    </RootLayout>
  );
};

export default List;

// Define inline styles for table header and cell
const tableHeaderStyle = {
  padding: '0.75rem',
  textAlign: 'left',
  fontWeight: 'bold',
  borderBottom: '1px solid #ddd',
};

const tableCellStyle = {
  padding: '0.75rem',
  borderBottom: '1px solid #ddd',
};
