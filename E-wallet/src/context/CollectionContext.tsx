import React from 'react';
import {
  useState,
  useEffect,
  createContext,
  useContext,
} from 'react';

// context for sending bookmarked info around
const collectionContext = createContext([]);

function CollectionProvider({ children }) {
  const [collection, setCollection] = useState([]);

// Fetches localStorage cart on site load
useEffect(() => {
    console.log('fetching cards');
    const storedCart = localStorage.getItem('cards');
    if (storedCart) {
        try {
        const parsedCollection = JSON.parse(storedCart);
        setCollection(parsedCollection);
        } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
        }
    }
    }, []);

    // Update localStorage whenever cart changes
    useEffect(() => {
      if (collection && collection.length > 0) {
        localStorage.setItem('cards', JSON.stringify(collection));
      }
    }, [collection]);  // Run every time cart changes

    return (
        <collectionContext.Provider value={{ collection, setCollection }}>
            {children}
        </collectionContext.Provider>
    );
}

// makes sure context doesn't make more than one state
export const useCollection = () => {
  const currentCollection = useContext(collectionContext);

  if (!currentCollection) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return currentCollection;
};

export default CollectionProvider;