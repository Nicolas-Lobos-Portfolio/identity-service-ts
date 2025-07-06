import { Test, TestingModule } from '@nestjs/testing';
import { CheckCodeUseCase } from '../check-code.usecase';
import { CacheServicePort } from '@shared/cache/domain/cache-service-port.shared';
import { mockCacheServicePort } from '@shared/cache/domain/test/mock/mock-cache-service-port.spec';

describe(CheckCodeUseCase.name, () => {
  let checkCodeUseCase: CheckCodeUseCase;
  let cacheServicePort: CacheServicePort;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CheckCodeUseCase,
        { provide: CacheServicePort, useValue: mockCacheServicePort },
      ],
    }).compile();

    checkCodeUseCase = module.get<CheckCodeUseCase>(CheckCodeUseCase);
    cacheServicePort = module.get<CacheServicePort>(CacheServicePort);
  });

  it('verify code at caché ', async () => {
    const code = '123-456';
    cacheServicePort.set(code, code);
    const codeUseCase = await checkCodeUseCase.execute({ code });
    expect(codeUseCase).toHaveLength(1);
    expect(cacheServicePort.get(code)).toHaveBeenCalled();
  });
});
