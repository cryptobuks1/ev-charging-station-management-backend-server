import CrudApi from './utils/CrudApi';
import TestConstants from './utils/TestConstants';

export default class TenantApi extends CrudApi {
  private _baseApi;
  public constructor(authenticatedApi, baseApi) {
    super(authenticatedApi);
    // For call without auth
    this._baseApi = baseApi;
  }

  public async readById(id) {
    return super.readById(id, '/client/api/Tenant');
  }

  public async readAll(params, paging = TestConstants.DEFAULT_PAGING, ordering = TestConstants.DEFAULT_ORDERING) {
    return super.readAll(params, paging, ordering, '/client/api/Tenants');
  }

  public async create(data) {
    return super.create(data, '/client/api/TenantCreate');
  }

  public async update(data) {
    return super.update(data, '/client/api/TenantUpdate');
  }

  public async delete(id) {
    return await this._authenticatedApi.send({
      method: 'DELETE',
      url: '/client/api/TenantDelete',
      params: {
        ID: id,
        forced: true
      }
    });
  }
}
