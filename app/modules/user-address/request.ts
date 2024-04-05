/**
 * Api Request
 * @format
 */

import axios from 'axios';

export async function searchByPin(
  pinCode: string,
): Promise<{ city: string; state: string } | undefined> {
  try {
    const response = await axios.get(
      `https://api.postalpincode.in/pincode/${pinCode}`,
    );
    const { State, Block } = response.data[0].PostOffice[0];
    return { state: State, city: Block };
  } catch (error) {
    console.log('[Error: searchByPin', error);
  }
}
