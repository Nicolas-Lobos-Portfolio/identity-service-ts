import { mockCacheServicePort } from '../mock/mock-cache-service-port.spec';

describe('CacheServicePort', () => {
  it('debería obtener un valor del caché si existe', async () => {
    const result = await mockCacheServicePort.get('existing-key');
    expect(result).toEqual({ data: 'mockedData' });
  });

  it('debería retornar null si la clave no existe en caché', async () => {
    const result = await mockCacheServicePort.get('non-existing-key');
    expect(result).toBeNull();
  });

  it('debería almacenar un valor en caché', async () => {
    const keyTest = 'new-key';
    const dataTest = JSON.stringify({
      data: 'test',
    });
    await expect(
      mockCacheServicePort.set(keyTest, dataTest),
    ).resolves.toBeUndefined();
    expect(mockCacheServicePort.set).toHaveBeenCalledWith(
      keyTest,
      dataTest,
      undefined,
    );
  });

  it('debería eliminar un valor del caché', async () => {
    const keyExist = 'existing-key';
    await expect(mockCacheServicePort.del(keyExist)).resolves.toBeUndefined();
    expect(mockCacheServicePort.del).toHaveBeenCalledWith(keyExist);
  });
});
