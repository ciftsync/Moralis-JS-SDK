
// CAUTION: This file is automatically generated. Do not edit it manually!
import { endpointWeightsOperation, EndpointWeightsResponseAdapter, runContractFunctionOperation, RunContractFunctionRequest, RunContractFunctionResponseAdapter, web3ApiVersionOperation, Web3ApiVersionResponseAdapter, getBlockOperation, GetBlockRequest, GetBlockResponseAdapter, getDateToBlockOperation, GetDateToBlockRequest, GetDateToBlockResponseAdapter, getContractEventsOperation, GetContractEventsRequest, GetContractEventsResponseAdapter, getContractLogsOperation, GetContractLogsRequest, GetContractLogsResponseAdapter, getContractNFTsOperation, GetContractNFTsRequest, GetContractNFTsResponseAdapter, getMultipleNFTsOperation, GetMultipleNFTsRequest, GetMultipleNFTsResponseAdapter, getNFTContractMetadataOperation, GetNFTContractMetadataRequest, GetNFTContractMetadataResponseAdapter, getNFTContractTransfersOperation, GetNFTContractTransfersRequest, GetNFTContractTransfersResponseAdapter, getNFTLowestPriceOperation, GetNFTLowestPriceRequest, GetNFTLowestPriceResponseAdapter, getNFTMetadataOperation, GetNFTMetadataRequest, GetNFTMetadataResponseAdapter, getNFTOwnersOperation, GetNFTOwnersRequest, GetNFTOwnersResponseAdapter, getNFTTokenIdOwnersOperation, GetNFTTokenIdOwnersRequest, GetNFTTokenIdOwnersResponseAdapter, getNFTTradesOperation, GetNFTTradesRequest, GetNFTTradesResponseAdapter, getNFTTransfersByBlockOperation, GetNFTTransfersByBlockRequest, GetNFTTransfersByBlockResponseAdapter, getNFTTransfersFromToBlockOperation, GetNFTTransfersFromToBlockRequest, GetNFTTransfersFromToBlockResponseAdapter, getNFTTransfersOperation, GetNFTTransfersRequest, GetNFTTransfersResponseAdapter, getWalletNFTCollectionsOperation, GetWalletNFTCollectionsRequest, GetWalletNFTCollectionsResponseAdapter, getWalletNFTsOperation, GetWalletNFTsRequest, GetWalletNFTsResponseAdapter, getWalletNFTTransfersOperation, GetWalletNFTTransfersRequest, GetWalletNFTTransfersResponseAdapter, reSyncMetadataOperation, ReSyncMetadataRequest, ReSyncMetadataResponseAdapter, searchNFTsOperation, SearchNFTsRequest, SearchNFTsResponseAdapter, syncNFTContractOperation, SyncNFTContractRequest, SyncNFTContractResponseAdapter, getErc20ApprovalsOperation, GetErc20ApprovalsRequest, GetErc20ApprovalsResponseAdapter, getErc20BurnsOperation, GetErc20BurnsRequest, GetErc20BurnsResponseAdapter, getErc20TransfersOperation, GetErc20TransfersRequest, GetErc20TransfersResponseAdapter, getErc20MintsOperation, GetErc20MintsRequest, GetErc20MintsResponseAdapter, getTokenAllowanceOperation, GetTokenAllowanceRequest, GetTokenAllowanceResponseAdapter, getTokenMetadataBySymbolOperation, GetTokenMetadataBySymbolRequest, GetTokenMetadataBySymbolResponseAdapter, getTokenMetadataOperation, GetTokenMetadataRequest, GetTokenMetadataResponseAdapter, getTokenPriceOperation, GetTokenPriceRequest, GetTokenPriceResponseAdapter, getTokenTransfersOperation, GetTokenTransfersRequest, GetTokenTransfersResponseAdapter, getWalletTokenBalancesOperation, GetWalletTokenBalancesRequest, GetWalletTokenBalancesResponseAdapter, getWalletTokenTransfersOperation, GetWalletTokenTransfersRequest, GetWalletTokenTransfersResponseAdapter, getInternalTransactionsOperation, GetInternalTransactionsRequest, GetInternalTransactionsResponseAdapter, getTransactionOperation, GetTransactionRequest, GetTransactionResponseAdapter, getTransactionVerboseOperation, GetTransactionVerboseRequest, GetTransactionVerboseResponseAdapter, getWalletTransactionsOperation, GetWalletTransactionsRequest, GetWalletTransactionsResponseAdapter, getWalletTransactionsVerboseOperation, GetWalletTransactionsVerboseRequest, GetWalletTransactionsVerboseResponseAdapter, getNativeBalanceOperation, GetNativeBalanceRequest, GetNativeBalanceResponseAdapter, getNativeBalancesForAddressesOperation, GetNativeBalancesForAddressesRequest, GetNativeBalancesForAddressesResponseAdapter, getPairAddressOperation, GetPairAddressRequest, GetPairAddressResponseAdapter, getPairReservesOperation, GetPairReservesRequest, GetPairReservesResponseAdapter, resolveAddressOperation, ResolveAddressRequest, ResolveAddressResponseAdapter, resolveDomainOperation, ResolveDomainRequest, ResolveDomainResponseAdapter, resolveENSDomainOperation, ResolveENSDomainRequest, ResolveENSDomainResponseAdapter, uploadFolderOperation, UploadFolderRequest, UploadFolderResponseAdapter } from '@moralisweb3/common-evm-utils';
import { OperationResolver, NullableOperationResolver, PaginatedOperationResolver } from '@moralisweb3/api-utils';
import { ApiModule,  } from '@moralisweb3/common-core';
export abstract class ClientEvmApi extends ApiModule {
  
  public readonly utils = {
   endpointWeights: (): Promise<EndpointWeightsResponseAdapter> => {
      return new OperationResolver(endpointWeightsOperation, this.baseUrl, this.core).fetch({});
    },
   runContractFunction: (request: RunContractFunctionRequest): Promise<RunContractFunctionResponseAdapter> => {
      return new OperationResolver(runContractFunctionOperation, this.baseUrl, this.core).fetch(request);
    },
   web3ApiVersion: (): Promise<Web3ApiVersionResponseAdapter> => {
      return new OperationResolver(web3ApiVersionOperation, this.baseUrl, this.core).fetch({});
    },

  };

  public readonly block = {
   getBlock: (request: GetBlockRequest): Promise<GetBlockResponseAdapter | null> => {
      return new NullableOperationResolver(getBlockOperation, this.baseUrl, this.core).fetch(request);
    },
   getDateToBlock: (request: GetDateToBlockRequest): Promise<GetDateToBlockResponseAdapter> => {
      return new OperationResolver(getDateToBlockOperation, this.baseUrl, this.core).fetch(request);
    },

  };

  public readonly events = {
   getContractEvents: (request: GetContractEventsRequest): Promise<GetContractEventsResponseAdapter> => {
      return new PaginatedOperationResolver(getContractEventsOperation, this.baseUrl, this.core).fetch(request);
    },
   getContractLogs: (request: GetContractLogsRequest): Promise<GetContractLogsResponseAdapter> => {
      return new PaginatedOperationResolver(getContractLogsOperation, this.baseUrl, this.core).fetch(request);
    },

  };

  public readonly nft = {
   getContractNFTs: (request: GetContractNFTsRequest): Promise<GetContractNFTsResponseAdapter> => {
      return new PaginatedOperationResolver(getContractNFTsOperation, this.baseUrl, this.core).fetch(request);
    },
   getMultipleNFTs: (request: GetMultipleNFTsRequest): Promise<GetMultipleNFTsResponseAdapter> => {
      return new OperationResolver(getMultipleNFTsOperation, this.baseUrl, this.core).fetch(request);
    },
   getNFTContractMetadata: (request: GetNFTContractMetadataRequest): Promise<GetNFTContractMetadataResponseAdapter | null> => {
      return new NullableOperationResolver(getNFTContractMetadataOperation, this.baseUrl, this.core).fetch(request);
    },
   getNFTContractTransfers: (request: GetNFTContractTransfersRequest): Promise<GetNFTContractTransfersResponseAdapter> => {
      return new PaginatedOperationResolver(getNFTContractTransfersOperation, this.baseUrl, this.core).fetch(request);
    },
   getNFTLowestPrice: (request: GetNFTLowestPriceRequest): Promise<GetNFTLowestPriceResponseAdapter | null> => {
      return new NullableOperationResolver(getNFTLowestPriceOperation, this.baseUrl, this.core).fetch(request);
    },
   getNFTMetadata: (request: GetNFTMetadataRequest): Promise<GetNFTMetadataResponseAdapter | null> => {
      return new NullableOperationResolver(getNFTMetadataOperation, this.baseUrl, this.core).fetch(request);
    },
   getNFTOwners: (request: GetNFTOwnersRequest): Promise<GetNFTOwnersResponseAdapter> => {
      return new PaginatedOperationResolver(getNFTOwnersOperation, this.baseUrl, this.core).fetch(request);
    },
   getNFTTokenIdOwners: (request: GetNFTTokenIdOwnersRequest): Promise<GetNFTTokenIdOwnersResponseAdapter> => {
      return new PaginatedOperationResolver(getNFTTokenIdOwnersOperation, this.baseUrl, this.core).fetch(request);
    },
   getNFTTrades: (request: GetNFTTradesRequest): Promise<GetNFTTradesResponseAdapter> => {
      return new PaginatedOperationResolver(getNFTTradesOperation, this.baseUrl, this.core).fetch(request);
    },
   getNFTTransfersByBlock: (request: GetNFTTransfersByBlockRequest): Promise<GetNFTTransfersByBlockResponseAdapter> => {
      return new PaginatedOperationResolver(getNFTTransfersByBlockOperation, this.baseUrl, this.core).fetch(request);
    },
   getNFTTransfersFromToBlock: (request: GetNFTTransfersFromToBlockRequest): Promise<GetNFTTransfersFromToBlockResponseAdapter> => {
      return new PaginatedOperationResolver(getNFTTransfersFromToBlockOperation, this.baseUrl, this.core).fetch(request);
    },
   getNFTTransfers: (request: GetNFTTransfersRequest): Promise<GetNFTTransfersResponseAdapter> => {
      return new PaginatedOperationResolver(getNFTTransfersOperation, this.baseUrl, this.core).fetch(request);
    },
   getWalletNFTCollections: (request: GetWalletNFTCollectionsRequest): Promise<GetWalletNFTCollectionsResponseAdapter> => {
      return new PaginatedOperationResolver(getWalletNFTCollectionsOperation, this.baseUrl, this.core).fetch(request);
    },
   getWalletNFTs: (request: GetWalletNFTsRequest): Promise<GetWalletNFTsResponseAdapter> => {
      return new PaginatedOperationResolver(getWalletNFTsOperation, this.baseUrl, this.core).fetch(request);
    },
   getWalletNFTTransfers: (request: GetWalletNFTTransfersRequest): Promise<GetWalletNFTTransfersResponseAdapter> => {
      return new PaginatedOperationResolver(getWalletNFTTransfersOperation, this.baseUrl, this.core).fetch(request);
    },
   reSyncMetadata: (request: ReSyncMetadataRequest): Promise<ReSyncMetadataResponseAdapter> => {
      return new OperationResolver(reSyncMetadataOperation, this.baseUrl, this.core).fetch(request);
    },
   searchNFTs: (request: SearchNFTsRequest): Promise<SearchNFTsResponseAdapter> => {
      return new PaginatedOperationResolver(searchNFTsOperation, this.baseUrl, this.core).fetch(request);
    },
   syncNFTContract: (request: SyncNFTContractRequest): Promise<SyncNFTContractResponseAdapter> => {
      return new OperationResolver(syncNFTContractOperation, this.baseUrl, this.core).fetch(request);
    },

  };

  public readonly token = {
   getErc20Approvals: (request: GetErc20ApprovalsRequest): Promise<GetErc20ApprovalsResponseAdapter> => {
      return new PaginatedOperationResolver(getErc20ApprovalsOperation, this.baseUrl, this.core).fetch(request);
    },
   getErc20Burns: (request: GetErc20BurnsRequest): Promise<GetErc20BurnsResponseAdapter> => {
      return new PaginatedOperationResolver(getErc20BurnsOperation, this.baseUrl, this.core).fetch(request);
    },
   getErc20Transfers: (request: GetErc20TransfersRequest): Promise<GetErc20TransfersResponseAdapter> => {
      return new PaginatedOperationResolver(getErc20TransfersOperation, this.baseUrl, this.core).fetch(request);
    },
   getErc20Mints: (request: GetErc20MintsRequest): Promise<GetErc20MintsResponseAdapter> => {
      return new PaginatedOperationResolver(getErc20MintsOperation, this.baseUrl, this.core).fetch(request);
    },
   getTokenAllowance: (request: GetTokenAllowanceRequest): Promise<GetTokenAllowanceResponseAdapter> => {
      return new OperationResolver(getTokenAllowanceOperation, this.baseUrl, this.core).fetch(request);
    },
   getTokenMetadataBySymbol: (request: GetTokenMetadataBySymbolRequest): Promise<GetTokenMetadataBySymbolResponseAdapter> => {
      return new OperationResolver(getTokenMetadataBySymbolOperation, this.baseUrl, this.core).fetch(request);
    },
   getTokenMetadata: (request: GetTokenMetadataRequest): Promise<GetTokenMetadataResponseAdapter> => {
      return new OperationResolver(getTokenMetadataOperation, this.baseUrl, this.core).fetch(request);
    },
   getTokenPrice: (request: GetTokenPriceRequest): Promise<GetTokenPriceResponseAdapter> => {
      return new OperationResolver(getTokenPriceOperation, this.baseUrl, this.core).fetch(request);
    },
   getTokenTransfers: (request: GetTokenTransfersRequest): Promise<GetTokenTransfersResponseAdapter> => {
      return new PaginatedOperationResolver(getTokenTransfersOperation, this.baseUrl, this.core).fetch(request);
    },
   getWalletTokenBalances: (request: GetWalletTokenBalancesRequest): Promise<GetWalletTokenBalancesResponseAdapter> => {
      return new OperationResolver(getWalletTokenBalancesOperation, this.baseUrl, this.core).fetch(request);
    },
   getWalletTokenTransfers: (request: GetWalletTokenTransfersRequest): Promise<GetWalletTokenTransfersResponseAdapter> => {
      return new PaginatedOperationResolver(getWalletTokenTransfersOperation, this.baseUrl, this.core).fetch(request);
    },

  };

  public readonly transaction = {
   getInternalTransactions: (request: GetInternalTransactionsRequest): Promise<GetInternalTransactionsResponseAdapter> => {
      return new OperationResolver(getInternalTransactionsOperation, this.baseUrl, this.core).fetch(request);
    },
   getTransaction: (request: GetTransactionRequest): Promise<GetTransactionResponseAdapter | null> => {
      return new NullableOperationResolver(getTransactionOperation, this.baseUrl, this.core).fetch(request);
    },
   getTransactionVerbose: (request: GetTransactionVerboseRequest): Promise<GetTransactionVerboseResponseAdapter | null> => {
      return new NullableOperationResolver(getTransactionVerboseOperation, this.baseUrl, this.core).fetch(request);
    },
   getWalletTransactions: (request: GetWalletTransactionsRequest): Promise<GetWalletTransactionsResponseAdapter> => {
      return new PaginatedOperationResolver(getWalletTransactionsOperation, this.baseUrl, this.core).fetch(request);
    },
   getWalletTransactionsVerbose: (request: GetWalletTransactionsVerboseRequest): Promise<GetWalletTransactionsVerboseResponseAdapter> => {
      return new PaginatedOperationResolver(getWalletTransactionsVerboseOperation, this.baseUrl, this.core).fetch(request);
    },

  };

  public readonly balance = {
   getNativeBalance: (request: GetNativeBalanceRequest): Promise<GetNativeBalanceResponseAdapter> => {
      return new OperationResolver(getNativeBalanceOperation, this.baseUrl, this.core).fetch(request);
    },
   getNativeBalancesForAddresses: (request: GetNativeBalancesForAddressesRequest): Promise<GetNativeBalancesForAddressesResponseAdapter> => {
      return new OperationResolver(getNativeBalancesForAddressesOperation, this.baseUrl, this.core).fetch(request);
    },

  };

  public readonly defi = {
   getPairAddress: (request: GetPairAddressRequest): Promise<GetPairAddressResponseAdapter> => {
      return new OperationResolver(getPairAddressOperation, this.baseUrl, this.core).fetch(request);
    },
   getPairReserves: (request: GetPairReservesRequest): Promise<GetPairReservesResponseAdapter> => {
      return new OperationResolver(getPairReservesOperation, this.baseUrl, this.core).fetch(request);
    },

  };

  public readonly resolve = {
   resolveAddress: (request: ResolveAddressRequest): Promise<ResolveAddressResponseAdapter | null> => {
      return new NullableOperationResolver(resolveAddressOperation, this.baseUrl, this.core).fetch(request);
    },
   resolveDomain: (request: ResolveDomainRequest): Promise<ResolveDomainResponseAdapter | null> => {
      return new NullableOperationResolver(resolveDomainOperation, this.baseUrl, this.core).fetch(request);
    },
   resolveENSDomain: (request: ResolveENSDomainRequest): Promise<ResolveENSDomainResponseAdapter | null> => {
      return new NullableOperationResolver(resolveENSDomainOperation, this.baseUrl, this.core).fetch(request);
    },

  };

  public readonly ipfs = {
   uploadFolder: (request: UploadFolderRequest): Promise<UploadFolderResponseAdapter> => {
      return new OperationResolver(uploadFolderOperation, this.baseUrl, this.core).fetch(request);
    },

  };

}
