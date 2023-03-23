/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** string과 똑같습니다(S3상 파일 URI 표기용 스칼라). */
  FileUri: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Admin = {
  __typename?: 'Admin';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  loginId: Scalars['String'];
  password: Scalars['String'];
  state: AdminState;
};

export enum AdminState {
  Active = 'ACTIVE',
  Deleted = 'DELETED'
}

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumOrderCancelReasonNullableFilter = {
  equals?: InputMaybe<OrderCancelReason>;
  in?: InputMaybe<Array<OrderCancelReason>>;
  not?: InputMaybe<NestedEnumOrderCancelReasonNullableFilter>;
  notIn?: InputMaybe<Array<OrderCancelReason>>;
};

export type EnumOrderOptionTypeFilter = {
  equals?: InputMaybe<OrderOptionType>;
  in?: InputMaybe<Array<OrderOptionType>>;
  not?: InputMaybe<NestedEnumOrderOptionTypeFilter>;
  notIn?: InputMaybe<Array<OrderOptionType>>;
};

export type EnumOrderStateFilter = {
  equals?: InputMaybe<OrderState>;
  in?: InputMaybe<Array<OrderState>>;
  not?: InputMaybe<NestedEnumOrderStateFilter>;
  notIn?: InputMaybe<Array<OrderState>>;
};

export type EnumProductOptionTypeFilter = {
  equals?: InputMaybe<ProductOptionType>;
  in?: InputMaybe<Array<ProductOptionType>>;
  not?: InputMaybe<NestedEnumProductOptionTypeFilter>;
  notIn?: InputMaybe<Array<ProductOptionType>>;
};

export type EnumProductStateFilter = {
  equals?: InputMaybe<ProductState>;
  in?: InputMaybe<Array<ProductState>>;
  not?: InputMaybe<NestedEnumProductStateFilter>;
  notIn?: InputMaybe<Array<ProductState>>;
};

export type EnumReviewStateFilter = {
  equals?: InputMaybe<ReviewState>;
  in?: InputMaybe<Array<ReviewState>>;
  not?: InputMaybe<NestedEnumReviewStateFilter>;
  notIn?: InputMaybe<Array<ReviewState>>;
};

export type EnumSiteInformationTypeFilter = {
  equals?: InputMaybe<SiteInformationType>;
  in?: InputMaybe<Array<SiteInformationType>>;
  not?: InputMaybe<NestedEnumSiteInformationTypeFilter>;
  notIn?: InputMaybe<Array<SiteInformationType>>;
};

export type EnumStoreManagerStateFilter = {
  equals?: InputMaybe<StoreManagerState>;
  in?: InputMaybe<Array<StoreManagerState>>;
  not?: InputMaybe<NestedEnumStoreManagerStateFilter>;
  notIn?: InputMaybe<Array<StoreManagerState>>;
};

export type EnumStoreStateFilter = {
  equals?: InputMaybe<StoreState>;
  in?: InputMaybe<Array<StoreState>>;
  not?: InputMaybe<NestedEnumStoreStateFilter>;
  notIn?: InputMaybe<Array<StoreState>>;
};

export type EnumStoreStoreManagerMapTypeFilter = {
  equals?: InputMaybe<StoreStoreManagerMapType>;
  in?: InputMaybe<Array<StoreStoreManagerMapType>>;
  not?: InputMaybe<NestedEnumStoreStoreManagerMapTypeFilter>;
  notIn?: InputMaybe<Array<StoreStoreManagerMapType>>;
};

/** newFile 있는 경우 newFile 우선 */
export type FileUpdateInput = {
  existingFile?: InputMaybe<Scalars['FileUri']>;
  newFile?: InputMaybe<Scalars['Upload']>;
};

export type Holiday = {
  __typename?: 'Holiday';
  day: Scalars['DateTime'];
  id: Scalars['Int'];
  storeId: Scalars['Int'];
};

export type HolidayListRelationFilter = {
  every?: InputMaybe<HolidayWhereInput>;
  none?: InputMaybe<HolidayWhereInput>;
  some?: InputMaybe<HolidayWhereInput>;
};

export type HolidayOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type HolidayWhereInput = {
  AND?: InputMaybe<Array<HolidayWhereInput>>;
  NOT?: InputMaybe<Array<HolidayWhereInput>>;
  OR?: InputMaybe<Array<HolidayWhereInput>>;
  day?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  store?: InputMaybe<StoreWhereInput>;
  storeId?: InputMaybe<IntFilter>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  cancelOrderByStoreManager?: Maybe<Scalars['String']>;
  confirmPaymentByStoreManager?: Maybe<Scalars['String']>;
  confirmPickupDoneByStoreManager?: Maybe<Scalars['String']>;
  createProductByStoreManager?: Maybe<Scalars['Boolean']>;
  /** 추가하기 클릭 시 */
  createProductOptionByStoreManager?: Maybe<Scalars['Boolean']>;
  createReviewByEveryone?: Maybe<Scalars['Boolean']>;
  /** 삭제 클릭 시 */
  deleteOptionByStoreManager?: Maybe<Scalars['Boolean']>;
  deleteProductsByStoreManager?: Maybe<Scalars['Boolean']>;
  deleteStoreByStoreManager?: Maybe<Scalars['Boolean']>;
  /** 작업 중 */
  deleteStoreManagerByAdmin?: Maybe<Scalars['Boolean']>;
  /** 직원 삭제 뮤테이션 */
  deleteStoreManagersByStoreManager?: Maybe<Scalars['String']>;
  exportSalesToExcelByStoreManager?: Maybe<Scalars['Boolean']>;
  orderProductByCustomer?: Maybe<Order>;
  registEmployeeByStoreManager?: Maybe<Scalars['Boolean']>;
  registStoreByEveryone?: Maybe<Scalars['Boolean']>;
  renewToken?: Maybe<SignInType>;
  requestPaymentByStoreManager?: Maybe<Scalars['Boolean']>;
  requestPhoneVerificationByEveryone: Scalars['Boolean'];
  signInAdminByEveryone: SignInType;
  signInStoreManagerByEveryone: SignInType;
  /** 기존에 있는 휴일은 모두 지우고 args로 들어온 휴일을 새로 생성합니다. */
  updateHolidayByStoreManager?: Maybe<Scalars['Boolean']>;
  /** 옵션 제외 상품 정보 수정 */
  updateProductByStoreManager?: Maybe<Scalars['Boolean']>;
  /** 수정완료 클릭시 */
  updateProductOptionByStoreManager?: Maybe<Scalars['Boolean']>;
  /** 노출: ACTIVE | 숨김: INACTIVE | 솔드 아웃: SOLD_OUT | 시즌 아웃: SEASON_OUT */
  updateProductStateByStoreManager: Scalars['Int'];
  updateReviewStateByStoreManager?: Maybe<Scalars['Boolean']>;
  updateSiteInformationByAdmin: Scalars['Boolean'];
  updateStoreByStoreManager?: Maybe<Scalars['Boolean']>;
  updateStoreManagerStateByStoreManager?: Maybe<Scalars['Boolean']>;
  verifyPhoneByEveryone: Scalars['Int'];
  /** 진행중 */
  withdrawOwnerByStoreManager?: Maybe<Scalars['Boolean']>;
};


export type MutationCancelOrderByStoreManagerArgs = {
  orderIds: Array<Scalars['Int']>;
};


export type MutationConfirmPaymentByStoreManagerArgs = {
  orderIds: Array<Scalars['Int']>;
};


export type MutationConfirmPickupDoneByStoreManagerArgs = {
  orderIds: Array<Scalars['Int']>;
};


export type MutationCreateProductByStoreManagerArgs = {
  description?: InputMaybe<Scalars['String']>;
  images: Array<Scalars['Upload']>;
  name: Scalars['String'];
  price: Scalars['Int'];
  productOption?: InputMaybe<Array<ProductOptionCreateInput>>;
};


export type MutationCreateProductOptionByStoreManagerArgs = {
  content: Scalars['String'];
  productId: Scalars['Int'];
  title: Scalars['String'];
  type: ProductOptionType;
};


export type MutationCreateReviewByEveryoneArgs = {
  content: Scalars['String'];
  customerName: Scalars['String'];
  images: Array<Scalars['Upload']>;
  orderId: Scalars['Int'];
  score: Scalars['Int'];
};


export type MutationDeleteOptionByStoreManagerArgs = {
  optionId: Scalars['Int'];
};


export type MutationDeleteProductsByStoreManagerArgs = {
  productIds: Array<Scalars['Int']>;
};


export type MutationDeleteStoreByStoreManagerArgs = {
  storeId: Scalars['Int'];
};


export type MutationDeleteStoreManagerByAdminArgs = {
  storeManagerId: Scalars['Int'];
};


export type MutationDeleteStoreManagersByStoreManagerArgs = {
  storeId: Scalars['Int'];
  storeManagerIds: Array<Scalars['Int']>;
};


export type MutationExportSalesToExcelByStoreManagerArgs = {
  endAt: Scalars['DateTime'];
  period: SalesPeriod;
  startAt: Scalars['DateTime'];
};


export type MutationOrderProductByCustomerArgs = {
  customerName: Scalars['String'];
  orderOptions?: InputMaybe<Array<OrderOptionCreateInput>>;
  phone: Scalars['String'];
  phoneVerificationId: Scalars['Int'];
  pickup: Scalars['DateTime'];
  productId: Scalars['Int'];
};


export type MutationRegistEmployeeByStoreManagerArgs = {
  name: Scalars['String'];
  phone: Scalars['String'];
  phoneVerificationId: Scalars['Int'];
};


export type MutationRegistStoreByEveryoneArgs = {
  address: Scalars['String'];
  addressDetail?: InputMaybe<Scalars['String']>;
  bankAccountHolder: Scalars['String'];
  bankAccountNumber: Scalars['String'];
  bankName: Scalars['String'];
  closeAt: Scalars['DateTime'];
  description?: InputMaybe<Scalars['String']>;
  link: Scalars['String'];
  openAt: Scalars['DateTime'];
  phone: Scalars['String'];
  phoneVerificationId: Scalars['Int'];
  profileImage: Scalars['Upload'];
  storeManagerName: Scalars['String'];
  storeName: Scalars['String'];
  tel: Scalars['String'];
};


export type MutationRenewTokenArgs = {
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};


export type MutationRequestPaymentByStoreManagerArgs = {
  modifiedPrice?: InputMaybe<Scalars['Int']>;
  orderId: Scalars['Int'];
};


export type MutationRequestPhoneVerificationByEveryoneArgs = {
  phoneNumber: Scalars['String'];
};


export type MutationSignInAdminByEveryoneArgs = {
  id: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignInStoreManagerByEveryoneArgs = {
  phone: Scalars['String'];
  phoneVerificationId: Scalars['Int'];
};


export type MutationUpdateHolidayByStoreManagerArgs = {
  holidays?: InputMaybe<Array<Scalars['DateTime']>>;
};


export type MutationUpdateProductByStoreManagerArgs = {
  description?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<FileUpdateInput>>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  productId: Scalars['Int'];
};


export type MutationUpdateProductOptionByStoreManagerArgs = {
  content?: InputMaybe<Scalars['String']>;
  optionValues?: InputMaybe<Array<ProductOptionValueCreateInput>>;
  productOptionId: Scalars['Int'];
  title?: InputMaybe<Scalars['String']>;
  type: ProductOptionType;
};


export type MutationUpdateProductStateByStoreManagerArgs = {
  productIds: Array<Scalars['Int']>;
  type: ProductState;
};


export type MutationUpdateReviewStateByStoreManagerArgs = {
  reviewIds: Array<Scalars['Int']>;
  state: ReviewState;
};


export type MutationUpdateSiteInformationByAdminArgs = {
  content?: InputMaybe<Scalars['String']>;
  files?: InputMaybe<Array<FileUpdateInput>>;
  siteInformationId: Scalars['String'];
  titleContentData?: InputMaybe<Array<SiteInformationTitleContentDataInput>>;
};


export type MutationUpdateStoreByStoreManagerArgs = {
  address?: InputMaybe<Scalars['String']>;
  addressDetail?: InputMaybe<Scalars['String']>;
  bankAccountHolder?: InputMaybe<Scalars['String']>;
  bankAccountNumber?: InputMaybe<Scalars['String']>;
  bankName?: InputMaybe<Scalars['String']>;
  closeAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  openAt?: InputMaybe<Scalars['DateTime']>;
  profileImage?: InputMaybe<Scalars['Upload']>;
  storeId: Scalars['Int'];
  tel?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateStoreManagerStateByStoreManagerArgs = {
  state: StoreManagerState;
  storeManagerIds: Array<Scalars['Int']>;
};


export type MutationVerifyPhoneByEveryoneArgs = {
  phoneNumber: Scalars['String'];
  verificationNumber: Scalars['String'];
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumOrderCancelReasonNullableFilter = {
  equals?: InputMaybe<OrderCancelReason>;
  in?: InputMaybe<Array<OrderCancelReason>>;
  not?: InputMaybe<NestedEnumOrderCancelReasonNullableFilter>;
  notIn?: InputMaybe<Array<OrderCancelReason>>;
};

export type NestedEnumOrderOptionTypeFilter = {
  equals?: InputMaybe<OrderOptionType>;
  in?: InputMaybe<Array<OrderOptionType>>;
  not?: InputMaybe<NestedEnumOrderOptionTypeFilter>;
  notIn?: InputMaybe<Array<OrderOptionType>>;
};

export type NestedEnumOrderStateFilter = {
  equals?: InputMaybe<OrderState>;
  in?: InputMaybe<Array<OrderState>>;
  not?: InputMaybe<NestedEnumOrderStateFilter>;
  notIn?: InputMaybe<Array<OrderState>>;
};

export type NestedEnumProductOptionTypeFilter = {
  equals?: InputMaybe<ProductOptionType>;
  in?: InputMaybe<Array<ProductOptionType>>;
  not?: InputMaybe<NestedEnumProductOptionTypeFilter>;
  notIn?: InputMaybe<Array<ProductOptionType>>;
};

export type NestedEnumProductStateFilter = {
  equals?: InputMaybe<ProductState>;
  in?: InputMaybe<Array<ProductState>>;
  not?: InputMaybe<NestedEnumProductStateFilter>;
  notIn?: InputMaybe<Array<ProductState>>;
};

export type NestedEnumReviewStateFilter = {
  equals?: InputMaybe<ReviewState>;
  in?: InputMaybe<Array<ReviewState>>;
  not?: InputMaybe<NestedEnumReviewStateFilter>;
  notIn?: InputMaybe<Array<ReviewState>>;
};

export type NestedEnumSiteInformationTypeFilter = {
  equals?: InputMaybe<SiteInformationType>;
  in?: InputMaybe<Array<SiteInformationType>>;
  not?: InputMaybe<NestedEnumSiteInformationTypeFilter>;
  notIn?: InputMaybe<Array<SiteInformationType>>;
};

export type NestedEnumStoreManagerStateFilter = {
  equals?: InputMaybe<StoreManagerState>;
  in?: InputMaybe<Array<StoreManagerState>>;
  not?: InputMaybe<NestedEnumStoreManagerStateFilter>;
  notIn?: InputMaybe<Array<StoreManagerState>>;
};

export type NestedEnumStoreStateFilter = {
  equals?: InputMaybe<StoreState>;
  in?: InputMaybe<Array<StoreState>>;
  not?: InputMaybe<NestedEnumStoreStateFilter>;
  notIn?: InputMaybe<Array<StoreState>>;
};

export type NestedEnumStoreStoreManagerMapTypeFilter = {
  equals?: InputMaybe<StoreStoreManagerMapType>;
  in?: InputMaybe<Array<StoreStoreManagerMapType>>;
  not?: InputMaybe<NestedEnumStoreStoreManagerMapTypeFilter>;
  notIn?: InputMaybe<Array<StoreStoreManagerMapType>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Notice = {
  __typename?: 'Notice';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  modifiedAt: Scalars['DateTime'];
  state: NoticeState;
  title: Scalars['String'];
};

export enum NoticeState {
  Faq = 'FAQ',
  Notice = 'NOTICE'
}

export type Order = {
  __typename?: 'Order';
  customerName: Scalars['String'];
  /** 최종 금액(점주가 요청한 금액) */
  finalPrice?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  orderOption: Array<OrderOption>;
  orderedAt: Scalars['DateTime'];
  phone: Scalars['String'];
  pickup: Scalars['DateTime'];
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['Int']>;
  review: Array<Review>;
  state: OrderState;
  storeId: Scalars['Int'];
  /** 총 예상 금액 */
  totalPrice: Scalars['Int'];
};


export type OrderOrderOptionArgs = {
  cursor?: InputMaybe<OrderOptionWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type OrderReviewArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export enum OrderCancelReason {
  CancelByCustomer = 'CANCEL_BY_CUSTOMER',
  CancelByStore = 'CANCEL_BY_STORE',
  PaymentNotConfirmed = 'PAYMENT_NOT_CONFIRMED'
}

export type OrderListRelationFilter = {
  every?: InputMaybe<OrderWhereInput>;
  none?: InputMaybe<OrderWhereInput>;
  some?: InputMaybe<OrderWhereInput>;
};

export type OrderOption = {
  __typename?: 'OrderOption';
  content?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  images?: Maybe<Array<Scalars['FileUri']>>;
  imagesData?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  orderId: Scalars['Int'];
  price?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  type: OrderOptionType;
};

export type OrderOptionCreateInput = {
  optionValue: Array<OrderOptionValueCreateInput>;
  /** productOption의 title */
  title: Scalars['String'];
  type: OrderOptionType;
};

export type OrderOptionListRelationFilter = {
  every?: InputMaybe<OrderOptionWhereInput>;
  none?: InputMaybe<OrderOptionWhereInput>;
  some?: InputMaybe<OrderOptionWhereInput>;
};

export type OrderOptionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export enum OrderOptionType {
  Count = 'COUNT',
  Image = 'IMAGE',
  Radio = 'RADIO',
  Select = 'SELECT',
  Text = 'TEXT'
}

export type OrderOptionValueCreateInput = {
  /** productOptionValue의 name */
  content?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<Scalars['Upload']>>;
  number?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
};

export type OrderOptionWhereInput = {
  AND?: InputMaybe<Array<OrderOptionWhereInput>>;
  NOT?: InputMaybe<Array<OrderOptionWhereInput>>;
  OR?: InputMaybe<Array<OrderOptionWhereInput>>;
  content?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  imagesData?: InputMaybe<StringNullableFilter>;
  number?: InputMaybe<IntNullableFilter>;
  order?: InputMaybe<OrderWhereInput>;
  orderId?: InputMaybe<IntFilter>;
  price?: InputMaybe<IntNullableFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumOrderOptionTypeFilter>;
};

export type OrderOptionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type OrderOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type OrderOrderByWithRelationInput = {
  cancelReason?: InputMaybe<SortOrder>;
  customerName?: InputMaybe<SortOrder>;
  finalPrice?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  modifiedAt?: InputMaybe<SortOrder>;
  orderOption?: InputMaybe<OrderOptionOrderByRelationAggregateInput>;
  orderedAt?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  pickup?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  review?: InputMaybe<ReviewOrderByRelationAggregateInput>;
  state?: InputMaybe<SortOrder>;
  store?: InputMaybe<StoreOrderByWithRelationInput>;
  storeId?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export enum OrderState {
  Canceled = 'CANCELED',
  Ordered = 'ORDERED',
  PaymentDone = 'PAYMENT_DONE',
  PickupDone = 'PICKUP_DONE',
  RequestPayment = 'REQUEST_PAYMENT'
}

export type OrderWhereInput = {
  AND?: InputMaybe<Array<OrderWhereInput>>;
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  OR?: InputMaybe<Array<OrderWhereInput>>;
  cancelReason?: InputMaybe<EnumOrderCancelReasonNullableFilter>;
  customerName?: InputMaybe<StringFilter>;
  finalPrice?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  modifiedAt?: InputMaybe<DateTimeNullableFilter>;
  orderOption?: InputMaybe<OrderOptionListRelationFilter>;
  orderedAt?: InputMaybe<DateTimeFilter>;
  phone?: InputMaybe<StringFilter>;
  pickup?: InputMaybe<DateTimeFilter>;
  product?: InputMaybe<ProductWhereInput>;
  productId?: InputMaybe<IntNullableFilter>;
  review?: InputMaybe<ReviewListRelationFilter>;
  state?: InputMaybe<EnumOrderStateFilter>;
  store?: InputMaybe<StoreWhereInput>;
  storeId?: InputMaybe<IntFilter>;
  totalPrice?: InputMaybe<IntFilter>;
};

export type OrderWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Product = {
  __typename?: 'Product';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  images: Array<Scalars['FileUri']>;
  imagesData: Scalars['String'];
  modifiedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  order: Array<Order>;
  price: Scalars['Int'];
  productOption: Array<ProductOption>;
  state: ProductState;
  store: Store;
  storeId: Scalars['Int'];
};


export type ProductOrderArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type ProductProductOptionArgs = {
  cursor?: InputMaybe<ProductOptionWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type ProductListRelationFilter = {
  every?: InputMaybe<ProductWhereInput>;
  none?: InputMaybe<ProductWhereInput>;
  some?: InputMaybe<ProductWhereInput>;
};

export type ProductOption = {
  __typename?: 'ProductOption';
  content: Scalars['String'];
  id: Scalars['Int'];
  productId: Scalars['Int'];
  productOptionValue: Array<ProductOptionValue>;
  title: Scalars['String'];
  type: ProductOptionType;
};


export type ProductOptionProductOptionValueArgs = {
  cursor?: InputMaybe<ProductOptionValueWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type ProductOptionCreateInput = {
  content: Scalars['String'];
  optionValues?: InputMaybe<Array<ProductOptionValueCreateInput>>;
  title: Scalars['String'];
  type: ProductOptionType;
};

export type ProductOptionListRelationFilter = {
  every?: InputMaybe<ProductOptionWhereInput>;
  none?: InputMaybe<ProductOptionWhereInput>;
  some?: InputMaybe<ProductOptionWhereInput>;
};

export type ProductOptionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export enum ProductOptionType {
  Count = 'COUNT',
  Image = 'IMAGE',
  Radio = 'RADIO',
  Select = 'SELECT',
  Text = 'TEXT'
}

export type ProductOptionValue = {
  __typename?: 'ProductOptionValue';
  id: Scalars['Int'];
  image?: Maybe<Scalars['FileUri']>;
  imageData?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  optionId: Scalars['Int'];
  price: Scalars['Int'];
};

export type ProductOptionValueCreateInput = {
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['Upload']>;
  name: Scalars['String'];
  price?: Scalars['Int'];
};

export type ProductOptionValueListRelationFilter = {
  every?: InputMaybe<ProductOptionValueWhereInput>;
  none?: InputMaybe<ProductOptionValueWhereInput>;
  some?: InputMaybe<ProductOptionValueWhereInput>;
};

export type ProductOptionValueWhereInput = {
  AND?: InputMaybe<Array<ProductOptionValueWhereInput>>;
  NOT?: InputMaybe<Array<ProductOptionValueWhereInput>>;
  OR?: InputMaybe<Array<ProductOptionValueWhereInput>>;
  ProductOption?: InputMaybe<ProductOptionWhereInput>;
  id?: InputMaybe<IntFilter>;
  imageData?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  optionId?: InputMaybe<IntFilter>;
  price?: InputMaybe<IntFilter>;
};

export type ProductOptionValueWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type ProductOptionWhereInput = {
  AND?: InputMaybe<Array<ProductOptionWhereInput>>;
  NOT?: InputMaybe<Array<ProductOptionWhereInput>>;
  OR?: InputMaybe<Array<ProductOptionWhereInput>>;
  content?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  product?: InputMaybe<ProductWhereInput>;
  productId?: InputMaybe<IntFilter>;
  productOptionValue?: InputMaybe<ProductOptionValueListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumProductOptionTypeFilter>;
};

export type ProductOptionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type ProductOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imagesData?: InputMaybe<SortOrder>;
  modifiedAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<OrderOrderByRelationAggregateInput>;
  price?: InputMaybe<SortOrder>;
  productOption?: InputMaybe<ProductOptionOrderByRelationAggregateInput>;
  state?: InputMaybe<SortOrder>;
  store?: InputMaybe<StoreOrderByWithRelationInput>;
  storeId?: InputMaybe<SortOrder>;
};

export enum ProductState {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Inactive = 'INACTIVE',
  SeasonOut = 'SEASON_OUT',
  SoldOut = 'SOLD_OUT'
}

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  imagesData?: InputMaybe<StringFilter>;
  modifiedAt?: InputMaybe<DateTimeNullableFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrderListRelationFilter>;
  price?: InputMaybe<IntFilter>;
  productOption?: InputMaybe<ProductOptionListRelationFilter>;
  state?: InputMaybe<EnumProductStateFilter>;
  store?: InputMaybe<StoreWhereInput>;
  storeId?: InputMaybe<IntFilter>;
};

export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  selectDailyOrdersCountByStoreManager: Array<Scalars['Int']>;
  selectHolidaysByEveryone?: Maybe<Array<Holiday>>;
  selectHolidaysByStoreManager?: Maybe<Array<Holiday>>;
  selectMyStoreIdByStoreManager: Scalars['Int'];
  selectOrderByEveryone: Order;
  selectOrdersByStoreManager: Array<Order>;
  selectOrdersCountByStoreManager: Scalars['Int'];
  selectProductByEveryone?: Maybe<Product>;
  selectProductsByEveryone: Array<Product>;
  selectProductsCountByStoreManager: Scalars['Int'];
  selectReviewByEveryone?: Maybe<Review>;
  selectReviewsByEveryone: Array<Review>;
  selectReviewsCountBySomeone: Scalars['Int'];
  selectSiteInformationByEveryone: SiteInformation;
  selectSiteInformationsByEveryone: Array<SiteInformation>;
  selectStoreByEveryone?: Maybe<Store>;
  selectStoreManagerByStoreManager?: Maybe<StoreManager>;
  selectStoreManagersByStoreManager: Array<StoreManager>;
  selectStoreManagersCountByStoreManager: Scalars['Int'];
  selectStoresByAdmin: Array<Store>;
  selectStoresCountByAdmin: Scalars['Int'];
  whoami?: Maybe<Scalars['String']>;
};


export type QuerySelectDailyOrdersCountByStoreManagerArgs = {
  month: Scalars['Int'];
  year: Scalars['Int'];
};


export type QuerySelectHolidaysByEveryoneArgs = {
  storeId: Scalars['Int'];
};


export type QuerySelectOrderByEveryoneArgs = {
  id: Scalars['Int'];
};


export type QuerySelectOrdersByStoreManagerArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderWhereInput>;
};


export type QuerySelectOrdersCountByStoreManagerArgs = {
  where?: InputMaybe<OrderWhereInput>;
};


export type QuerySelectProductByEveryoneArgs = {
  id: Scalars['Int'];
};


export type QuerySelectProductsByEveryoneArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QuerySelectProductsCountByStoreManagerArgs = {
  where?: InputMaybe<ProductWhereInput>;
};


export type QuerySelectReviewByEveryoneArgs = {
  id: Scalars['Int'];
};


export type QuerySelectReviewsByEveryoneArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QuerySelectReviewsCountBySomeoneArgs = {
  where?: InputMaybe<ReviewWhereInput>;
};


export type QuerySelectSiteInformationByEveryoneArgs = {
  id: Scalars['String'];
};


export type QuerySelectSiteInformationsByEveryoneArgs = {
  cursor?: InputMaybe<SiteInformationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SiteInformationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SiteInformationWhereInput>;
};


export type QuerySelectStoreByEveryoneArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QuerySelectStoreManagerByStoreManagerArgs = {
  storeManagerId: Scalars['Int'];
};


export type QuerySelectStoreManagersByStoreManagerArgs = {
  cursor?: InputMaybe<StoreManagerWhereUniqueInput>;
  orderBy?: InputMaybe<Array<StoreManagerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StoreManagerWhereInput>;
};


export type QuerySelectStoreManagersCountByStoreManagerArgs = {
  where?: InputMaybe<StoreManagerWhereInput>;
};


export type QuerySelectStoresByAdminArgs = {
  cursor?: InputMaybe<StoreWhereUniqueInput>;
  orderBy?: InputMaybe<Array<StoreOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StoreWhereInput>;
};


export type QuerySelectStoresCountByAdminArgs = {
  where?: InputMaybe<StoreWhereInput>;
};

export type Review = {
  __typename?: 'Review';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customerName: Scalars['String'];
  id: Scalars['Int'];
  images: Array<Scalars['FileUri']>;
  imagesData?: Maybe<Scalars['String']>;
  orderId: Scalars['Int'];
  score: Scalars['Int'];
  state: ReviewState;
};

export type ReviewListRelationFilter = {
  every?: InputMaybe<ReviewWhereInput>;
  none?: InputMaybe<ReviewWhereInput>;
  some?: InputMaybe<ReviewWhereInput>;
};

export type ReviewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type ReviewOrderByWithRelationInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  customerName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imagesData?: InputMaybe<SortOrder>;
  order?: InputMaybe<OrderOrderByWithRelationInput>;
  orderId?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
};

export enum ReviewState {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type ReviewWhereInput = {
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customerName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  imagesData?: InputMaybe<StringNullableFilter>;
  order?: InputMaybe<OrderWhereInput>;
  orderId?: InputMaybe<IntFilter>;
  score?: InputMaybe<IntFilter>;
  state?: InputMaybe<EnumReviewStateFilter>;
};

export type ReviewWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export enum SalesPeriod {
  Daily = 'DAILY',
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY'
}

export type SignInType = {
  __typename?: 'SignInType';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type SiteInformation = {
  __typename?: 'SiteInformation';
  content: Scalars['String'];
  /** 해당 필드의 설명 */
  description: Scalars['String'];
  file?: Maybe<Scalars['FileUri']>;
  files?: Maybe<Array<Maybe<Scalars['FileUri']>>>;
  /**
   * 시작값(id의 startsWith() 적용으로 판별 가능한) 기준
   *  - `TC_` : 제목-내용 형태의 자료 (titleContentInfo 필드 참조)
   *  - `HTML_` : HTML 형태의 파일 (file 필드 참조)
   *  - `FILE_` : 기타 파일 1개 (file 필드 참조)
   *  - `FILES_` : 기타 파일 0~n개 (files 필드 참조)
   *  - `URL_` : 외부 URL (링크 설정 안 된 경우 null)(url 필드 참조)
   *  - `TEXT_` : 단순 텍스트 (content 필드 참조)
   */
  id: Scalars['String'];
  titleContentInfo?: Maybe<Array<SiteInformationTitleContentData>>;
  type: SiteInformationType;
  /** URL_ 의 경우, 링크 설정이 안 되어 있으면 null로 리턴합니다. */
  url?: Maybe<Scalars['String']>;
};

export type SiteInformationOrderByWithRelationInput = {
  content?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type SiteInformationTitleContentData = {
  __typename?: 'SiteInformationTitleContentData';
  content: Scalars['String'];
  title: Scalars['String'];
};

export type SiteInformationTitleContentDataInput = {
  content: Scalars['String'];
  title: Scalars['String'];
};

export enum SiteInformationType {
  All = 'ALL',
  Customer = 'CUSTOMER',
  Store = 'STORE'
}

export type SiteInformationWhereInput = {
  AND?: InputMaybe<Array<SiteInformationWhereInput>>;
  NOT?: InputMaybe<Array<SiteInformationWhereInput>>;
  OR?: InputMaybe<Array<SiteInformationWhereInput>>;
  content?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumSiteInformationTypeFilter>;
};

export type SiteInformationWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type Store = {
  __typename?: 'Store';
  address: Scalars['String'];
  addressDetail?: Maybe<Scalars['String']>;
  bankAccountHolder: Scalars['String'];
  bankAccountNumber: Scalars['String'];
  bankName: Scalars['String'];
  closeAt: Scalars['DateTime'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isHoliday?: Maybe<Scalars['Boolean']>;
  link?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  openAt: Scalars['DateTime'];
  order: Array<Order>;
  product: Array<Product>;
  profileImage?: Maybe<Scalars['FileUri']>;
  profileImageData: Scalars['String'];
  state: StoreState;
  storeStoreManagerMap: Array<StoreStoreManagerMap>;
  tel: Scalars['String'];
};


export type StoreOrderArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type StoreProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type StoreStoreStoreManagerMapArgs = {
  cursor?: InputMaybe<StoreStoreManagerMapWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type StoreManager = {
  __typename?: 'StoreManager';
  id: Scalars['Int'];
  isOwner: Scalars['Boolean'];
  joinedAt: Scalars['DateTime'];
  name: Scalars['String'];
  phone: Scalars['String'];
  state: StoreManagerState;
  storeStoreManagerMap: Array<StoreStoreManagerMap>;
};


export type StoreManagerIsOwnerArgs = {
  storeId: Scalars['Int'];
};


export type StoreManagerStoreStoreManagerMapArgs = {
  cursor?: InputMaybe<StoreStoreManagerMapWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type StoreManagerOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  joinedAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  storeStoreManagerMap?: InputMaybe<StoreStoreManagerMapOrderByRelationAggregateInput>;
};

export enum StoreManagerState {
  Active = 'ACTIVE',
  Benned = 'BENNED',
  Deleted = 'DELETED'
}

export type StoreManagerWhereInput = {
  AND?: InputMaybe<Array<StoreManagerWhereInput>>;
  NOT?: InputMaybe<Array<StoreManagerWhereInput>>;
  OR?: InputMaybe<Array<StoreManagerWhereInput>>;
  id?: InputMaybe<IntFilter>;
  joinedAt?: InputMaybe<DateTimeFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  state?: InputMaybe<EnumStoreManagerStateFilter>;
  storeStoreManagerMap?: InputMaybe<StoreStoreManagerMapListRelationFilter>;
};

export type StoreManagerWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type StoreOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>;
  addressDetail?: InputMaybe<SortOrder>;
  bankAccountHolder?: InputMaybe<SortOrder>;
  bankAccountNumber?: InputMaybe<SortOrder>;
  bankName?: InputMaybe<SortOrder>;
  closeAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  holiday?: InputMaybe<HolidayOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  openAt?: InputMaybe<SortOrder>;
  order?: InputMaybe<OrderOrderByRelationAggregateInput>;
  product?: InputMaybe<ProductOrderByRelationAggregateInput>;
  profileImageData?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  storeStoreManagerMap?: InputMaybe<StoreStoreManagerMapOrderByRelationAggregateInput>;
  tel?: InputMaybe<SortOrder>;
};

export enum StoreState {
  Active = 'ACTIVE',
  Banned = 'BANNED',
  BeforeConfirm = 'BEFORE_CONFIRM',
  Deleted = 'DELETED'
}

export type StoreStoreManagerMap = {
  __typename?: 'StoreStoreManagerMap';
  storeId: Scalars['Int'];
  storeManagerId: Scalars['Int'];
  type: StoreStoreManagerMapType;
};

export type StoreStoreManagerMapListRelationFilter = {
  every?: InputMaybe<StoreStoreManagerMapWhereInput>;
  none?: InputMaybe<StoreStoreManagerMapWhereInput>;
  some?: InputMaybe<StoreStoreManagerMapWhereInput>;
};

export type StoreStoreManagerMapOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
};

export type StoreStoreManagerMapStoreIdStoreManagerIdCompoundUniqueInput = {
  storeId: Scalars['Int'];
  storeManagerId: Scalars['Int'];
};

export enum StoreStoreManagerMapType {
  Employee = 'EMPLOYEE',
  Owner = 'OWNER'
}

export type StoreStoreManagerMapWhereInput = {
  AND?: InputMaybe<Array<StoreStoreManagerMapWhereInput>>;
  NOT?: InputMaybe<Array<StoreStoreManagerMapWhereInput>>;
  OR?: InputMaybe<Array<StoreStoreManagerMapWhereInput>>;
  StoreManager?: InputMaybe<StoreManagerWhereInput>;
  store?: InputMaybe<StoreWhereInput>;
  storeId?: InputMaybe<IntFilter>;
  storeManagerId?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumStoreStoreManagerMapTypeFilter>;
};

export type StoreStoreManagerMapWhereUniqueInput = {
  storeId_storeManagerId?: InputMaybe<StoreStoreManagerMapStoreIdStoreManagerIdCompoundUniqueInput>;
};

export type StoreWhereInput = {
  AND?: InputMaybe<Array<StoreWhereInput>>;
  NOT?: InputMaybe<Array<StoreWhereInput>>;
  OR?: InputMaybe<Array<StoreWhereInput>>;
  address?: InputMaybe<StringFilter>;
  addressDetail?: InputMaybe<StringNullableFilter>;
  bankAccountHolder?: InputMaybe<StringFilter>;
  bankAccountNumber?: InputMaybe<StringFilter>;
  bankName?: InputMaybe<StringFilter>;
  closeAt?: InputMaybe<DateTimeFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  holiday?: InputMaybe<HolidayListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  link?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  openAt?: InputMaybe<DateTimeFilter>;
  order?: InputMaybe<OrderListRelationFilter>;
  product?: InputMaybe<ProductListRelationFilter>;
  profileImageData?: InputMaybe<StringFilter>;
  state?: InputMaybe<EnumStoreStateFilter>;
  storeStoreManagerMap?: InputMaybe<StoreStoreManagerMapListRelationFilter>;
  tel?: InputMaybe<StringFilter>;
};

export type StoreWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  subscribeOrderByStoreManager: Order;
};


export type SubscriptionSubscribeOrderByStoreManagerArgs = {
  storeId?: InputMaybe<Scalars['Int']>;
};

export type SelectProductsByEveryoneQueryVariables = Exact<{ [key: string]: never; }>;


export type SelectProductsByEveryoneQuery = { __typename?: 'Query', selectProductsByEveryone: Array<{ __typename?: 'Product', id: number, name: string }> };


export const SelectProductsByEveryoneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SelectProductsByEveryone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"selectProductsByEveryone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<SelectProductsByEveryoneQuery, SelectProductsByEveryoneQueryVariables>;