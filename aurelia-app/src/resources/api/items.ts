const itemsEndpoint = '/items';

export interface Item {
  name: string;
  attributes: { [key: string]: string };
}

/**
 * Get all items.
 *
 * @export
 * @return {Promise<Item[]>} The stored items
 */
export async function getAllItems(): Promise<Item[]> {
  const response = await fetch(
    itemsEndpoint,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }
  );

  return response.json();
}


/**
 * Create a new item.
 *
 * @export
 * @param {Item} item The item to store
 * @return {Promise<Item>} The stored item
 */
export async function postItem(item: Item): Promise<Item> {
  const response = await fetch(
    itemsEndpoint,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    }
  );

  return response.json();
}

/**
 * Update a item.
 *
 * @export
 * @param {Item} item The item to update
 * @return {Promise<Item>} The updated item
 */
export async function putItem(item: Item): Promise<Item> {
  const response = await fetch(
    itemsEndpoint,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    }
  );

  return response.json();
}


