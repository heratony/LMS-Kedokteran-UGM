export async function fakeLoginApi(email: string, password: string, type: string) {
  return new Promise<{ success: boolean; token?: string }>((resolve) => {
    setTimeout(() => {
      if (email === 'admin' && password === '123456' && type === 'admin') {
        resolve({ success: true, token: 'admin-token-123' });
      } else if (email === 'user@example.com' && password === '123456' && type === 'user') {
        resolve({ success: true, token: 'user-token-456' });
      } else {
        resolve({ success: false });
      }
    }, 1000);
  });
}
