import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Any: any;
  BigInt: any;
  Date: any;
  DateTime: any;
  JSON: any;
  RichTextOp: any;
  TimeZone: any;
  URL: any;
  _EntityRepresentation: any;
};

/**
 * Advertisers are integrated into the Campaigns subsystem of sbn,
 * and managed directly via that interface. aka Ads::Advertiser in Hermano.
 */
export type Advertiser = {
  __typename?: 'Advertiser';
  campaigns: Array<Campaign>;
  createdAt: Scalars['DateTime'];
  externalForeignKey: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AdvertiserPage = {
  __typename?: 'AdvertiserPage';
  pageNumber: Scalars['Int'];
  results: Array<Advertiser>;
  totalCount: Scalars['Int'];
};

/** An  AnalyticsMetric type */
export type AnalyticsMetric = {
  __typename?: 'AnalyticsMetric';
  /** Available metric names from specified platform (default: facebook, reddit, twitter) */
  analyticsMetricNames: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Hourly bucketed values changes over time for specified metric */
  bucketedDeltaMetric: Maybe<Array<Maybe<BucketedDeltaMetric>>>;
  /** AnalyticsResource identifier */
  identifier: Maybe<Scalars['String']>;
  /** Whitelisted Facebook metrics */
  pointMetricFacebook: Maybe<Array<Maybe<PointMetricFacebook>>>;
  /** Whitelisted Reddit metrics */
  pointMetricReddit: Maybe<Array<Maybe<PointMetricReddit>>>;
  /** Whitelisted Twitter metrics */
  pointMetricTwitter: Maybe<Array<Maybe<PointMetricTwitter>>>;
  /** AnalyticsRef's metric value over time */
  timeseriesMetric: Maybe<Array<Maybe<TimeseriesMetric>>>;
};


/** An  AnalyticsMetric type */
export type AnalyticsMetricAnalyticsMetricNamesArgs = {
  platform: InputMaybe<Scalars['String']>;
};


/** An  AnalyticsMetric type */
export type AnalyticsMetricBucketedDeltaMetricArgs = {
  identifier: InputMaybe<Scalars['String']>;
  metric: InputMaybe<Scalars['String']>;
  node: InputMaybe<Scalars['Int']>;
  platform: InputMaybe<Scalars['String']>;
};


/** An  AnalyticsMetric type */
export type AnalyticsMetricPointMetricFacebookArgs = {
  identifier: InputMaybe<Scalars['String']>;
};


/** An  AnalyticsMetric type */
export type AnalyticsMetricPointMetricRedditArgs = {
  identifier: InputMaybe<Scalars['String']>;
};


/** An  AnalyticsMetric type */
export type AnalyticsMetricPointMetricTwitterArgs = {
  identifier: InputMaybe<Scalars['String']>;
};


/** An  AnalyticsMetric type */
export type AnalyticsMetricTimeseriesMetricArgs = {
  identifier: InputMaybe<Scalars['String']>;
  metric: InputMaybe<Scalars['String']>;
  node: InputMaybe<Scalars['Int']>;
  platform: InputMaybe<Scalars['String']>;
};

/** Analytics ref - Social media or publishing platform */
export type AnalyticsRef = {
  __typename?: 'AnalyticsRef';
  /** AnalyticsRef's account name */
  account: Maybe<Scalars['String']>;
  /** AnalyticsRef's associated AnalyticsResource */
  analyticsResource: Maybe<AnalyticsResource>;
  /** AnalyticsRef's associated AnalyticsResource id */
  analytics_resource_id: Scalars['Int'];
  /** AnalyticsRef's body */
  body: Maybe<Scalars['String']>;
  /** AnalyticsRef's metric value changes bucketed by hour */
  bucketedDeltaMetric: Maybe<Array<Maybe<BucketedDeltaMetric>>>;
  /** AnalyticsRef id */
  id: Scalars['Int'];
  /** AnalyticsRef's post id */
  node: Maybe<Scalars['String']>;
  /** AnalyticsRef's platform */
  platform: Maybe<Scalars['String']>;
  /** AnalyticsRef's metric value over time */
  timeseriesMetric: Maybe<Array<Maybe<TimeseriesMetric>>>;
  /** AnalyticsRef's title */
  title: Maybe<Scalars['String']>;
};


/** Analytics ref - Social media or publishing platform */
export type AnalyticsRefBucketedDeltaMetricArgs = {
  identifier: InputMaybe<Scalars['String']>;
  metric: InputMaybe<Scalars['String']>;
};


/** Analytics ref - Social media or publishing platform */
export type AnalyticsRefTimeseriesMetricArgs = {
  identifier: InputMaybe<Scalars['String']>;
  metric: InputMaybe<Scalars['String']>;
};

/** AnalyticsResource (media resources such as stories, videos, posts. For a chorus entry, the identifier = article_id - 235959) */
export type AnalyticsResource = {
  __typename?: 'AnalyticsResource';
  /** AnalyticsResource's associated AnalyticsRefs */
  analyticsRefs: Maybe<Array<Maybe<AnalyticsRef>>>;
  /** Tags associated with AnalyticsResource (ex. authors, network, community, NLP topic, etc) */
  analyticsTags: Maybe<Array<Maybe<AnalyticsTag>>>;
  /** AnalyticsResource's created at date */
  createdAt: Maybe<Scalars['String']>;
  /** AnalyticsResource's random id */
  id: Scalars['Int'];
  /** AnalyticsResource's unique identifier (ex. Chorus Entry id) */
  identifier: Scalars['String'];
  /** AnalyticsResource's last relevant at date */
  lastRelevantAt: Maybe<Scalars['String']>;
  /** AnalyticsResource's network */
  network: Scalars['String'];
  /** Whitelisted Facebook metrics */
  pointMetricFacebook: Maybe<Array<Maybe<PointMetricFacebook>>>;
  /** Whitelisted Reddit metrics */
  pointMetricReddit: Maybe<Array<Maybe<PointMetricReddit>>>;
  /** Whitelisted Twitter metrics */
  pointMetricTwitter: Maybe<Array<Maybe<PointMetricTwitter>>>;
  /** AnalyticsResource's title */
  title: Scalars['String'];
  /** AnalyticsResource's type */
  type: Scalars['String'];
  /** AnalyticsResource's updated at date */
  updatedAt: Maybe<Scalars['String']>;
};


/** AnalyticsResource (media resources such as stories, videos, posts. For a chorus entry, the identifier = article_id - 235959) */
export type AnalyticsResourceAnalyticsRefsArgs = {
  platform: InputMaybe<Scalars['String']>;
};


/** AnalyticsResource (media resources such as stories, videos, posts. For a chorus entry, the identifier = article_id - 235959) */
export type AnalyticsResourcePointMetricFacebookArgs = {
  identifier: InputMaybe<Scalars['String']>;
};


/** AnalyticsResource (media resources such as stories, videos, posts. For a chorus entry, the identifier = article_id - 235959) */
export type AnalyticsResourcePointMetricRedditArgs = {
  identifier: InputMaybe<Scalars['String']>;
};


/** AnalyticsResource (media resources such as stories, videos, posts. For a chorus entry, the identifier = article_id - 235959) */
export type AnalyticsResourcePointMetricTwitterArgs = {
  identifier: InputMaybe<Scalars['String']>;
};

/** An AnalyticsTag */
export type AnalyticsTag = {
  __typename?: 'AnalyticsTag';
  /** AnalyticsTag's resource identifier */
  identifier: Maybe<Scalars['String']>;
  /** AnalyticsTag's kind */
  kind: Maybe<Scalars['String']>;
  /** AnalyticsTag's subtitle */
  subtitle: Maybe<Scalars['String']>;
  /** AnalyticsTag's title */
  title: Maybe<Scalars['String']>;
};

export type AnthemStory = {
  __typename?: 'AnthemStory';
  previewHtml: Maybe<Scalars['String']>;
};


export type AnthemStoryPreviewHtmlArgs = {
  platform: InputMaybe<StoryPlatform>;
};

/**
 * A file uploaded by editorial staff or pulled from a wire service (e.g., Getty, Merlin).
 * Possible asset types include images, videos, audio, and other miscellaneous documents.
 */
export type Asset = {
  __typename?: 'Asset';
  /** An editorial description of this asset. */
  caption: Maybe<RichText>;
  /** The community this asset was uploaded to. */
  community: Maybe<Community>;
  /**
   * The community the asset belongs to.
   * @deprecated use community.id
   */
  communityId: Maybe<Scalars['Int']>;
  /** The MIME type of this asset, appropriate for use in (e.g.) the HTTP Content-Type response header. */
  contentType: Maybe<Scalars['String']>;
  /** When this asset was created. */
  createdAt: Maybe<Scalars['DateTime']>;
  /** The credit of this asset. */
  credit: Maybe<RichText>;
  /** Indicates if the asset has been deleted and replaced with a placeholder. */
  deleted: Maybe<Scalars['Boolean']>;
  /** A list of external associations for this asset formatted as `"{service}:{identifier}"`, e.g.: `associatedpress:12345`. */
  externalIds: Array<Scalars['ID']>;
  /** The filename of this asset. */
  fileName: Maybe<Scalars['String']>;
  /** The height of this asset in pixels (type `IMAGE` assets only). */
  height: Maybe<Scalars['Int']>;
  /** An internal identifier for this asset. */
  id: Scalars['Int'];
  /** [IPTC image metadata](https://iptc.org/) saved with the asset file. */
  iptc: Array<Maybe<AssetIptcMetadata>>;
  /** The network this asset was uploaded to. */
  network: Maybe<Network>;
  /**
   * The network this asset belongs to.
   * @deprecated use network.id
   */
  networkId: Maybe<Scalars['Int']>;
  /** A URL for a thumbnail version of this asset. */
  previewUrl: Maybe<Scalars['URL']>;
  /** A string of keywords to be included in the asset search index. */
  searchText: Maybe<Scalars['String']>;
  /** The size of this asset file, in bytes. */
  size: Maybe<Scalars['Int']>;
  /** The source of this asset. */
  source: AssetSource;
  /** The caption of this asset, imported from its original source. */
  sourceCaption: Maybe<Scalars['String']>;
  /** The id of the asset on its source service. */
  sourceId: Maybe<Scalars['ID']>;
  /** A URL for a low-res thumbnail version of this asset. */
  thumbnailUrl: Maybe<Scalars['URL']>;
  /** A plain text title for this asset, intended to be used as HTML alt text. */
  title: Maybe<Scalars['String']>;
  /** The [`AssetType`](/docs/reference/enum/AssetType) of this asset. */
  type: AssetType;
  /** A unique identifier for this asset. */
  uid: Scalars['ID'];
  /** When this asset was last updated. */
  updatedAt: Maybe<Scalars['DateTime']>;
  /** A URL for the original version of this asset. */
  url: Maybe<Scalars['URL']>;
  /** The usage rights of this asset (type `IMAGE` assets only). */
  usageRights: Maybe<Scalars['String']>;
  /** The user who uploaded this asset. */
  user: Maybe<User>;
  /**
   * The user who uploaded or imported this asset.
   * @deprecated use user.id
   */
  userId: Maybe<Scalars['Int']>;
  /** The width of this asset in pixels (type `IMAGE` assets only). */
  width: Maybe<Scalars['Int']>;
};

/** Input used to create a new [`Asset`](/docs/reference/object/Asset). */
export type AssetCreateInput = {
  /** An editorial description of the new asset (internal use only). */
  caption: InputMaybe<RichTextValueInput>;
  /** Which [`Community`](/docs/reference/object/Community) this [`Asset`](/docs/reference/object/Asset) will belong to. */
  community: CommunityUniqueKeyInput;
  /** A credit for the new asset. */
  credit: InputMaybe<RichTextValueInput>;
  /** A list of external identifiers for this asset, each formatted as "{namespace}:{id}". */
  externalIds: InputMaybe<Array<Scalars['ID']>>;
  /** A file source from which to fetch the new asset file. */
  file: AssetFileInput;
  /** A string of keywords to be included in for the new asset's search index. */
  searchText: InputMaybe<Scalars['String']>;
  /** A caption for this asset describing the source file. */
  sourceCaption: InputMaybe<Scalars['String']>;
  /** A title for the new asset. For image assets, this is intended for use as the alt text. */
  title: InputMaybe<Scalars['String']>;
  /** A summary of usage rights for this asset. */
  usageRights: InputMaybe<Scalars['String']>;
};

/** Returned when the `createAsset` mutation completes successfully. */
export type AssetCreateResult = {
  __typename?: 'AssetCreateResult';
  /** The Asset that was created. */
  asset: Asset;
};

/**
 * A file source from which to create a new [`Asset`](/docs/reference/object/Asset).
 * This source will be copied to Chorus' CDN and referenced from there.
 * Exactly one field must be specified.
 */
export type AssetFileInput = {
  /** A reference to a Getty image. */
  gettyId: InputMaybe<Scalars['ID']>;
  /** A reference to a Merlin image. */
  merlinId: InputMaybe<Scalars['ID']>;
  /** A reference to a public URL. */
  url: InputMaybe<Scalars['URL']>;
  /** A reference to a USA Today image. */
  usaTodayId: InputMaybe<Scalars['ID']>;
};

export type AssetIptcMetadata = {
  __typename?: 'AssetIPTCMetadata';
  attributeName: Scalars['String'];
  attributeValues: Array<Maybe<Scalars['String']>>;
};

/** A single page of an asset search result set. */
export type AssetPage = {
  __typename?: 'AssetPage';
  /** The page number of this search result set. */
  pageNumber: Scalars['Int'];
  /** The limit on results per page. */
  perPage: Scalars['Int'];
  /** A list of asset search results. */
  results: Array<Maybe<Asset>>;
  /** The total count of assets in this search query. May be used to calculate whether another page exists or not. */
  totalCount: Scalars['Int'];
};

/** Describes the desired conditions, pagination, and sort order for an asset search. */
export type AssetSearchQuery = {
  /** The category. */
  category: InputMaybe<Scalars['String']>;
  /** The community ID of requested assets */
  communityId: InputMaybe<Scalars['Int']>;
  /** Filter by `deleted` status. */
  deleted: InputMaybe<Scalars['Boolean']>;
  /** The network ID of requested assets. */
  networkId: InputMaybe<Scalars['Int']>;
  /** The page number of the asset. */
  pageNumber: InputMaybe<Scalars['Int']>;
  /** The count of assets per page. */
  perPage: InputMaybe<Scalars['Int']>;
  /** Keywords to search for. */
  query: InputMaybe<Scalars['String']>;
  /** Sorting options for results. */
  sort: InputMaybe<AssetSortType>;
  /** Deprecated, use `sources` */
  source: InputMaybe<AssetSource>;
  /** The source(s) of the assets. */
  sources: InputMaybe<Array<AssetSource>>;
  /** User that assets are associated to. */
  userId: InputMaybe<Scalars['Int']>;
};

/** Options for controlling the order of search results when querying Assets. */
export enum AssetSortType {
  /** Ranks results in order from most- to least-recently created, according to the `createdAt` field. */
  Latest = 'LATEST',
  /** Ranks results that most closely match the search keywords highest. Results with identical search scores are secondarily ranked by recency. */
  Score = 'SCORE'
}

/** Indicates where an asset was imported or created from. May also be used to specify which search index to use when querying assets. */
export enum AssetSource {
  /** Assets that were imported from the Getty API. */
  Getty = 'GETTY',
  /** Assets that were uploaded directly by a community member. */
  MemberUpload = 'MEMBER_UPLOAD',
  /** Assets that were imported from the Merlin API. */
  Merlin = 'MERLIN',
  /** Assets that were uploaded directly by an editor. */
  Upload = 'UPLOAD',
  /** Assets that were imported via URL by a user. */
  Url = 'URL',
  /** Assets that were imported from the USA Today API. */
  UsaToday = 'USA_TODAY'
}

/** A categorization of asset content types. */
export enum AssetType {
  /** Categorizes audio file types such as MP3. */
  Audio = 'AUDIO',
  /** Categorizes miscellaneous file types such as PDF, SVG, or CSS. */
  File = 'FILE',
  /** Categorizes image file types such as JPG, PNG, or GIF. */
  Image = 'IMAGE',
  /** Categorizes video file types such as MP4. */
  Video = 'VIDEO'
}

/**
 * Identify an existing [`Asset`](/docs/reference/object/Asset.html) by a unique key.
 * Exactly one field must be specified.
 */
export type AssetUniqueKeyInput = {
  /** An identifier provided by an external system. */
  externalId: InputMaybe<Scalars['ID']>;
  /** An internal numeric identifier. */
  id: InputMaybe<Scalars['Int']>;
  /** A unique identifier set by Chorus. */
  uid: InputMaybe<Scalars['ID']>;
};

/**
 * Input used to update an existing [`Entry`](/docs/reference/object/Entry).
 * The requested changes will be immediately published.
 */
export type AssetUpdateInput = {
  /** An editorial description of the asset (internal use only). */
  caption: InputMaybe<RichTextValueInput>;
  /** An updated credit for this asset. */
  credit: InputMaybe<RichTextValueInput>;
  /**
   * A list of external identifiers for this asset, each formatted as "{namespace}:{id}".
   * This list replaces any existing external IDs.
   */
  externalIds: InputMaybe<ExternalIdCollectionInput>;
  /** An updated string of keywords to be included in this asset's search index. */
  searchText: InputMaybe<Scalars['String']>;
  /** A caption for this asset describing the source file. */
  sourceCaption: InputMaybe<Scalars['String']>;
  /** An updated title for this asset. For image assets, this is intended for use as the alt text. */
  title: InputMaybe<Scalars['String']>;
  /** Updated usage rights for this asset. */
  usageRights: InputMaybe<Scalars['String']>;
};

/** Returned when the `updateAsset` mutation completes successfully. */
export type AssetUpdateResult = {
  __typename?: 'AssetUpdateResult';
  /** The Asset that was updated. */
  asset: Asset;
};

/** Input used to either create or update an [`Asset`](/docs/reference/object/Asset) matching an external identifier. */
export type AssetUpsertByExternalIdInput = {
  /** Input used to create a new [`Asset`](/docs/reference/object/Asset). */
  create: AssetCreateInput;
  /**
   * An identifier provided by an external system used to either look up an
   * existing [`Asset`](/docs/reference/object/Asset), or else create a new Asset
   * if one was not found.
   * In the latter case, this external ID will be automatically associated with the
   * newly created Asset.
   */
  externalId: Scalars['ID'];
  /** Input used to update an existing [`Asset`](/docs/reference/object/Asset). */
  update: InputMaybe<AssetUpdateInput>;
};

/** Returned when the `upsertAssetByExternalId` mutation completes successfully. */
export type AssetUpsertByExternalIdResult = {
  __typename?: 'AssetUpsertByExternalIdResult';
  /** The Asset that was either created or updated. */
  asset: Asset;
  /** Whether the Asset was created (true) or updated (false). */
  isNew: Scalars['Boolean'];
};

/** Public profile information for an author on a specific [`Community`](/docs/reference/object/Community.html). */
export type AuthorProfile = UserProfile & {
  __typename?: 'AuthorProfile';
  /** A brief description of the author. May be used to indicate facts such as title, pedigree, area of focus, etc. */
  bio: Maybe<Scalars['String']>;
  /** The community this author profile is defined on. */
  community: Community;
  /**
   * A list of external associations for this author profile
   * formatted as `"{service}:{identifier}"`, e.g.: `"associatedpress:12345"`.
   */
  externalIds: Array<Scalars['ID']>;
  /** An internal identifier of this author profile. */
  id: Scalars['Int'];
  /** The URL of an image suitable for use on a public profile page for this author. */
  imageUrl: Maybe<Scalars['URL']>;
  /** The user's full name. */
  name: Scalars['String'];
  /** A URL path segment for routing to this author profile. Must be unique in the context of a given community. */
  slug: Scalars['String'];
  /** A list of social links for this author profile. */
  socialLinks: Array<SocialLink>;
  /** The author's official title, usually displayed adjacent to their name. e.g. Senior Correspondent */
  title: Maybe<Scalars['String']>;
  /** A unique identifier for this author profile. */
  uid: Scalars['ID'];
  /** The URL where this author profile may be viewed. */
  url: Scalars['URL'];
  /** The relative path where this author profile may be viewed. */
  urlPath: Scalars['String'];
  /** The user behind this author profile. */
  user: User;
};

export type AuthorProfileCreatedEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: AuthorProfileEventSubjectInput;
};

export type AuthorProfileDestroyedEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: AuthorProfileEventSubjectInput;
};

export type AuthorProfileEventSubjectInput = {
  communityUid: Scalars['ID'];
  networkUid: Scalars['ID'];
  organizationUid: Scalars['ID'];
  uid: Scalars['ID'];
  userUid: Scalars['ID'];
};

export type AuthorProfileUpdatedEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: AuthorProfileEventSubjectInput;
};

/** All exposed structured data autotag types */
export enum AutoTagType {
  /** Corresponds to the `SportEvent` type */
  Event = 'EVENT',
  /** Corresponds to the `Building` type */
  GeoBuilding = 'GEO_BUILDING',
  /** Corresponds to the `Neighborhood` type */
  GeoNeighborhood = 'GEO_NEIGHBORHOOD',
  /** Corresponds to the `Venue` type */
  GeoVenue = 'GEO_VENUE',
  /** Corresponds to the `LiveCoverageEvent` type */
  LiveCoverageEvent = 'LIVE_COVERAGE_EVENT',
  /** Corresponds to the `MmaEvent` type */
  MmaEvent = 'MMA_EVENT',
  /** Corresponds to the `MmaFight` type */
  MmaFight = 'MMA_FIGHT',
  /** Corresponds to the `MmaFighter` type */
  MmaFighter = 'MMA_FIGHTER',
  /** Corresponds to the `MmaPromotion` type */
  MmaPromotion = 'MMA_PROMOTION',
  /** Corresponds to the `MmaWeightClass` type */
  MmaWeightClass = 'MMA_WEIGHT_CLASS',
  /** Corresponds to the `SportPlayer` type */
  Player = 'PLAYER',
  /** Corresponds to the `VideoGameFranchise` type */
  PolygonFranchise = 'POLYGON_FRANCHISE',
  /** Corresponds to the `VideoGame` type */
  PolygonGame = 'POLYGON_GAME',
  /** Corresponds to the `VideoGamePlatform` type */
  PolygonPlatform = 'POLYGON_PLATFORM',
  /** Corresponds to the `Product` type */
  Product = 'PRODUCT',
  /** Corresponds to the `ProductBrand` type */
  ProductBrand = 'PRODUCT_BRAND',
  /** Corresponds to the `ProductCategory` type */
  ProductCategory = 'PRODUCT_CATEGORY',
  /** Corresponds to the `ShoppingDeal` type */
  RackedDeal = 'RACKED_DEAL',
  StaticLink = 'STATIC_LINK',
  /** Corresponds to the `SportTeam` type */
  Team = 'TEAM'
}

/** Autotagging metadata for the provided community scope */
export type AutoTaggingScope = {
  __typename?: 'AutoTaggingScope';
  /** Matches of these tag types can be linked and applied as autolinks */
  autolinkTagTypes: Array<AutoTagType>;
  league: Maybe<SportLeague>;
  /** Default league for scope */
  leagueId: Maybe<Scalars['Int']>;
  /** Does the scope require a league filter to retrieve tags */
  leagueRequired: Scalars['Boolean'];
  /**
   * Tag types that can be applied as tags to an entry, whether via an automatic
   * suggestion or manual lookup
   */
  manualTagTypes: Array<AutoTagType>;
  /** All tag types associated with the scope */
  structuredTagTypes: Array<AutoTagType>;
  team: Maybe<SportTeam>;
  /** Default team for scope */
  teamId: Maybe<Scalars['Int']>;
};

/** A basic image resource derived from a source URL. */
export type BasicImage = {
  __typename?: 'BasicImage';
  url: Maybe<Scalars['String']>;
  /**
   * Generates a scaled and/or [art directed](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#Art_direction)
   * variant URL for this image with its editorial crop applied. This method may be repeatedly [aliased](https://graphql.org/learn/queries/#aliases)
   * with different parameters to request many URLs of varying sizes, aspect ratios, and encodings.
   */
  variantUrl: Maybe<Scalars['URL']>;
};


/** A basic image resource derived from a source URL. */
export type BasicImageVariantUrlArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  format?: InputMaybe<EntryImageVariantFormat>;
  width: Scalars['Int'];
};

/** A Metric's change in value by hour */
export type BucketedDeltaMetric = {
  __typename?: 'BucketedDeltaMetric';
  /** Hourly timestamp */
  timestamp: Maybe<Scalars['String']>;
  /** Metric change during specified hour */
  value: Maybe<Scalars['Int']>;
};

export type Build = {
  __typename?: 'Build';
  lastModified: Maybe<Scalars['DateTime']>;
  log: Maybe<Scalars['String']>;
  status: Scalars['String'];
  statusMessage: Maybe<Scalars['String']>;
  success: Maybe<Scalars['Boolean']>;
  uuid: Scalars['String'];
};

export type BuildInput = {
  async: InputMaybe<Scalars['Boolean']>;
  projectUuid: Scalars['String'];
};

export type BuildPage = {
  __typename?: 'BuildPage';
  /** The time when the url will no longer be accessible */
  expiresAt: Scalars['DateTime'];
  /** The build page's key <build_uuid>/<slug> */
  key: Scalars['String'];
  /** The page's slug */
  slug: Scalars['String'];
  /** A presigned url where the page content can be downloaded from. Access will automatically expire. */
  url: Scalars['URL'];
};

/**
 * Buildings are primarily used by the Curbed network,
 * for tagging stories and map points. aka Geo::Building in Hermano.
 */
export type Building = PlaceDetail & {
  __typename?: 'Building';
  address: Maybe<Scalars['String']>;
  architect: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  crossstreet: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  developer: Maybe<Scalars['String']>;
  draft: Scalars['Boolean'];
  externalForeignKey: Scalars['String'];
  floors: Maybe<Scalars['Int']>;
  foursquareId: Maybe<Scalars['String']>;
  foursquareTipId: Maybe<Scalars['String']>;
  googlePlaceId: Maybe<Scalars['String']>;
  hideFromAutotagger: Scalars['Boolean'];
  id: Scalars['Int'];
  imageUrls: Array<Scalars['String']>;
  lat: Maybe<Scalars['Float']>;
  lng: Maybe<Scalars['Float']>;
  locale: Locale;
  localeId: Scalars['Int'];
  management: Maybe<Scalars['String']>;
  name: Scalars['String'];
  network: Scalars['String'];
  place: Place;
  placeId: Scalars['Int'];
  slug: Scalars['String'];
  state: Maybe<Scalars['String']>;
  stubhubUpcomingEventCount: Maybe<Scalars['Int']>;
  stubhubVenueId: Maybe<Scalars['Int']>;
  units: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
  url: Maybe<Scalars['String']>;
  zip: Maybe<Scalars['String']>;
};

export type BuildingPage = {
  __typename?: 'BuildingPage';
  pageNumber: Scalars['Int'];
  results: Array<Building>;
  totalCount: Scalars['Int'];
};

export type BulkCreateVideoAssetsInput = {
  accountId: InputMaybe<Scalars['Int']>;
  description: InputMaybe<Scalars['String']>;
  enableAds: InputMaybe<Scalars['Boolean']>;
  enableRelatedVideos: InputMaybe<Scalars['Boolean']>;
  feedExpirationDate: InputMaybe<Scalars['DateTime']>;
  feedIds: InputMaybe<Array<Scalars['Int']>>;
  feedPublishDate: InputMaybe<Scalars['DateTime']>;
  imageFileId: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  type: VideoAssetInputType;
  videoFileId: Scalars['Int'];
};

export type BulkRemoveVideoAssetsInput = {
  videoAssetIds: InputMaybe<Array<Scalars['Int']>>;
};

/**
 * Campaigns are integrated into the Campaigns subsystem of sbn,
 * and managed directly via that interface. aka Ads::Campaign in Hermano.
 */
export type Campaign = {
  __typename?: 'Campaign';
  advertiser: Maybe<Advertiser>;
  advertiserId: Maybe<Scalars['Int']>;
  chorusId: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  externalForeignKey: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CampaignPage = {
  __typename?: 'CampaignPage';
  pageNumber: Scalars['Int'];
  results: Array<Campaign>;
  totalCount: Scalars['Int'];
};

export type CellData = {
  __typename?: 'CellData';
  bucket: Scalars['String'];
  id: Scalars['Int'];
  prestoComponentData: Maybe<Scalars['JSON']>;
  slug: Scalars['String'];
};

/** An editorial brand that corresponds to a single web domain (among other representations). Belongs to a [`Network`](/docs/reference/object/Network). */
export type Community = {
  __typename?: 'Community';
  /** Get monetized links for the affiliates associated with this community. */
  affiliateUrls: Array<Maybe<Scalars['String']>>;
  /** A list of every entry in this community. */
  allEntries: Maybe<EntryConnection>;
  /** Paginate all [`EntryGroup`s](/docs/reference/object/EntryGroup) belonging to this Community. */
  allEntryGroups: EntryGroupPage;
  /**
   * Paginate all [`HubPage`s](/docs/reference/object/HubPage) belonging to this Community.
   * A Network's primary community will include results associated with network-level entry groups.
   */
  allHubPages: HubPagePage;
  /** Autotag config data for the community scope */
  autoTagging: Maybe<AutoTaggingScope>;
  commentArchiveAgeInDays: Maybe<Scalars['Int']>;
  /** JSON of image search params */
  defaultImageSearchParams: Maybe<Scalars['JSON']>;
  /** The fallback LinkSet to use for entries in this community that do not have one. */
  defaultLinkSet: Maybe<LinkSet>;
  /** The URL domain of this community. */
  domain: Scalars['String'];
  /** Find an [`EntryGroup`](/docs/reference/object/EntryGroup) belonging to this Community by its slug. */
  entryGroup: Maybe<EntryGroup>;
  /** Find several [`EntryGroup`s](/docs/reference/object/EntryGroup) belonging to this Community by their slugs. */
  entryGroups: Array<Maybe<EntryGroup>>;
  /** The favicon image URL of this community. */
  faviconUrl: Maybe<Scalars['String']>;
  /** The front page of this community. Every community has a special "front-page" hub page and corresponding entry group. */
  frontPage: Maybe<HubPage>;
  /** Logo info for Google AMP */
  googleAmpLogo: Maybe<GoogleAmpLogo>;
  /** Return whether or not a value is set for the given key. */
  hasSiteConfig: Maybe<Scalars['Boolean']>;
  /** Find a [`HubPage`](/docs/reference/object/HubPage) belonging to this Community by its slug. */
  hubPage: Maybe<HubPage>;
  /** Find several [`HubPage`s](/docs/reference/object/HubPage) belonging to this Community by their slugs. */
  hubPages: Array<Maybe<HubPage>>;
  /** An internal identifier of this community. */
  id: Scalars['Int'];
  /**
   * Indicates this as the primary Community associated with its Network's domain.
   * For example, `sbnation.com` is the primary community of the SBNation network.
   */
  isPrimary: Scalars['Boolean'];
  /** Find a link set belonging to this community that matches the provided `name`. */
  linkSet: Maybe<LinkSet>;
  /** Paginate link sets belonging to this community. */
  linkSets: Maybe<LinkSetPage>;
  locale: Maybe<Locale>;
  /**
   * The id of the Hermano Locale record associated with the community
   *
   * NOTE: We've exposed the Hermano locale id here with future work in mind. We
   * would like to only expose the id and let Tower stitch in Hermano data.
   */
  localeId: Maybe<Scalars['Int']>;
  /** The name of this community. */
  name: Scalars['String'];
  /** The network that this community belongs to. */
  network: Network;
  /** Newsletters available for the community */
  newsletters: Maybe<Array<Newsletter>>;
  /** The LinkSet to use for all all entries in this community, which takes precedence over [`Entry.linkSet`](/docs/reference/object/Entry#linkset-linkset) if present. */
  overrideLinkSet: Maybe<LinkSet>;
  /**
   * If true, a new entry on this community will automatically be pinned to the
   * first available slot of any hub page it is a member of. If false, the default
   * is for the entry to be unpinned.
   */
  placeFirstAvailableDefault: Scalars['Boolean'];
  placeholderImageUrl: Scalars['String'];
  primaryTeam: Maybe<SportTeam>;
  /** The id of the primary Hermano Team record associated with the community */
  primaryTeamId: Maybe<Scalars['Int']>;
  /** Environment-specific domain, include port by default when local */
  schemaDomain: Scalars['String'];
  /** For direct site_config boolean queries, often used as aliases */
  siteConfigBoolean: Maybe<Scalars['Boolean']>;
  /** For direct site_config int queries, often used as aliases */
  siteConfigInt: Maybe<Scalars['Int']>;
  /** For direct site_config json queries, often used as aliases */
  siteConfigJson: Maybe<Scalars['JSON']>;
  /** For direct site_config string queries, often used as aliases */
  siteConfigString: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  /**
   * All the ids of the potentially several Hermano Team records associated with the community
   * e.g. An NCAA team community might be associated with both a football and basketball team
   */
  teamIds: Maybe<Array<Scalars['Int']>>;
  teams: Maybe<Array<Maybe<SportTeam>>>;
  /**
   * The canonical identifier of this community's time zone in IANA format.
   *
   * e.g. 'America/New_York'.
   */
  timeZone: Scalars['TimeZone'];
  /**
   * Provides a collection of highest-traffic Entries based on analytics data
   * gathered from Chorus-hosted public page views. For headless customers
   * without a Chorus-hosted public frontend, this will return a list of recent entries.
   * A maximum of 50 results may be requested.
   */
  trendingEntries: Array<Maybe<Entry>>;
  twitterScreenName: Maybe<Scalars['String']>;
  /** Does this community send an autotweet for each published entry by default */
  twitterSendDefault: Scalars['Boolean'];
  /** A unique identifier for this community. */
  uid: Scalars['ID'];
  /** The HTTP URL of this community. */
  url: Scalars['String'];
  /** A version number that is incremented any time this community is modified. Useful for including in cache keys. */
  version: Scalars['Int'];
};


/** An editorial brand that corresponds to a single web domain (among other representations). Belongs to a [`Network`](/docs/reference/object/Network). */
export type CommunityAffiliateUrlsArgs = {
  links: Array<Scalars['String']>;
  rewrite: InputMaybe<Scalars['Boolean']>;
};


/** An editorial brand that corresponds to a single web domain (among other representations). Belongs to a [`Network`](/docs/reference/object/Network). */
export type CommunityAllEntriesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<EntryOrderInput>;
};


/** An editorial brand that corresponds to a single web domain (among other representations). Belongs to a [`Network`](/docs/reference/object/Network). */
export type CommunityAllEntryGroupsArgs = {
  pageNumber?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


/** An editorial brand that corresponds to a single web domain (among other representations). Belongs to a [`Network`](/docs/reference/object/Network). */
export type CommunityAllHubPagesArgs = {
  pageNumber?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


/** An editorial brand that corresponds to a single web domain (among other representations). Belongs to a [`Network`](/docs/reference/object/Network). */
export type CommunityEntryGroupArgs = {
  slug: Scalars['String'];
};


/** An editorial brand that corresponds to a single web domain (among other representations). Belongs to a [`Network`](/docs/reference/object/Network). */
export type CommunityEntryGroupsArgs = {
  slugs: Array<Scalars['String']>;
};


/** An editorial brand that corresponds to a single web domain (among other representations). Belongs to a [`Network`](/docs/reference/object/Network). */
export type CommunityHasSiteConfigArgs = {
  key: Scalars['String'];
  type: Scalars['String'];
};


/** An editorial brand that corresponds to a single web domain (among other representations). Belongs to a [`Network`](/docs/reference/object/Network). */
export type CommunityHubPageArgs = {
  slug: Scalars['String'];
};


/** An editorial brand that corresponds to a single web domain (among other representations). Belongs to a [`Network`](/docs/reference/object/Network). */
export type CommunityHubPagesArgs = {
  slugs: Array<Scalars['String']>;
};


/** An editorial brand that corresponds to a single web domain (among other representations). Belongs to a [`Network`](/docs/reference/object/Network). */
export type CommunityLinkSetArgs = {
  name: Scalars['String'];
};


/** An editorial brand that corresponds to a single web domain (among other representations). Belongs to a [`Network`](/docs/reference/object/Network). */
export type CommunityLinkSetsArgs = {
  pageNumber?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


/** An editorial brand that corresponds to a single web domain (among other representations). Belongs to a [`Network`](/docs/reference/object/Network). */
export type CommunitySchemaDomainArgs = {
  withPort?: InputMaybe<Scalars['Boolean']>;
};


/** An editorial brand that corresponds to a single web domain (among other representations). Belongs to a [`Network`](/docs/reference/object/Network). */
export type CommunitySiteConfigBooleanArgs = {
  fallback?: InputMaybe<Scalars['Boolean']>;
  key: Scalars['String'];
};


/** An editorial brand that corresponds to a single web domain (among other representations). Belongs to a [`Network`](/docs/reference/object/Network). */
export type CommunitySiteConfigIntArgs = {
  fallback?: InputMaybe<Scalars['Boolean']>;
  key: Scalars['String'];
};


/** An editorial brand that corresponds to a single web domain (among other representations). Belongs to a [`Network`](/docs/reference/object/Network). */
export type CommunitySiteConfigJsonArgs = {
  fallback?: InputMaybe<Scalars['Boolean']>;
  key: Scalars['String'];
};


/** An editorial brand that corresponds to a single web domain (among other representations). Belongs to a [`Network`](/docs/reference/object/Network). */
export type CommunitySiteConfigStringArgs = {
  fallback?: InputMaybe<Scalars['Boolean']>;
  key: Scalars['String'];
};


/** An editorial brand that corresponds to a single web domain (among other representations). Belongs to a [`Network`](/docs/reference/object/Network). */
export type CommunityTrendingEntriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};

/** A User's membership with a Community */
export type CommunityMembership = {
  __typename?: 'CommunityMembership';
  community: Community;
  communityId: Scalars['Int'];
  joinedOn: Scalars['DateTime'];
  /**
   * Paginate all editorial content, including both authored or co-authored
   * content, by this user in reverse-chronological order.
   */
  recentAuthorAndContributorEntries: EntryPage;
  /** Paginate all editorial content by this user in reverse-chronological order. */
  recentEntries: EntryPage;
  roles: Array<RoleName>;
  shortBio: Maybe<Scalars['String']>;
  status: Status;
  user: User;
  userId: Scalars['Int'];
};


/** A User's membership with a Community */
export type CommunityMembershipRecentAuthorAndContributorEntriesArgs = {
  pageNumber?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


/** A User's membership with a Community */
export type CommunityMembershipRecentEntriesArgs = {
  pageNumber?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};

export type CommunityNavigationUpdatedEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: CommunityNavigationUpdatedEventSubjectInput;
};

export type CommunityNavigationUpdatedEventSubjectInput = {
  communityUid: Scalars['ID'];
  networkUid: Scalars['ID'];
  organizationUid: Scalars['ID'];
  uid: Scalars['ID'];
};

/**
 * One portion of results from a paginated Community query. i.e. The return type of the `Query.searchCommunities` field.
 *
 * At most `perPage` results are included, according to the corresponding search query input (see [`CommunitySearchQuery.perPage`](/docs/reference/input_object/CommunitySearchQuery.html)).
 *
 * The first result has the offset `perPage * (pageNumber - 1)` in the full result set.
 */
export type CommunityPage = {
  __typename?: 'CommunityPage';
  /** The current page number. */
  pageNumber: Scalars['Int'];
  /** The limit on results per page. */
  perPage: Scalars['Int'];
  /** A list of results of this community page. */
  results: Array<Maybe<Community>>;
  /** The total number of communities in the result set. */
  totalCount: Scalars['Int'];
};

/** Used to specify filter criteria on a specified field in the context of a [`Community`](/docs/reference/object/Community.html) search query. */
export type CommunitySearchCondition = {
  /** Field must be equal to one of the given values. */
  anyOf: InputMaybe<Array<Scalars['Any']>>;
  /** Field must be equal to the given value. */
  equal: InputMaybe<Scalars['Any']>;
  /**
   * Name of the field this condition applies to.
   * Accepts `domain`, `id`, `name`, and `networkId`.
   */
  field: Scalars['String'];
  /** When true, field must be equal to null. When false, field must have a non-null value. */
  isNull: InputMaybe<Scalars['Boolean']>;
};

/** Describes the desired conditions, pagination, and sort order for a community search. */
export type CommunitySearchQuery = {
  /**
   * Specify a dimension and direction to order results in, e.g. "id desc".
   * Any filterable field may be specified, in addition to the reserved values of "score" (relevancy weighted by date) and "date" ("modified_date desc").
   */
  orderBy: InputMaybe<Scalars['String']>;
  /** The target page number of this entry search. */
  pageNumber: InputMaybe<Scalars['Int']>;
  /** The desired records per page of results, maximum of 100. */
  perPage: InputMaybe<Scalars['Int']>;
  publicOnly: InputMaybe<Scalars['Boolean']>;
  /** If provided, results must match ALL of the given conditions. */
  whereAll: InputMaybe<Array<CommunitySearchCondition>>;
  /** If provided, results must NOT match ANY of the given conditions. */
  whereNone: InputMaybe<Array<CommunitySearchCondition>>;
};

/**
 * Identify an existing [`Community`](/docs/reference/object/Community.html) by a unique key.
 * Exactly one field must be specified.
 */
export type CommunityUniqueKeyInput = {
  /** The hostname used in URLs for this community. */
  domain: InputMaybe<Scalars['String']>;
  /** An internal numeric identifier. */
  id: InputMaybe<Scalars['Int']>;
  /** A human readable string identifier. */
  slug: InputMaybe<Scalars['String']>;
  /** A unique identifier set by Chorus. */
  uid: InputMaybe<Scalars['ID']>;
};

/** Coordinates, any two integers to mark an x and y. */
export type Coordinate = {
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type CopyInput = {
  destinationUuid: Scalars['String'];
  sourceUuid: Scalars['String'];
};

export type CreateVideoAssetInput = {
  accountId: InputMaybe<Scalars['Int']>;
  description: InputMaybe<Scalars['String']>;
  enableAds: InputMaybe<Scalars['Boolean']>;
  enableRelatedVideos: InputMaybe<Scalars['Boolean']>;
  feedExpirationDate: InputMaybe<Scalars['DateTime']>;
  feedId: InputMaybe<Scalars['Int']>;
  feedPublishDate: InputMaybe<Scalars['DateTime']>;
  imageFileId: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  type: VideoAssetInputType;
  videoFileId: Scalars['Int'];
};

export type CreateVideoProjectFileInput = {
  contentType: Scalars['String'];
  deleted: InputMaybe<Scalars['Boolean']>;
  fileUrl: InputMaybe<Scalars['String']>;
  size: InputMaybe<Scalars['BigInt']>;
  videoProjectId: InputMaybe<Scalars['Int']>;
};

export type CreateVideoProjectInput = {
  categoryId: InputMaybe<Scalars['Int']>;
  credits: InputMaybe<Array<InputMaybe<VideoCreditInput>>>;
  description: InputMaybe<Scalars['String']>;
  episodeNumber: InputMaybe<Scalars['Int']>;
  keyname: Scalars['String'];
  migrationUuid: InputMaybe<Scalars['String']>;
  providerId: Scalars['Int'];
  publishedAt: InputMaybe<Scalars['DateTime']>;
  revenueTypeId: InputMaybe<Scalars['Int']>;
  seasonNumber: InputMaybe<Scalars['Int']>;
  sequence: InputMaybe<Scalars['Int']>;
  seriesId: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  videoTags: InputMaybe<Array<InputMaybe<VideoTagInput>>>;
  videoTypeId: Scalars['Int'];
};

export type CreateVideoProjectRightsInput = {
  broadDist: InputMaybe<Scalars['Boolean']>;
  cannotSyndicate: InputMaybe<Scalars['Boolean']>;
  complexTakedown: InputMaybe<Scalars['Boolean']>;
  cueSheetUrl: InputMaybe<Scalars['String']>;
  ownedOperated: InputMaybe<Scalars['Boolean']>;
  selfTakedown: InputMaybe<Scalars['Boolean']>;
  sensitive: InputMaybe<Scalars['Boolean']>;
  sensitiveDetails: InputMaybe<Scalars['String']>;
  videoProjectId: Scalars['Int'];
  videoProjectThumbnailId: InputMaybe<Scalars['Int']>;
  videoProjectVideoFileId: InputMaybe<Scalars['Int']>;
};

export type CustomerMigration_AuthorProfileInput = {
  bio: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
};

export type CustomerMigration_CreateLegacySlugInput = {
  communityId: Scalars['Int'];
  /** The ID of the destination entry */
  entryId: Scalars['Int'];
  /** The format of the destination entry */
  format: LegacySlugFormat;
  /** The origin path of the redirect */
  slug: Scalars['String'];
};

export type CustomerMigration_CreateRedirectInput = {
  communityId: Scalars['Int'];
  /** ex: /new-path */
  destinationPath: Scalars['String'];
  /** ex: /old-path */
  sourcePath: Scalars['String'];
};

export type CustomerMigration_CreateSiteGroupInput = {
  communityId: Scalars['Int'];
  createHubPage: InputMaybe<Scalars['Boolean']>;
  internal: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  parentEntryGroupId: InputMaybe<Scalars['Int']>;
  slug: InputMaybe<Scalars['String']>;
  url: InputMaybe<Scalars['String']>;
};

export type CustomerMigration_CreateSuperGroupInput = {
  internal: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  networkId: Scalars['Int'];
  parentEntryGroupId: InputMaybe<Scalars['Int']>;
  slug: InputMaybe<Scalars['String']>;
  url: InputMaybe<Scalars['String']>;
};

export type CustomerMigration_CreateUserInput = {
  authorProfile: InputMaybe<CustomerMigration_AuthorProfileInput>;
  communityId: Scalars['Int'];
  email: InputMaybe<Scalars['String']>;
  facebookUrl: InputMaybe<Scalars['String']>;
  instagramUrl: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  profileImageUrl: InputMaybe<Scalars['String']>;
  roles: InputMaybe<Array<RoleName>>;
  snapchatUrl: InputMaybe<Scalars['String']>;
  twitterUrl: InputMaybe<Scalars['String']>;
  url: InputMaybe<Scalars['String']>;
  username: InputMaybe<Scalars['String']>;
};

export type CustomerMigration_UpdateSiteGroupInput = {
  communityId: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  internal: InputMaybe<Scalars['Boolean']>;
  name: InputMaybe<Scalars['String']>;
  parentEntryGroupId: InputMaybe<Scalars['Int']>;
  slug: InputMaybe<Scalars['String']>;
};

export type CustomerMigration_UpdateUserInput = {
  authorProfile: InputMaybe<CustomerMigration_AuthorProfileInput>;
  communityId: Scalars['Int'];
  email: InputMaybe<Scalars['String']>;
  facebookUrl: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  instagramUrl: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  profileImageUrl: InputMaybe<Scalars['String']>;
  roles: InputMaybe<Array<RoleName>>;
  snapchatUrl: InputMaybe<Scalars['String']>;
  twitterUrl: InputMaybe<Scalars['String']>;
  url: InputMaybe<Scalars['String']>;
  username: InputMaybe<Scalars['String']>;
};

export type Entity = AuthorProfile | Entry | EntryGroup | Redirect;

/**
 * An Entry is a published unit of content. It belongs to a [`Community`](/docs/reference/object/Community) and is authored by one or more users.
 * It can be categorized into [`EntryGroups`](/docs/reference/object/EntryGroups) and placed on [`HubPages`](/docs/reference/object/HubPages).
 */
export type Entry = EntryRevision & HubPagePlaceable & {
  __typename?: 'Entry';
  /** The freeform text field that an editor can use to specify people who worked on the story, e.g. `"Photos by Bill Cunningham"`. */
  additionalContributors: Maybe<RichText>;
  /** Indicates that clients should not rewrite e-commerce links for affiliate revenue purposes (default `false`). */
  affiliateLinkRewritingDisabled: Scalars['Boolean'];
  /**
   * The Google AMP URL of this entry.
   * Will be `null` if hide_from_amp is `true`.
   */
  ampUrl: Maybe<Scalars['URL']>;
  /** The primary author of this entry. */
  author: User;
  /**
   * The primary author ID of this entry.
   * @deprecated use author.id
   */
  authorId: Scalars['Int'];
  /** The AuthorProfile of this entry's author on this entry's community. */
  authorProfile: Maybe<AuthorProfile>;
  /** The full body content of this entry. */
  body: EntryBody;
  /** References to Building records in Hermano. */
  buildingIds: Array<Scalars['Int']>;
  buildings: Maybe<Array<Maybe<Building>>>;
  /** A collection of community-level campaign groups that this entry belongs to. */
  campaignGroups: Array<Maybe<EntryGroup>>;
  /** Specifies a custom URL to override this entry's canonical URL meta field. Useful for republishing offsite content. */
  canonicalUrlOverride: Maybe<Scalars['URL']>;
  /** Whether commenting is closed on this entry. */
  commentsClosed: Scalars['Boolean'];
  /** The community that this entry belongs to. */
  community: Community;
  /** A collection of community-level groups that this belongs to, including its `primaryCommunityGroup`. */
  communityGroups: Array<Maybe<EntryGroup>>;
  /**
   * The community ID that this entry belongs to.
   * @deprecated use community.id
   */
  communityId: Scalars['Int'];
  /**
   * A list of contributor IDs for this entry, not including the primary author.
   * @deprecated use contributors.id
   */
  contributorIds: Array<Scalars['Int']>;
  /** The AuthorProfiles of each of this entry's secondary contributors. */
  contributorProfiles: Array<Maybe<AuthorProfile>>;
  /** A list of contributors for this entry, not including the primary author. */
  contributors: Maybe<Array<User>>;
  /** The date this entry was created. */
  createdAt: Maybe<Scalars['DateTime']>;
  /** Custom flag field by key for this entry. */
  customFieldFlag: Maybe<Scalars['Boolean']>;
  /** Custom text field by key for this entry. */
  customFieldText: Maybe<Scalars['String']>;
  /** Provides a list of all custom pages for this entry. Only available on entries of type [`CUSTOM_STORY`](/docs/reference/enum/EntryType.html#custom-story). */
  customPages: Maybe<Array<EntryCustomPage>>;
  /** The line of text immediately below the headline on the entry page. */
  dek: Maybe<RichText>;
  /**
   * The [`EntryDraft`](/docs/reference/object/EntryDraft) associated with this published entry.
   * Changes will be staged on this draft, and then synced to this entry upon publish.
   */
  draft: Maybe<EntryDraft>;
  /** A list of external associations for this entry formatted as `"{service}:{identifier}"`, e.g.: `"associatedpress:12345"`. */
  externalIds: Array<Scalars['ID']>;
  /** Whether there are affiliate links in the entry body. Should return true if there are hard-coded links, even if the entry's `affiliateLinkRewritingDisabled` is `true`. */
  hasAffiliateLinks: Maybe<Scalars['Boolean']>;
  /** Specifies if this entry is hidden from AMP. */
  hideFromAmp: Scalars['Boolean'];
  /** A list of placements, one for each hub page that this entry appears on. */
  hubPagePlacements: Array<Maybe<HubPagePlacement>>;
  /**
   * The internal id of this record in SBN.
   * @deprecated use a ContentAPI uuid identifier
   */
  id: Scalars['Int'];
  /** Specifies if this entry has been paywalled. */
  isPaywalled: Scalars['Boolean'];
  /** Specifies if this entry is restricted by regional privacy laws (GDPR). */
  isRestrictedInPrivacyConsentRegion: Scalars['Boolean'];
  /** Specifies the layout template to use for a revision */
  layoutTemplate: Maybe<EntryLayoutTemplate>;
  /** @deprecated use leadComponent */
  leadArt: Maybe<EntryLeadArt>;
  /** One of several possible featured media types for this entry, including an image, a gallery of images, a third-party embed, or a video. This featured media is typically rendered at the top of the story, sometimes in a typographical lockup with the headline. When blank, this entry omits the featured media slot. */
  leadComponent: Maybe<EntryLeadComponent>;
  /** Similar to [`Entry.leadComponent`](#leadComponent-EntryLeadComponent), but only provides an image selection. This is useful when [assessing fallbacks](/docs/guides/using-entry-images#selecting-entry-meta-images) for other meta images such as `socialImage` or `seoImage`. */
  leadImage: Maybe<EntryImage>;
  /** Legacy database ID, used internally for analytics. */
  legacyId: Maybe<Scalars['Int']>;
  /** The community for the link post's url. `null` for other entry types. */
  linkPostCommunity: Maybe<Community>;
  /** The link set associated with this entry. */
  linkSet: Maybe<LinkSet>;
  /**
   * The link set ID associated with this entry.
   * @deprecated use linkSet.id
   */
  linkSetId: Maybe<Scalars['Int']>;
  /** End time for live coverage. */
  liveCoverageEnd: Maybe<Scalars['DateTime']>;
  /** References to LiveCoverageEvent records in Hermano. */
  liveCoverageEventIds: Array<Scalars['Int']>;
  liveCoverageEvents: Maybe<Array<Maybe<LiveCoverageEvent>>>;
  /** Start time for live coverage. */
  liveCoverageStart: Maybe<Scalars['DateTime']>;
  /** Provides a list of interactive map points for this entry. Only available on entires of type [`MAP_STACK`](/docs/reference/enum/EntryType#map-stack). */
  mapCards: Maybe<Array<MapCard>>;
  /** References to MmaEvent records in Hermano. */
  mmaEventIds: Array<Scalars['Int']>;
  mmaEvents: Maybe<Array<Maybe<MmaEvent>>>;
  /** References to MmaFight records in Hermano. */
  mmaFightIds: Array<Scalars['Int']>;
  /** References to MmaFighter records in Hermano. */
  mmaFighterIds: Array<Scalars['Int']>;
  mmaFighters: Maybe<Array<Maybe<MmaFighter>>>;
  mmaFights: Maybe<Array<Maybe<MmaFight>>>;
  /** References to MmaPromotion records in Hermano. */
  mmaPromotionIds: Array<Scalars['Int']>;
  mmaPromotions: Maybe<Array<Maybe<MmaPromotion>>>;
  /** References to MmaWeightClass records in Hermano. */
  mmaWeightClassIds: Array<Scalars['Int']>;
  mmaWeightClasses: Maybe<Array<Maybe<MmaWeightClass>>>;
  /** References to Neighborhood records in Hermano. */
  neighborhoodIds: Array<Scalars['Int']>;
  neighborhoods: Maybe<Array<Maybe<Neighborhood>>>;
  /** A collection of network-level groups that this entry belongs to, including its `primaryNetworkGroup`. */
  networkGroups: Array<Maybe<EntryGroup>>;
  /** The original date this entry was published. May be either before or after the current `publishDate`. */
  originalPublishDate: Scalars['DateTime'];
  /** The package this entry or draft belongs to. */
  package: Maybe<EntryRevision>;
  /** The package landing page's cover. Will be `null` if EntryType is not a Package. */
  packageCover: Maybe<EntryPackageCover>;
  /** The package landing page's logo to display for all member entries. Will be `null` if EntryType is not a Package. */
  packageLogo: Maybe<EntryImage>;
  /** The package landing page's ordered table of contents containing all its member stories. Will be `null` if EntryType is not a Package. */
  packageToc: Maybe<EntryPackageToc>;
  /** A password needed to view this Entry publicly */
  password: Maybe<Scalars['String']>;
  /** The editorially-managed SEO path segment of the URL. */
  permalink: Scalars['String'];
  places: Maybe<Array<Maybe<Place>>>;
  /** The primary network-level campaign group of this entry, to be sorted first in a list of groupings. */
  primaryCampaignGroup: Maybe<EntryGroup>;
  /** The primary community-level group of this entry, to be sorted first in a list of groupings. */
  primaryCommunityGroup: Maybe<EntryGroup>;
  /**
   * The primary community-level group ID of this entry.
   * @deprecated use primaryCommunityGroup.id
   */
  primaryCommunityGroupId: Maybe<Scalars['Int']>;
  /** The primary network-level group of this entry, to be sorted first in a list of groupings. */
  primaryNetworkGroup: Maybe<EntryGroup>;
  /**
   * The primary network-level group ID of this entry.
   * @deprecated use primaryNetworkGroup.id
   */
  primaryNetworkGroupId: Maybe<Scalars['Int']>;
  /** Primary Package Group associated with an Entry. */
  primaryPackageGroup: Maybe<EntryGroup>;
  /** Corresponds with the date an entry will run in print */
  printPublicationDate: Maybe<Scalars['Date']>;
  /** A slug to identify this entry if it is sent to print. */
  printSlug: Maybe<Scalars['String']>;
  /** References to ProductBrand records in Hermano. */
  productBrandIds: Array<Scalars['Int']>;
  productBrands: Maybe<Array<Maybe<ProductBrand>>>;
  productCategories: Maybe<Array<Maybe<ProductCategory>>>;
  /** References to ProductCategory records in Hermano. */
  productCategoryIds: Array<Scalars['Int']>;
  /** References to Product records in Hermano. */
  productIds: Array<Scalars['Int']>;
  products: Maybe<Array<Maybe<Product>>>;
  /** A dedicated description for use in promotional contexts, such as hub pages, archives, syndicated feeds, etc., separate from the promotional headline. */
  promoDescription: Maybe<RichText>;
  /** A dedicated headline for use in promotional contexts, such as hub pages, archives, and syndicated feeds. */
  promoHeadline: Maybe<Scalars['String']>;
  /** A dedicated image for use in promotional contexts, such as hub pages, archives, and syndicated feeds. */
  promoImage: Maybe<EntryImage>;
  /** The date which this entry appears to have been published, shown to audiences. */
  publishDate: Scalars['DateTime'];
  /**
   * The publish status of this Entry.
   * Will be `UNPBULISHED` if this Entry was made private anytime after being published.
   */
  publishStatus: EntryPublishStatus;
  /** An object that is the attachment for quick entries */
  quickAttachment: Maybe<EntryQuickAttachment>;
  /** An array of components that may appear in the rail of a page. */
  railComponents: Array<Maybe<EntryRailComponent>>;
  /** The date when the story is scheduled to hide. */
  scheduledForExpirationAt: Maybe<Scalars['DateTime']>;
  /** A dedicated description for use in [NewsArticle](https://schema.org/NewsArticle) schema, placing it in search engine results and the Google AMP carousel. */
  seoDescription: Maybe<RichText>;
  /** A dedicated headline for use in [NewsArticle](https://schema.org/NewsArticle) schema, placing it in search engine results and the Google AMP carousel. */
  seoHeadline: Maybe<Scalars['String']>;
  /** A dedicated image for use in [NewsArticle](https://schema.org/NewsArticle) schema, placing it in search engine results and the Google AMP carousel. */
  seoImage: Maybe<EntryImage>;
  /** The SEO schema data for an entry that may include one, some or all of the following schemas: [NewsArticle](https://schema.org/NewsArticle), [Review](https://schema.org/Review), [Product](https://schema.org/Product), [ItemList](https://schema.org/ItemList), [VideoObject](https://schema.org/VideoObject) and [LiveBlogPosting](https://schema.org/LiveBlogPosting). */
  seoSchema: Maybe<Array<Scalars['JSON']>>;
  /** References to ShoppingDeal records in Hermano. */
  shoppingDealIds: Array<Scalars['Int']>;
  shoppingDeals: Maybe<Array<Maybe<ShoppingDeal>>>;
  /** A short link for the Entry in the format [domain]/e/[entry_id], which redirects to the Entry's canonical URL. */
  shortLink: Scalars['URL'];
  /** Specifies if this entry should be excluded from feeds and sitemaps. */
  shouldNotDistribute: Scalars['Boolean'];
  /** When displaying on the web, include "nofollow" in the `<meta name="robots">` HTML tag value. */
  shouldUseHTMLNofollow: Scalars['Boolean'];
  /** When displaying on the web, include "noindex" in the `<meta name="robots">` HTML tag value. */
  shouldUseHTMLNoindex: Scalars['Boolean'];
  /** The full URL path of this entry, including categorical prefixes and the permalink. */
  slug: Scalars['String'];
  /** A dedicated description for use in social sharing contexts, such as Facebook and Twitter meta tags. */
  socialDescription: Maybe<RichText>;
  /** A dedicated headling for use in social sharing contexts, such as Facebook and Twitter meta tags. */
  socialHeadline: Maybe<Scalars['String']>;
  /** A dedicated image for use in social sharing contexts, such as Facebook and Twitter meta images. */
  socialImage: Maybe<EntryImage>;
  /** References to SportEvent records in Hermano. */
  sportEventIds: Array<Scalars['Int']>;
  sportEvents: Maybe<Array<Maybe<SportEvent>>>;
  /** References to SportPlayer records in Hermano. */
  sportPlayerIds: Array<Scalars['Int']>;
  sportPlayers: Maybe<Array<Maybe<SportPlayer>>>;
  /** References to SportTeam records in Hermano. */
  sportTeamIds: Array<Scalars['Int']>;
  sportTeams: Maybe<Array<Maybe<SportTeam>>>;
  /** Provides scoped access to entries belonging to this stream. Only available on entires of type [`STREAM`](/docs/reference/enum/EntryType#stream). */
  stream: Maybe<EntryStream>;
  /** All entries of type `STREAM` that this entry belongs to. */
  streams: Maybe<Array<Maybe<Entry>>>;
  /** The custom css added in story editor. */
  styles: Maybe<Scalars['String']>;
  /** The teaser text for this entry. (INTERNAL - only used by The Verge) */
  teaser: Maybe<RichText>;
  ticketEvents: Maybe<Array<Maybe<TicketEvent>>>;
  /** The main headline of this Entry. */
  title: Scalars['String'];
  /** The date when this entry was marked for deletion. */
  trashedAt: Maybe<Scalars['DateTime']>;
  /** The type of this entry based on editorial features that it incorporates. An entry's type generally influences the content layout that presents it. */
  type: EntryType;
  /** The unique idenfifier for this entry record. */
  uid: Scalars['ID'];
  /** When this entry was last changed. May be more recent than when it was last published. */
  updatedAt: Maybe<Scalars['DateTime']>;
  /** The published URL of this entry, composed of this entry's slug and community domain. */
  url: Scalars['URL'];
  /** The relative path of the entry. (Empty for EntryDraft) */
  urlPath: Scalars['String'];
  /** The internal id of this record in Content-API. */
  uuid: Scalars['String'];
  /** References to Venue records in Hermano. */
  venueIds: Array<Scalars['Int']>;
  venues: Maybe<Array<Maybe<Venue>>>;
  /** A version number that increments each time this entry is modified. Useful for building cache keys. */
  version: Scalars['Int'];
  /** References to VideoGameFranchise records in Hermano. */
  videoGameFranchiseIds: Array<Scalars['Int']>;
  videoGameFranchises: Maybe<Array<Maybe<VideoGameFranchise>>>;
  /** References to VideoGame records in Hermano. */
  videoGameIds: Array<Scalars['Int']>;
  /** References to VideoGamePlatform records in Hermano. */
  videoGamePlatformIds: Array<Scalars['Int']>;
  videoGamePlatforms: Maybe<Array<Maybe<VideoGamePlatform>>>;
  videoGames: Maybe<Array<Maybe<VideoGame>>>;
  /** References to networks returned by the visibleNetworks field. */
  visibleNetworkIds: Array<Scalars['Int']>;
  /** The word count of the body text excluding em dashes `–`, hyphens `-` and asterisks `*`. Used for analytics. */
  wordCount: Scalars['Int'];
};


/**
 * An Entry is a published unit of content. It belongs to a [`Community`](/docs/reference/object/Community) and is authored by one or more users.
 * It can be categorized into [`EntryGroups`](/docs/reference/object/EntryGroups) and placed on [`HubPages`](/docs/reference/object/HubPages).
 */
export type EntryCustomFieldFlagArgs = {
  key: Scalars['String'];
};


/**
 * An Entry is a published unit of content. It belongs to a [`Community`](/docs/reference/object/Community) and is authored by one or more users.
 * It can be categorized into [`EntryGroups`](/docs/reference/object/EntryGroups) and placed on [`HubPages`](/docs/reference/object/HubPages).
 */
export type EntryCustomFieldTextArgs = {
  key: Scalars['String'];
};

/** Provides the main content body for an Entry in a variety of formats. */
export type EntryBody = {
  __typename?: 'EntryBody';
  /** An array of components that hold full-fidelity content as structured data. */
  components: Array<EntryBodyComponent>;
  /**
   * Provides rendered output formats of the full entry body,
   * equivelant to formatting all components and joining the result.
   */
  format: EntryBodyFormat;
  /** An array of components that hold full-fidelity quickPost content as structured data. */
  quickPostComponents: Array<EntryBodyComponent>;
};

/**
 * Defines a call-to-action promoting a URL.
 * Normally displays as an aside to the entry body.
 */
export type EntryBodyActionbox = EntryBodyComponent & {
  __typename?: 'EntryBodyActionbox';
  /** A description of the promoted URL. */
  description: Maybe<RichText>;
  /** Provides rendered output formats of this component. */
  format: EntryBodyFormat;
  /** A heading for the promoted URL. */
  heading: Maybe<RichText>;
  /** A label for the promoted URL. */
  label: Maybe<RichText>;
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
  /** The promoted URL. */
  url: Scalars['URL'];
};

/** Provides a collection of paragraphs wrapped as a blockquote. */
export type EntryBodyBlockquote = EntryBodyComponent & EntryBodySecondLevelComponent & {
  __typename?: 'EntryBodyBlockquote';
  /** Provides rendered output formats of this component. */
  format: EntryBodyFormat;
  /** An array of [`EntryBodyParagraph`](/docs/reference/object/EntryBodyParagraph.html) components that are wrapped by this blockquote. */
  paragraphs: Array<EntryBodyParagraph>;
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
};

/**
 * Represents all components that may appear in the root
 * of an [`EntryBody`](/docs/reference/object/EntryBody.html) components array.
 */
export type EntryBodyComponent = {
  /** Provides rendered output formats of this component. */
  format: EntryBodyFormat;
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
};

/** Specifies a component's alignment within the body layout. */
export enum EntryBodyComponentAlignment {
  /**
   * Element floats left, flush with the left edge of the body.
   * The element's width is generally reduced to promote content wrapping.
   */
  FloatLeft = 'FLOAT_LEFT',
  /**
   * Element floats right, flush with the right edge of the body.
   * The element's width is generally reduced to promote content wrapping.
   */
  FloatRight = 'FLOAT_RIGHT',
  /** Element fills the width of the window. */
  FullBleed = 'FULL_BLEED',
  /**
   * Element floats left with negative margin, breaking the left edge of the body.
   * The element's width is generally reduced to promote content wrapping.
   */
  HangLeft = 'HANG_LEFT',
  /**
   * Element floats right with negative margin, breaking the right edge of the body.
   * The element's width is generally reduced to promote content wrapping.
   */
  HangRight = 'HANG_RIGHT',
  /** Element spans from hanging-left to hanging-right positions. */
  WideBlock = 'WIDE_BLOCK'
}

/**
 * Specify the data needed to create a new [`EntryBodyComponent`](/docs/reference/interface/EntryBodyComponent.html).
 * Exactly one field must be specified.
 */
export type EntryBodyComponentCreateInput = {
  /** Create a new [`EntryBodyEmbed`](/docs/reference/object/EntryBodyEmbed.html) component. */
  embed: InputMaybe<EntryBodyEmbedCreateInput>;
  /** Create a new [`EntryBodyGallery`](/docs/reference/object/EntryBodyGallery.html) component. */
  gallery: InputMaybe<EntryBodyGalleryCreateInput>;
  /** Create a new [`EntryBodyHeading`](/docs/reference/object/EntryBodyHeading.html) component. */
  heading: InputMaybe<EntryBodyHeadingCreateInput>;
  /** Create a new [`EntryBodyHTML`](/docs/reference/object/EntryBodyHTML.html) component. */
  html: InputMaybe<EntryBodyHtmlCreateInput>;
  /** Create a new [`EntryBodyImage`](/docs/reference/object/EntryBodyImage.html) component. */
  image: InputMaybe<EntryBodyImageCreateInput>;
  /** Create a new [`EntryBodyList`](/docs/reference/object/EntryBodyList.html) component. */
  list: InputMaybe<EntryBodyListCreateInput>;
  /** Create a new [`EntryBodyParagraph`](/docs/reference/object/EntryBodyParagraph.html) component. */
  paragraph: InputMaybe<EntryBodyParagraphCreateInput>;
  /** Create a new [`EntryBodyPullquote`](/docs/reference/object/EntryBodyPullquote.html) component. */
  pullquote: InputMaybe<EntryBodyPullquoteCreateInput>;
  /** Create a new [`EntryBodyRelatedList`](/docs/reference/object/EntryBodyRelatedList.html) component. */
  relatedList: InputMaybe<EntryBodyRelatedListCreateInput>;
  /** Create a new [`EntryBodySidebar`](/docs/reference/object/EntryBodySidebar.html) component. */
  sidebar: InputMaybe<EntryBodySidebarCreateInput>;
};

/**
 * Specifies a visual grid layout for a component grouping such as
 * [`EntryBodyImageGroup`](/docs/reference/object/EntryBodyImageGroup.html).
 */
export enum EntryBodyComponentGroupLayout {
  /** Four elements as quadrants, `50 / 50 // 50 / 50`. */
  FourUp = 'FOUR_UP',
  /** Three elements on two rows, `50 / 50 // 100`. */
  ThreeUpBottom = 'THREE_UP_BOTTOM',
  /** Three elements on two rows, `100 // 50 / 50`. */
  ThreeUpTop = 'THREE_UP_TOP',
  /** Two elements on one row, `50 / 50`. */
  TwoUp = 'TWO_UP'
}

/**
 * Specify one operation to apply to a list of [`EntryBodyComponent`](/docs/reference/interface/EntryBodyComponent.html) objects.
 * Exactly one field must be specified.
 */
export type EntryBodyComponentListInput = {
  /** Add one or more components to the end of the list. */
  append: InputMaybe<Array<EntryBodyComponentCreateInput>>;
  /** Overwrite the entire list. */
  assign: InputMaybe<Array<EntryBodyComponentCreateInput>>;
  /** Overwrite the entire list only if it is empty (`[]`). */
  assignIfBlank: InputMaybe<Array<EntryBodyComponentCreateInput>>;
  /** Apply a list patch in order to insert, remove, update, or move components in the list. */
  patch: InputMaybe<Array<EntryBodyComponentListPatchInput>>;
  /** Add one or more components to the beginning of the list. */
  prepend: InputMaybe<Array<EntryBodyComponentCreateInput>>;
};

/**
 * Specify one operation to apply at a particular offset in a list of [`EntryBodyComponent`](/docs/reference/interface/EntryBodyComponent.html) objects.
 * A list of these inputs constitutes a `list patch`, which is a convenient way to make multiple edits to a list in a single pass.
 * See the guide on [list patches](/docs/guides/list-patches.md) for more details.
 * Exactly one field must be specified.
 */
export type EntryBodyComponentListPatchInput = {
  /**
   * Remove a single component from the list and place it into the clipboard with the given key.
   * The same key cannot be used in more than one `cut` operation in a single patch.
   */
  cut: InputMaybe<Scalars['String']>;
  /** Insert a new component at the current offset. */
  insert: InputMaybe<EntryBodyComponentCreateInput>;
  /** Skip over a number of components in the list. */
  keep: InputMaybe<Scalars['Int']>;
  /**
   * Insert a single component from the clipboard by the given key.
   * The same key cannot be used in more than one `paste` operation in a single patch.
   */
  paste: InputMaybe<Scalars['String']>;
  /** Remove a number of components from the list. */
  remove: InputMaybe<Scalars['Int']>;
  /** Update the component at the current offset. */
  update: InputMaybe<EntryBodyComponentUpdateInput>;
};

/** Provides attributes describing a component's placement within the body. */
export type EntryBodyComponentPlacement = {
  __typename?: 'EntryBodyComponentPlacement';
  /** Specifies the component's alignment within the body layout. */
  alignment: Maybe<EntryBodyComponentAlignment>;
  /** Specifies a HTML element ID for this component. */
  id: Maybe<Scalars['String']>;
};

/** Specify details of an [`EntryBodyComponent`](/docs/reference/interface/EntryBodyComponent.html)'s placement. */
export type EntryBodyComponentPlacementInput = {
  /** How this component should be visually aligned on the page. */
  alignment: InputMaybe<EntryBodyComponentAlignment>;
  /** A string to use as an HTML "id" attribute for this component. */
  id: InputMaybe<Scalars['String']>;
};

/**
 * Specify changes to an existing [`EntryBodyComponent`](/docs/reference/interface/EntryBodyComponent.html).
 * Exactly one field must be specified.
 */
export type EntryBodyComponentUpdateInput = {
  /** Update an existing [`EntryBodyEmbed`](/docs/reference/object/EntryBodyEmbed.html) component. */
  embed: InputMaybe<EntryBodyEmbedUpdateInput>;
  /** Update an existing [`EntryBodyGallery`](/docs/reference/object/EntryBodyGallery.html) component. */
  gallery: InputMaybe<EntryBodyGalleryUpdateInput>;
  /** Update an existing [`EntryBodyHeading`](/docs/reference/object/EntryBodyHeading.html) component. */
  heading: InputMaybe<EntryBodyHeadingUpdateInput>;
  /** Update an existing [`EntryBodyHTML`](/docs/reference/object/EntryBodyHTML.html) component. */
  html: InputMaybe<EntryBodyHtmlUpdateInput>;
  /** Update an existing [`EntryBodyImage`](/docs/reference/object/EntryBodyImage.html) component. */
  image: InputMaybe<EntryBodyImageUpdateInput>;
  /** Update an existing [`EntryBodyList`](/docs/reference/object/EntryBodyList.html) component. */
  list: InputMaybe<EntryBodyListUpdateInput>;
  /** Update an existing [`EntryBodyParagraph`](/docs/reference/object/EntryBodyParagraph.html) component. */
  paragraph: InputMaybe<EntryBodyParagraphUpdateInput>;
  /** Update an existing [`EntryBodyPullquote`](/docs/reference/object/EntryBodyPullquote.html) component. */
  pullquote: InputMaybe<EntryBodyPullquoteUpdateInput>;
  /** Update an existing [`EntryBodyRelatedList`](/docs/reference/object/EntryBodyRelatedList.html) component. */
  relatedList: InputMaybe<EntryBodyRelatedListUpdateInput>;
  /** Update an existing [`EntryBodySidebar`](/docs/reference/object/EntryBodySidebar.html) component. */
  sidebar: InputMaybe<EntryBodySidebarUpdateInput>;
};

/** Specify the data needed to create a new [`EntryBody`](/docs/reference/object/EntryBody.html). */
export type EntryBodyCreateInput = {
  /** Create a new list [`EntryBodyComponents`](/docs/reference/interface/EntryBodyComponent.html). */
  components: InputMaybe<Array<EntryBodyComponentCreateInput>>;
};

/** Provides the body placement of an [`EntryEmbed`](/docs/reference/object/EntryEmbed.html). */
export type EntryBodyEmbed = EntryBodyComponent & EntryBodySecondLevelComponent & {
  __typename?: 'EntryBodyEmbed';
  /** The [`EntryEmbed`](/docs/reference/object/EntryEmbed.html) object placed at this body position. */
  embed: EntryEmbed;
  /** Provides rendered output formats of this component. */
  format: EntryBodyFormat;
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
};

/** Specify the data needed to create a new [`EntryBodyEmbed`](/docs/reference/object/EntryBodyEmbed.html) component. */
export type EntryBodyEmbedCreateInput = {
  /** Create a new [`EntryEmbed`](/docs/reference/object/EntryEmbed.html). */
  embed: EntryEmbedInput;
  /** Details of this component's body placement. */
  placement: InputMaybe<EntryBodyComponentPlacementInput>;
};

/** Specify changes to an existing [`EntryBodyEmbed`](/docs/reference/object/EntryBodyEmbed.html) component. */
export type EntryBodyEmbedUpdateInput = {
  /** Replace with a new [`EntryEmbed`](/docs/reference/object/EntryEmbed.html). */
  embed: InputMaybe<EntryEmbedInput>;
  /** Details of this component's body placement. */
  placement: InputMaybe<EntryBodyComponentPlacementInput>;
};

/**
 * Provides formatted outputs of an [`EntryBody`](/docs/reference/object/EntryBody.html)
 * or [`EntryBodyComponent`](/docs/reference/interface/EntryBodyComponent.html).
 */
export type EntryBodyFormat = {
  __typename?: 'EntryBodyFormat';
  /**
   * Provides a basic html representation of the associated object.
   * This markup may change over time, so direct use in production apps is not recommended.
   */
  html: Maybe<Scalars['String']>;
  /**
   * Provides a basic text representation of the associated object.
   * Text-based elements (paragraphs, lits, etc.) will provide their plaintext.
   * Media elements and editorial features (polls, ratings, etc.) will provide a simple abstraction of their content, such as a title.
   */
  plaintext: Maybe<Scalars['String']>;
};

/** Provides the body placement of an [`EntryGallery`](/docs/reference/object/EntryGallery.html). */
export type EntryBodyGallery = EntryBodyComponent & {
  __typename?: 'EntryBodyGallery';
  /** Provides rendered output formats of this component. */
  format: EntryBodyFormat;
  /** The [`EntryGallery`](/docs/reference/object/EntryGallery.html) object placed at this body position. */
  gallery: Maybe<EntryGallery>;
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
};

/** Specify the data needed to create a new [`EntryBodyGallery`](/docs/reference/object/EntryBodyGallery.html) component. */
export type EntryBodyGalleryCreateInput = {
  /** Connect or create an associated [`EntryGallery`](/docs/reference/object/EntryGallery.html). */
  gallery: EntryGalleryAssociationCreateInput;
  /** Details of this component's body placement. */
  placement: InputMaybe<EntryBodyComponentPlacementInput>;
};

/** Specify changes to an existing [`EntryBodyGallery`](/docs/reference/object/EntryBodyGallery.html) component. */
export type EntryBodyGalleryUpdateInput = {
  /** Update the associated [`EntryGallery`](/docs/reference/object/EntryGallery.html). */
  gallery: InputMaybe<EntryGalleryAssociationUpdateInput>;
  /** Details of this component's body placement. */
  placement: InputMaybe<EntryBodyComponentPlacementInput>;
};

/** Provides a raw string of editorially-managed HTML. */
export type EntryBodyHtml = EntryBodyComponent & EntryBodySecondLevelComponent & {
  __typename?: 'EntryBodyHTML';
  /** Provides rendered output formats of this component. */
  format: EntryBodyFormat;
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
  /** The raw editorially-managed HTML string. */
  rawHtml: Scalars['String'];
};

/** Specify the data needed to create a new [`EntryBodyHTML`](/docs/reference/object/EntryBodyHTML.html) component. */
export type EntryBodyHtmlCreateInput = {
  /** Details of this component's body placement. */
  placement: InputMaybe<EntryBodyComponentPlacementInput>;
  /** The raw HTML string. */
  rawHtml: Scalars['String'];
};

/** Specify changes to an existing [`EntryBodyHTML`](/docs/reference/object/EntryBodyHTML.html) component. */
export type EntryBodyHtmlUpdateInput = {
  /** Details of this component's body placement. */
  placement: InputMaybe<EntryBodyComponentPlacementInput>;
  /** Modify the raw HTML string. */
  rawHtml: InputMaybe<PlainTextInput>;
};

/** Provides a hierarchical body heading. */
export type EntryBodyHeading = EntryBodyComponent & EntryBodySecondLevelComponent & {
  __typename?: 'EntryBodyHeading';
  /** The text contents of this header. */
  contents: RichText;
  /** Provides rendered output formats of this component. */
  format: EntryBodyFormat;
  /** Specifies the level of this heading, always a number between 1 and 5. */
  level: Scalars['Int'];
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
};

/** Specify the data needed to create a new [`EntryBodyHeading`](/docs/reference/object/EntryBodyHeading.html) component. */
export type EntryBodyHeadingCreateInput = {
  /** The formatted text contents of this heading. */
  contents: RichTextValueInput;
  /** The level of this heading, a number between 1 and 5. */
  level: Scalars['Int'];
  /** Details of this component's body placement. */
  placement: InputMaybe<EntryBodyComponentPlacementInput>;
};

/** Specify changes to an existing [`EntryBodyHeading`](/docs/reference/object/EntryBodyHeading.html) component. */
export type EntryBodyHeadingUpdateInput = {
  /** Modify the formatted text contents of this heading. */
  contents: InputMaybe<RichTextInput>;
  /** The level of this heading, a number between 1 and 5. */
  level: InputMaybe<Scalars['Int']>;
  /** Details of this component's body placement. */
  placement: InputMaybe<EntryBodyComponentPlacementInput>;
};

/** Represents a horizontal rule within the body. */
export type EntryBodyHorizontalRule = EntryBodyComponent & EntryBodySecondLevelComponent & {
  __typename?: 'EntryBodyHorizontalRule';
  /** Provides rendered output formats of this component. */
  format: EntryBodyFormat;
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
};

/** Defines the body placement of a single image. */
export type EntryBodyImage = EntryBodyComponent & EntryBodySecondLevelComponent & {
  __typename?: 'EntryBodyImage';
  /**
   * A placement-specific warning message for sensitive content.
   * Normally overlays the image and must be clicked-through to reveal the content.
   */
  contentWarning: Maybe<Scalars['String']>;
  /** Provides rendered output formats of this component. */
  format: EntryBodyFormat;
  /** The [`EntryImage`](/docs/reference/object/EntryImage.html) placed at this body position. */
  image: EntryImage;
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
};

/** Provides the body placement of an [`EntryImageComparison`](/docs/reference/object/EntryImageComparison.html). */
export type EntryBodyImageComparison = EntryBodyComponent & {
  __typename?: 'EntryBodyImageComparison';
  /** Provides rendered output formats of this component. */
  format: EntryBodyFormat;
  /** The [`EntryImageComparison`](/docs/reference/object/EntryImageComparison.html) object placed at this body position. */
  imageComparison: Maybe<EntryImageComparison>;
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
};

/** Specify the data needed to create a new [`EntryBodyImage`](/docs/reference/object/EntryBodyImage.html) component. */
export type EntryBodyImageCreateInput = {
  /** Create the [`EntryImage`](/docs/reference/object/EntryImage.html) to use in this component. */
  image: EntryImageCreateInput;
  /** Details of this component's body placement. */
  placement: InputMaybe<EntryBodyComponentPlacementInput>;
};

/** Provides a grouping of images to display in a grid layout. */
export type EntryBodyImageGroup = EntryBodyComponent & {
  __typename?: 'EntryBodyImageGroup';
  /** Provides rendered output formats of this component. */
  format: EntryBodyFormat;
  /** The [`EntryImage`](/docs/reference/object/EntryImage.html) objects included in this grouping. */
  images: Array<EntryImage>;
  /**
   * Similar to `images`, but provides the original body items with placement attributes.
   * Useful for accessing placement-specific settings such as HTML ids.
   */
  items: Array<EntryBodyImage>;
  /** Specifies a visual layout assigned to this grouping. */
  layout: EntryBodyComponentGroupLayout;
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
};

/** Specify changes to an existing [`EntryBodyImage`](/docs/reference/object/EntryBodyImage.html) component. */
export type EntryBodyImageUpdateInput = {
  /** Modify the [`EntryImage`](/docs/reference/object/EntryImage.html) connected to this component. */
  image: InputMaybe<EntryImageUpdateInput>;
  /** Details of this component's body placement. */
  placement: InputMaybe<EntryBodyComponentPlacementInput>;
};

/** Provides a raw JSON representation of bespoke and/or deprecated story object types. */
export type EntryBodyJson = EntryBodyComponent & EntryBodySecondLevelComponent & {
  __typename?: 'EntryBodyJSON';
  /** The raw JSON data provided for this component. */
  data: Scalars['JSON'];
  /** Provides rendered output formats of this component. */
  format: EntryBodyFormat;
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
  /** A schema name for the shape of this JSON data. */
  schemaName: Scalars['String'];
};

/** Provides an ordered or bulleted list. */
export type EntryBodyList = EntryBodyComponent & EntryBodySecondLevelComponent & {
  __typename?: 'EntryBodyList';
  /** Provides rendered output formats of this component. */
  format: EntryBodyFormat;
  /**
   * Similar to `lines`, but provides the original body items with placement attributes.
   * Useful for accessing placement-specific settings such as HTML ids.
   */
  items: Array<EntryBodyListItem>;
  /** The lines of text in this list. */
  lines: Array<RichText>;
  /** Specifies if the list is ordered (numbered) or unordered (bulleted). */
  ordered: Scalars['Boolean'];
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
};

/** Specify the data needed to create a new [`EntryBodyList`](/docs/reference/object/EntryBodyList.html) component. */
export type EntryBodyListCreateInput = {
  /** The list of item objects of this list. */
  items: Array<EntryBodyListItemCreateInput>;
  /** Whether the list should be ordered (numbered) or unordered (bulleted). */
  ordered: Scalars['Boolean'];
};

/**
 * Defines the body placement of a single line item
 * in an [`EntryBodyList`](/docs/reference/object/EntryBodyList.html).
 */
export type EntryBodyListItem = {
  __typename?: 'EntryBodyListItem';
  /** The line item text. */
  line: RichText;
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
};

/** Specify the data needed to create a new [`EntryBodyListItem`](/docs/reference/object/EntryBodyListItem.html) object. */
export type EntryBodyListItemCreateInput = {
  /** The formatted text of this line. */
  line: RichTextValueInput;
  /** Details of this component's body placement. */
  placement: InputMaybe<EntryBodyComponentPlacementInput>;
};

/**
 * Specify one operation to apply to a list of [`EntryBodyListItem`](/docs/reference/interface/EntryBodyListItem.html) objects.
 * Exactly one field must be specified.
 */
export type EntryBodyListItemListInput = {
  /** Add one or more items to the end of the list. */
  append: InputMaybe<Array<EntryBodyListItemCreateInput>>;
  /** Overwrite the entire list. */
  assign: InputMaybe<Array<EntryBodyListItemCreateInput>>;
  /** Apply a list patch in order to insert, remove, update, or move items in the list. */
  patch: InputMaybe<Array<EntryBodyListItemListPatchInput>>;
  /** Add one or more items to the beginning of the list. */
  prepend: InputMaybe<Array<EntryBodyListItemCreateInput>>;
};

/**
 * Specify one operation to apply at a particular offset in a list of [`EntryBodyListItem`](/docs/reference/interface/EntryBodyListItem.html) objects.
 * A list of these inputs constitutes a `list patch`, which is a convenient way to make multiple edits to a list in a single pass.
 * See the guide on [list patches](/docs/guides/list-patches.md) for more details.
 * Exactly one field must be specified.
 */
export type EntryBodyListItemListPatchInput = {
  /**
   * Remove a single item from the list and place it into the clipboard with the given key.
   * The same key cannot be used in more than one `cut` operation in a single patch.
   */
  cut: InputMaybe<Scalars['String']>;
  /** Insert a new item at the current offset. */
  insert: InputMaybe<EntryBodyListItemCreateInput>;
  /** Skip over a number of items in the list. */
  keep: InputMaybe<Scalars['Int']>;
  /**
   * Insert a single item from the clipboard by the given key.
   * The same key cannot be used in more than one `paste` operation in a single patch.
   */
  paste: InputMaybe<Scalars['String']>;
  /** Remove a number of items from the list. */
  remove: InputMaybe<Scalars['Int']>;
  /** Update the item at the current offset. */
  update: InputMaybe<EntryBodyListItemUpdateInput>;
};

/** Specify changes to an existing [`EntryBodyListItem`](/docs/reference/object/EntryBodyListItem.html) object. */
export type EntryBodyListItemUpdateInput = {
  /** Update the formatted text of this line. */
  line: InputMaybe<RichTextInput>;
  /** Details of this component's body placement. */
  placement: InputMaybe<EntryBodyComponentPlacementInput>;
};

/** Specify the changes to an existing [`EntryBodyList`](/docs/reference/object/EntryBodyList.html) component. */
export type EntryBodyListUpdateInput = {
  /** Update list of item objects of this list. */
  items: InputMaybe<EntryBodyListItemListInput>;
  /** Whether the list should be ordered (numbered) or unordered (bulleted). */
  ordered: InputMaybe<Scalars['Boolean']>;
};

/** Provides the body placement of an [`Newsletter`](/docs/reference/object/Newsletter.html). */
export type EntryBodyNewsletter = EntryBodyComponent & {
  __typename?: 'EntryBodyNewsletter';
  /** Provides rendered output formats of this component. */
  format: EntryBodyFormat;
  /** Newsletter available for the community */
  newsletter: Newsletter;
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
};

/** Provides a single paragraph of body text. */
export type EntryBodyParagraph = EntryBodyComponent & EntryBodySecondLevelComponent & {
  __typename?: 'EntryBodyParagraph';
  /** The text contents of this paragraph. */
  contents: RichText;
  /** Enables a [drop cap](https://en.wiktionary.org/wiki/drop_cap) at the start of the paragraph. */
  dropcap: Scalars['Boolean'];
  /** Enables an [end mark](https://en.wiktionary.org/wiki/end_mark) to close the paragraph. */
  endmark: Scalars['Boolean'];
  /** Provides rendered output formats of this component. */
  format: EntryBodyFormat;
  /** Marks the paragraph as a [lead paragraph](https://en.wikipedia.org/wiki/Lead_paragraph). */
  lead: Scalars['Boolean'];
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
};

/** Specify the data needed to create a new [`EntryBodyParagraph`](/docs/reference/object/EntryBodyParagraph.html) component. */
export type EntryBodyParagraphCreateInput = {
  /** The formatted text of this paragraph. */
  contents: RichTextValueInput;
  /** Whether the paragraph should use dropcap formatting. */
  dropcap: InputMaybe<Scalars['Boolean']>;
  /** Whether the paragraph should include an endmark glyph. */
  endmark: InputMaybe<Scalars['Boolean']>;
  /** Whether the paragraph should be formatted as a lead paragraph. */
  lead: InputMaybe<Scalars['Boolean']>;
  /** Details of this component's body placement. */
  placement: InputMaybe<EntryBodyComponentPlacementInput>;
};

/** Specify changes to an existing [`EntryBodyParagraph`](/docs/reference/object/EntryBodyParagraph.html) component. */
export type EntryBodyParagraphUpdateInput = {
  /** Update the formatted text of this paragraph. */
  contents: InputMaybe<RichTextInput>;
  /** Whether the paragraph should use dropcap formatting. */
  dropcap: InputMaybe<Scalars['Boolean']>;
  /** Whether the paragraph should include an endmark glyph. */
  endmark: InputMaybe<Scalars['Boolean']>;
  /** Whether the paragraph should be formatted as a lead paragraph. */
  lead: InputMaybe<Scalars['Boolean']>;
  /** Details of this component's body placement. */
  placement: InputMaybe<EntryBodyComponentPlacementInput>;
};

/** Provides the body placement of an [`EntryPoll`](/docs/reference/object/EntryPoll.html). */
export type EntryBodyPoll = EntryBodyComponent & {
  __typename?: 'EntryBodyPoll';
  /** Provides rendered output formats of this component. */
  format: EntryBodyFormat;
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
  /** The [`EntryPoll`](/docs/reference/object/EntryPoll.html) object placed at this body position. */
  poll: Maybe<EntryPoll>;
};

/** Provides the body placement of an [`EntryProduct`](/docs/reference/object/EntryProduct.html). */
export type EntryBodyProduct = EntryBodyComponent & {
  __typename?: 'EntryBodyProduct';
  /** Provides rendered output formats of this component. */
  format: EntryBodyFormat;
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
  /** The [`EntryProduct`](/docs/reference/object/EntryProduct.html) object placed at this body position. */
  product: Maybe<EntryProduct>;
};

/** Provides a pullquote taken from elsewhere in the entry body. */
export type EntryBodyPullquote = EntryBodyComponent & EntryBodySecondLevelComponent & {
  __typename?: 'EntryBodyPullquote';
  /** Provides rendered output formats of this component. */
  format: EntryBodyFormat;
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
  /** The quotation text. */
  quote: RichText;
};

/** Specify the data needed to create a new [`EntryBodyPullquote`](/docs/reference/object/EntryBodyPullquote.html) component. */
export type EntryBodyPullquoteCreateInput = {
  /** Details of this component's body placement. */
  placement: InputMaybe<EntryBodyComponentPlacementInput>;
  /** The formatted text contents of this pullquote. */
  quote: RichTextValueInput;
};

/** Specify changes to an existing [`EntryBodyPullquote`](/docs/reference/object/EntryBodyPullquote.html) component. */
export type EntryBodyPullquoteUpdateInput = {
  /** Details of this component's body placement. */
  placement: InputMaybe<EntryBodyComponentPlacementInput>;
  /** Modify the formatted text contents of this pullquote. */
  quote: RichTextInput;
};

/** Provides the URL of a responsive iframe to be embedded using [Pym.js](http://blog.apps.npr.org/pym.js/). */
export type EntryBodyPymEmbed = EntryBodyComponent & {
  __typename?: 'EntryBodyPymEmbed';
  /** Provides rendered output formats of this component. */
  format: EntryBodyFormat;
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
  /**
   * The URL of the Pym.js content.
   * This location is presumed to implement the `new pym.Child()` protocol.
   */
  url: Scalars['URL'];
};

/**
 * Provides a point-based rating of a subject, i.e., "3 out of 5 stars".
 * Normally displays as an aside to the entry body.
 */
export type EntryBodyRatingcard = EntryBodyComponent & EntryBodySecondLevelComponent & {
  __typename?: 'EntryBodyRatingcard';
  /** Provides rendered output formats of this component. */
  format: EntryBodyFormat;
  /** Provides the maximum extent of the rating scale. */
  maxRating: Scalars['Float'];
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
  /** Specifies the rating score. */
  rating: Scalars['Float'];
  /** The title of this rating's subject. */
  title: Scalars['String'];
};

/**
 * Provides a list of related links.
 * Normally displays as an aside to the entry body.
 */
export type EntryBodyRelatedList = EntryBodyComponent & {
  __typename?: 'EntryBodyRelatedList';
  /** Provides rendered output formats of this component. */
  format: EntryBodyFormat;
  /** A list of related content links */
  items: Array<EntryBodyRelatedListItem>;
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
};

/** Specify the data needed to create a new [`EntryBodyRelatedList`](/docs/reference/object/EntryBodyRelatedList.html) component. */
export type EntryBodyRelatedListCreateInput = {
  /** Create a new list of [`EntryBodyRelatedListItem`](/docs/reference/object/EntryBodyRelatedListItem.html) objects. */
  items: InputMaybe<Array<EntryBodyRelatedListItemCreateInput>>;
  /** Details of this component's body placement. */
  placement: InputMaybe<EntryBodyComponentPlacementInput>;
};

/** Provides a single related link of an [`EntryBodyRelatedList`](/docs/reference/object/EntryBodyRelatedList.html). */
export type EntryBodyRelatedListItem = {
  __typename?: 'EntryBodyRelatedListItem';
  /** The title of this related link. */
  title: Scalars['String'];
  /** The URL of this related link. */
  url: Scalars['URL'];
};

/** Specify the data needed to create a new [`EntryBodyRelatedListItem`](/docs/reference/object/EntryBodyRelatedListItem.html) object. */
export type EntryBodyRelatedListItemCreateInput = {
  /** The title of this related link. */
  title: Scalars['String'];
  /** The URL of this related link. */
  url: Scalars['URL'];
};

/**
 * Specify one operation to apply to a list of [`EntryBodyRelatedListItem`](/docs/reference/interface/EntryBodyRelatedListItem.html) objects.
 * Exactly one field must be specified.
 */
export type EntryBodyRelatedListItemListInput = {
  /** Add one or more items to the end of the list. */
  append: InputMaybe<Array<EntryBodyRelatedListItemCreateInput>>;
  /** Overwrite the entire list. */
  assign: InputMaybe<Array<EntryBodyRelatedListItemCreateInput>>;
  /** Apply a list patch in order to insert, remove, update, or move items in the list. */
  patch: InputMaybe<Array<EntryBodyRelatedListItemListPatchInput>>;
  /** Add one or more items to the beginning of the list. */
  prepend: InputMaybe<Array<EntryBodyRelatedListItemCreateInput>>;
};

/**
 * Specify one operation to apply at a particular offset in a list of [`EntryBodyRelatedListItem`](/docs/reference/interface/EntryBodyRelatedListItem.html) objects.
 * A list of these inputs constitutes a `list patch`, which is a convenient way to make multiple edits to a list in a single pass.
 * See the guide on [list patches](/docs/guides/list-patches.md) for more details.
 * Exactly one field must be specified.
 */
export type EntryBodyRelatedListItemListPatchInput = {
  /**
   * Remove a single item from the list and place it into the clipboard with the given key.
   * The same key cannot be used in more than one `cut` operation in a single patch.
   */
  cut: InputMaybe<Scalars['String']>;
  /** Insert a new item at the current offset. */
  insert: InputMaybe<EntryBodyRelatedListItemCreateInput>;
  /** Skip over a number of items in the list. */
  keep: InputMaybe<Scalars['Int']>;
  /**
   * Insert a single item from the clipboard by the given key.
   * The same key cannot be used in more than one `paste` operation in a single patch.
   */
  paste: InputMaybe<Scalars['String']>;
  /** Remove a number of items from the list. */
  remove: InputMaybe<Scalars['Int']>;
  /** Update the item at the current offset. */
  update: InputMaybe<EntryBodyRelatedListItemUpdateInput>;
};

/** Specify changes to an existing [`EntryBodyRelatedListItem`](/docs/reference/object/EntryBodyRelatedListItem.html) object. */
export type EntryBodyRelatedListItemUpdateInput = {
  /** The title of this related link. */
  title: InputMaybe<Scalars['String']>;
  /** The URL of this related link. */
  url: InputMaybe<Scalars['URL']>;
};

/** Specify the changes to an existing [`EntryBodyRelatedList`](/docs/reference/object/EntryBodyRelatedList.html) component. */
export type EntryBodyRelatedListUpdateInput = {
  /** Update an existing list of [`EntryBodyRelatedListItem`](/docs/reference/object/EntryBodyRelatedListItem.html) objects. */
  items: InputMaybe<EntryBodyRelatedListItemListInput>;
  /** Details of this component's body placement. */
  placement: InputMaybe<EntryBodyComponentPlacementInput>;
};

/** Provides the body placement of an [`EntryScorecard`](/docs/reference/object/EntryScorecard.html). */
export type EntryBodyScorecard = EntryBodyComponent & {
  __typename?: 'EntryBodyScorecard';
  /** Provides rendered output formats of this component. */
  format: EntryBodyFormat;
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
  /** The [`EntryScorecard`](/docs/reference/object/EntryScorecard.html) object placed at this body position. */
  scorecard: Maybe<EntryScorecard>;
};

/**
 * Represents components that may appear in second-level body compositions,
 * such as in an [`EntryBodySidebar`](/docs/reference/object/EntryBodySidebar.html).
 * These second-level components prohibit additional nesting,
 * so [`EntryBody`](/docs/reference/object/EntryBody.html) is constrained to a maximum depth of two levels.
 */
export type EntryBodySecondLevelComponent = {
  /** Provides rendered output formats of this component. */
  format: EntryBodyFormat;
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
};

/**
 * Specify the data needed to create a new [`EntryBodyComponent`](/docs/reference/interface/EntryBodyComponent.html).
 * Exactly one field must be specified.
 */
export type EntryBodySecondLevelComponentCreateInput = {
  /** Create a new [`EntryBodyEmbed`](/docs/reference/object/EntryBodyEmbed.html) component. */
  embed: InputMaybe<EntryBodyEmbedCreateInput>;
  /** Create a new [`EntryBodyHeading`](/docs/reference/object/EntryBodyHeading.html) component. */
  heading: InputMaybe<EntryBodyHeadingCreateInput>;
  /** Create a new [`EntryBodyHTML`](/docs/reference/object/EntryBodyHTML.html) component. */
  html: InputMaybe<EntryBodyHtmlCreateInput>;
  /** Create a new [`EntryBodyImage`](/docs/reference/object/EntryBodyImage.html) component. */
  image: InputMaybe<EntryBodyImageCreateInput>;
  /** Create a new [`EntryBodyList`](/docs/reference/object/EntryBodyList.html) component. */
  list: InputMaybe<EntryBodyListCreateInput>;
  /** Create a new [`EntryBodyParagraph`](/docs/reference/object/EntryBodyParagraph.html) component. */
  paragraph: InputMaybe<EntryBodyParagraphCreateInput>;
  /** Create a new [`EntryBodyPullquote`](/docs/reference/object/EntryBodyPullquote.html) component. */
  pullquote: InputMaybe<EntryBodyPullquoteCreateInput>;
  /** Create a new [`EntryBodyVideo`](/docs/reference/object/EntryBodyVideo.html) component. */
  video: InputMaybe<EntryBodyVideoCreateInput>;
};

/**
 * Specify one operation to apply to a list of [`EntryBodyComponent`](/docs/reference/interface/EntryBodyComponent.html) objects.
 * Exactly one field must be specified.
 */
export type EntryBodySecondLevelComponentListInput = {
  /** Add one or more components to the end of the list. */
  append: InputMaybe<Array<EntryBodySecondLevelComponentCreateInput>>;
  /** Overwrite the entire list. */
  assign: InputMaybe<Array<EntryBodySecondLevelComponentCreateInput>>;
  /** Overwrite the entire list only if it is empty (`[]`). */
  assignIfBlank: InputMaybe<Array<EntryBodySecondLevelComponentCreateInput>>;
  /** Apply a list patch in order to insert, remove, update, or move components in the list. */
  patch: InputMaybe<Array<EntryBodySecondLevelComponentListPatchInput>>;
  /** Add one or more components to the beginning of the list. */
  prepend: InputMaybe<Array<EntryBodySecondLevelComponentCreateInput>>;
};

/**
 * Specify one operation to apply at a particular offset in a list of [`EntryBodyComponent`](/docs/reference/interface/EntryBodyComponent.html) objects.
 * A list of these inputs constitutes a `list patch`, which is a convenient way to make multiple edits to a list in a single pass.
 * See the guide on [list patches](/docs/guides/list-patches.md) for more details.
 * Exactly one field must be specified.
 */
export type EntryBodySecondLevelComponentListPatchInput = {
  /**
   * Remove a single component from the list and place it into the clipboard with the given key.
   * The same key cannot be used in more than one `cut` operation in a single patch.
   */
  cut: InputMaybe<Scalars['String']>;
  /** Insert a new component at the current offset. */
  insert: InputMaybe<EntryBodySecondLevelComponentCreateInput>;
  /** Skip over a number of components in the list. */
  keep: InputMaybe<Scalars['Int']>;
  /**
   * Insert a single component from the clipboard by the given key.
   * The same key cannot be used in more than one `paste` operation in a single patch.
   */
  paste: InputMaybe<Scalars['String']>;
  /** Remove a number of components from the list. */
  remove: InputMaybe<Scalars['Int']>;
};

/** Provides the body placement of an [`EntrySidebar`](/docs/reference/object/EntrySidebar.html). */
export type EntryBodySidebar = EntryBodyComponent & {
  __typename?: 'EntryBodySidebar';
  /** Provides rendered output formats of this component. */
  format: EntryBodyFormat;
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
  /** The [`EntrySidebar`](/docs/reference/object/EntrySidebar.html) object placed at this body position. */
  sidebar: Maybe<EntrySidebar>;
};

/** Specify the data needed to create a new [`EntryBodySidebar`](/docs/reference/object/EntryBodySidebar.html) component. */
export type EntryBodySidebarCreateInput = {
  /** Details of this component's body placement. */
  placement: InputMaybe<EntryBodyComponentPlacementInput>;
  /** Connect or create an associated [`EntrySidebar`](/docs/reference/object/EntrySidebar.html). */
  sidebar: EntrySidebarAssociationCreateInput;
};

/** Specify the changes to an existing [`EntryBodySidebar`](/docs/reference/object/EntryBodySidebar.html) component. */
export type EntryBodySidebarUpdateInput = {
  /** Details of this component's body placement. */
  placement: InputMaybe<EntryBodyComponentPlacementInput>;
  /** Update the associated [`EntrySidebar`](/docs/reference/object/EntrySidebar.html). */
  sidebar: InputMaybe<EntrySidebarAssociationUpdateInput>;
};

/** Provides the body placement of an [`EntryTable`](/docs/reference/object/EntryTable). */
export type EntryBodyTable = EntryBodyComponent & {
  __typename?: 'EntryBodyTable';
  /** Provides rendered output formats of this component. */
  format: EntryBodyFormat;
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
  /** The [`EntryTable`](/docs/reference/object/EntryTable) object placed at this body position. */
  table: Maybe<EntryTable>;
};

/** Specify changes to an existing [`EntryBody`](/docs/reference/object/EntryBody.html). */
export type EntryBodyUpdateInput = {
  /** Update the list of [`EntryBodyComponents`](/docs/reference/interface/EntryBodyComponent.html). */
  components: InputMaybe<EntryBodyComponentListInput>;
};

/** Provides the body placement of an [`EntryVideo`](/docs/reference/object/EntryVideo.html). */
export type EntryBodyVideo = EntryBodyComponent & EntryBodySecondLevelComponent & {
  __typename?: 'EntryBodyVideo';
  /** Whether this video will autoplay. */
  autoplay: Maybe<Scalars['Boolean']>;
  /** A caption for this video. */
  caption: Maybe<RichText>;
  /**
   * A placement-specific warning message for sensitive content.
   * Normally overlays the video and must be clicked-through to reveal the content.
   */
  contentWarning: Maybe<Scalars['String']>;
  /** Provides rendered output formats of this component. */
  format: EntryBodyFormat;
  /** Provides attributes that describe this component's body placement. */
  placement: EntryBodyComponentPlacement;
  /** The [`EntryVideo`](/docs/reference/object/EntryVideo.html) object placed at this body position. */
  video: Maybe<EntryVideo>;
};

/** Specify the data needed to create a new [`EntryBodyVideo`](/docs/reference/object/EntryBodyVideo.html) component. */
export type EntryBodyVideoCreateInput = {
  /** Details of this component's body placement. */
  placement: InputMaybe<EntryBodyComponentPlacementInput>;
  /** Connect or create an associated [`EntryVideo`](/docs/reference/object/EntryVideo.html). */
  video: EntryVideoAssociationCreateInput;
};

/**
 * Provides the connection needed to fetch entry edges, nodes and pagination info
 * based the relay connection spec.
 */
export type EntryConnection = {
  __typename?: 'EntryConnection';
  /** A list of entry edges containing entry node and cursor */
  edges: Maybe<Array<Maybe<EntryEdge>>>;
  /** A list of entries */
  nodes: Maybe<Array<Maybe<Entry>>>;
  /** Pagination information for entry list navigation. */
  pageInfo: PageInfo;
};

/**
 * Input used to create a new [`Entry`](/docs/reference/object/Entry.html).
 * The requested changes will be immediately published.
 */
export type EntryCreateInput = {
  /** Set a formatted text string to use in the byline in addition to `author` and `contributors`. */
  additionalContributors: InputMaybe<RichTextValueInput>;
  /** Associate a [`User`](/docs/reference/object/User.html) as the primary author. */
  author: UserUniqueKeyInput;
  /** Create body contents. */
  body: InputMaybe<EntryBodyCreateInput>;
  /** A custom URL to include in a <meta rel="canonical"> tag. Useful for republishing offsite content. */
  canonicalUrlOverride: InputMaybe<Scalars['URL']>;
  /** Whether comments should be closed when rendering on the web */
  commentsClosed: InputMaybe<Scalars['Boolean']>;
  /**
   * Which [`Community`](/docs/reference/object/Community.html) this [`Entry`](/docs/reference/object/Entry.html) will belong to.
   * Cannot be changed after the [`Entry`](/docs/reference/object/Entry.html) is created.
   */
  community: CommunityUniqueKeyInput;
  /** Associate with one or more [`Community`](/docs/reference/object/Community.html)-scoped [`EntryGroup`](/docs/reference/object/EntryGroup.html)s. */
  communityGroupMemberships: InputMaybe<Array<EntryGroupMembershipInput>>;
  /** Associate with one or more [`User`](/docs/reference/object/User.html)s as secondary contributors. */
  contributors: InputMaybe<Array<UserUniqueKeyInput>>;
  /** A list of custom toggle fields to set by name */
  customFieldFlags: InputMaybe<Array<EntryCustomFieldFlagInput>>;
  /** A list of custom text fields to set by name */
  customFieldTexts: InputMaybe<Array<EntryCustomFieldTextInput>>;
  /** A subheadline that appears beneath the main headline on the entry page. */
  dek: InputMaybe<RichTextValueInput>;
  /**
   * Assign one or more IDs supplied by an external system. Each ID must take the form of `{namespace}:{id}`.
   * The `{namespace}` and `{id}` segments may only contain ASCII alphanumeric characters, dashes, and underscores (`[a-zA-Z0-9_-]`).
   */
  externalIds: InputMaybe<Array<Scalars['ID']>>;
  /** Specifies the layout template to use for an entry. */
  layoutTemplate: InputMaybe<EntryLayoutTemplate>;
  /** Create an [`EntryImage`](/docs/reference/object/EntryImage.html) to use in the lead position. */
  leadImage: InputMaybe<EntryImageCreateInput>;
  /** Associate with one or more [`Network`](/docs/reference/object/Network.html)-scoped [`EntryGroup`](/docs/reference/object/EntryGroup.html)s. */
  networkGroupMemberships: InputMaybe<Array<EntryGroupMembershipInput>>;
  /** Set a password that will govern public access to view the Entry. */
  password: InputMaybe<Scalars['String']>;
  /** Set the SEO keywords segment of the [`Entry`](/docs/reference/object/Entry.html) URL. */
  permalink: InputMaybe<Scalars['String']>;
  /**
   * Set the primary [`Community`](/docs/reference/object/Community.html)-scoped [`EntryGroup`](/docs/reference/object/EntryGroup.html).
   * This [`EntryGroup`](/docs/reference/object/EntryGroup.html) will be implicitly added to the `communityGroups` collection if needed.
   */
  primaryCommunityGroup: InputMaybe<EntryGroupUniqueKeyInput>;
  /**
   * Set the primary [`Network`](/docs/reference/object/Network.html)-scoped [`EntryGroup`](/docs/reference/object/EntryGroup.html).
   * This [`EntryGroup`](/docs/reference/object/EntryGroup.html) will be implicitly added to the `networkGroups` collection if needed.
   */
  primaryNetworkGroup: InputMaybe<EntryGroupUniqueKeyInput>;
  /** Set a date for when an entry article will run to print. */
  printPublicationDate: InputMaybe<Scalars['Date']>;
  /** Set a slug used to identify this entry if it is sent to print. */
  printSlug: InputMaybe<Scalars['String']>;
  /** Set a short summary to use in promotional contexts within Chorus. */
  promoDescription: InputMaybe<RichTextValueInput>;
  /** Set a headline to use in promotional contexts within Chorus. */
  promoHeadline: InputMaybe<Scalars['String']>;
  /** Create an [`EntryImage`](/docs/reference/object/EntryImage.html) to use for promotional contexts within Chorus. */
  promoImage: InputMaybe<EntryImageCreateInput>;
  /** Set a date in the past to indicate when this entry was originally published. Defaults to now. */
  publishDate: InputMaybe<Scalars['DateTime']>;
  /** Set a date when the Entry will become hidden. */
  scheduledForExpirationAt: InputMaybe<Scalars['DateTime']>;
  /** Set a short summary to use in search engine metadata. */
  seoDescription: InputMaybe<RichTextValueInput>;
  /** Set a headline to use in search engine metadata. */
  seoHeadline: InputMaybe<Scalars['String']>;
  /** Create an [`EntryImage`](/docs/reference/object/EntryImage.html) to use in search engine metadata. */
  seoImage: InputMaybe<EntryImageCreateInput>;
  /** Whether a `<meta name="robots" content="nofollow">` tag should be included when rendering on the web. */
  shouldUseHTMLNofollow: InputMaybe<Scalars['Boolean']>;
  /** Whether a `<meta name="robots" content="noindex">` tag should be included when rendering on the web. */
  shouldUseHTMLNoindex: InputMaybe<Scalars['Boolean']>;
  /** Set a short summary to use in social metadata. */
  socialDescription: InputMaybe<RichTextValueInput>;
  /** Set a headline to use in social metadata. */
  socialHeadline: InputMaybe<Scalars['String']>;
  /** Create an [`EntryImage`](/docs/reference/object/EntryImage.html) to use in social metadata. */
  socialImage: InputMaybe<EntryImageCreateInput>;
  /** Set the main headline. */
  title: Scalars['String'];
};

/** Returned when the `createEntry` mutation completed successfully. */
export type EntryCreateResult = {
  __typename?: 'EntryCreateResult';
  /** The Entry that was created. */
  entry: Entry;
};

/** Either set or change a custom field toggle. */
export type EntryCustomFieldFlagInput = {
  /** The name of the custom field toggle to set or change. */
  key: Scalars['String'];
  /** The value to set the custom field toggle to. */
  value: Scalars['Boolean'];
};

/** Either set or change a custom field text. */
export type EntryCustomFieldTextInput = {
  /** The name of the custom field text to set or change. */
  key: Scalars['String'];
  /** The value to set or change the custom field text to. */
  value: Scalars['String'];
};

/** Provides a single page of an `Entry.customPages` array. */
export type EntryCustomPage = {
  __typename?: 'EntryCustomPage';
  /**
   * An internal key used to find this record in csk-service.
   * A reference formatted as `{BuildUUID}/{slug}`
   * @deprecated stitching use only
   */
  _key: Maybe<Scalars['ID']>;
  build: Maybe<BuildPage>;
  /** A list of component media elements for this story page. */
  components: Array<EntryCustomPageComponent>;
  /** The line of text the headline. */
  dek: Maybe<RichText>;
  /** A featured image for the page. */
  leadImage: Maybe<EntryImage>;
  /** A dedicated description for use in [NewsArticle](https://schema.org/NewsArticle) schema (placing it in search engine results and the Google AMP carousel). */
  seoDescription: Maybe<RichText>;
  /** A dedicated headline for use in [NewsArticle](https://schema.org/NewsArticle) schema (placing it in search engine results and the Google AMP carousel). */
  seoHeadline: Maybe<Scalars['String']>;
  /** A dedicated image for use in [NewsArticle](https://schema.org/NewsArticle) schema (placing it in search engine results and the Google AMP carousel). */
  seoImage: Maybe<EntryImage>;
  /** The editorially-managed path portion of this pages's URL. */
  slug: Maybe<Scalars['String']>;
  /** A social description that appears on the story’s Twitter and Facebook cards. */
  socialDescription: Maybe<RichText>;
  /** A social headline that appears on the story’s Twitter and Facebook cards. */
  socialHeadline: Maybe<Scalars['String']>;
  /** A dedicated image for use in social sharing contexts, such as Facebook and Twitter meta images. */
  socialImage: Maybe<EntryImage>;
  /** The main headline of this story page. */
  title: Scalars['String'];
};

/** Provides a segment of formatted body composition for an [`EntryCustomPage`](/docs/reference/object/EntryCustomPage). */
export type EntryCustomPageBody = EntryCustomPageComponent & {
  __typename?: 'EntryCustomPageBody';
  /** A [second-level body](/docs/reference/interface/EntryBodySecondLevelComponent) composition. */
  body: Array<EntryBodySecondLevelComponent>;
  /** A unique identifier for this component. */
  id: Scalars['ID'];
  /** A JSON object of key/value pairs mapping this component's custom properties. */
  properties: Maybe<Scalars['JSON']>;
  /** A title for this component. */
  title: Maybe<Scalars['String']>;
};

/** Represents all components that may appear in an `EntryCustomPage.components` array. */
export type EntryCustomPageComponent = {
  /** A unique identifier for this component. */
  id: Scalars['ID'];
  /** A JSON object of key/value pairs mapping this component's custom properties. */
  properties: Maybe<Scalars['JSON']>;
  /** A title for this component. */
  title: Maybe<Scalars['String']>;
};

/** Provides a custom page placement of an [`EntryEmbed`](/docs/reference/object/EntryEmbed). */
export type EntryCustomPageEmbed = EntryCustomPageComponent & {
  __typename?: 'EntryCustomPageEmbed';
  /** The [`EntryEmbed`](/docs/reference/object/EntryEmbed) object placed at this position. */
  embed: EntryEmbed;
  /** A unique identifier for this component. */
  id: Scalars['ID'];
  /** A JSON object of key/value pairs mapping this component's custom properties. */
  properties: Maybe<Scalars['JSON']>;
  /** A title for this component. */
  title: Maybe<Scalars['String']>;
};

/** Provides a custom page placement of an [`EntryImage`](/docs/reference/object/EntryImage). */
export type EntryCustomPageImage = EntryCustomPageComponent & {
  __typename?: 'EntryCustomPageImage';
  /**
   * A placement-specific warning message for sensitive content.
   * Normally overlays the image and must be clicked-through to reveal the content.
   */
  contentWarning: Maybe<Scalars['String']>;
  /** A unique identifier for this component. */
  id: Scalars['ID'];
  /** The [`EntryImage`](/docs/reference/object/EntryImage) object placed at this position. */
  image: EntryImage;
  /** A JSON object of key/value pairs mapping this component's custom properties. */
  properties: Maybe<Scalars['JSON']>;
  /** A title for this component. */
  title: Maybe<Scalars['String']>;
};

/** Provides a custom page placement of an [`EntryVideo`](/docs/reference/object/EntryVideo.html). */
export type EntryCustomPageVideo = EntryCustomPageComponent & {
  __typename?: 'EntryCustomPageVideo';
  /** A caption for this component */
  caption: Maybe<RichText>;
  /**
   * A placement-specific warning message for sensitive content.
   * Normally overlays the image and must be clicked-through to reveal the content.
   */
  contentWarning: Maybe<Scalars['String']>;
  /** A unique identifier for this component. */
  id: Scalars['ID'];
  /** A JSON object of key/value pairs mapping this component's custom properties. */
  properties: Maybe<Scalars['JSON']>;
  /** A title for this component. */
  title: Maybe<Scalars['String']>;
  /** The [`EntryVideo`](/docs/reference/object/EntryVideo) object placed at this position. */
  video: Maybe<EntryVideo>;
};

/**
 * The internal draft of an upcoming [`Entry`](/docs/reference/object/Entry),
 * or the working copy of a published Entry that may contain unreleased changes.
 * An EntryDraft represents a unit of content throughout its entire lifecycle:
 * from the time an author starts a new story, through its first publish,
 * and on to any subsequent updates.
 */
export type EntryDraft = EntryRevision & {
  __typename?: 'EntryDraft';
  /** The freeform text field that an editor can use to specify people who worked on the story, e.g. `"Photos by Bill Cunningham"`. */
  additionalContributors: Maybe<RichText>;
  /** Indicates that clients should not rewrite e-commerce links for affiliate revenue purposes (default `false`). */
  affiliateLinkRewritingDisabled: Scalars['Boolean'];
  /** The primary author of this entry. */
  author: User;
  /**
   * The primary author ID of this entry.
   * @deprecated use author.id
   */
  authorId: Scalars['Int'];
  /** A promotional tweet to be dispatched by the author's Twitter account upon publish. */
  authorTweet: Maybe<EntryTweet>;
  /** The full body content of this entry. */
  body: EntryBody;
  /** References to Building records in Hermano. */
  buildingIds: Array<Scalars['Int']>;
  buildings: Maybe<Array<Maybe<Building>>>;
  /** A collection of campaign-related groups that this draft belongs to. */
  campaignGroups: Array<Maybe<EntryGroup>>;
  /** Specifies a custom URL to override this entry's canonical URL meta field. Useful for republishing offsite content. */
  canonicalUrlOverride: Maybe<Scalars['URL']>;
  /** The community that this entry belongs to. */
  community: Community;
  /** A collection of community-level groups that this belongs to, including its `primaryCommunityGroup`. */
  communityGroups: Array<Maybe<EntryGroup>>;
  /**
   * The community ID that this entry belongs to.
   * @deprecated use community.id
   */
  communityId: Scalars['Int'];
  /** A promotional tweet to be dispatched by the parent community's Twitter account upon publish. */
  communityTweet: Maybe<EntryTweet>;
  /**
   * A list of contributor IDs for this entry, not including the primary author.
   * @deprecated use contributors.id
   */
  contributorIds: Array<Scalars['Int']>;
  /** A list of contributors for this entry, not including the primary author. */
  contributors: Maybe<Array<User>>;
  /** The date this entry was created. */
  createdAt: Maybe<Scalars['DateTime']>;
  /** Custom flag field by key for this entry. */
  customFieldFlag: Maybe<Scalars['Boolean']>;
  /** Custom text field by key for this entry. */
  customFieldText: Maybe<Scalars['String']>;
  /** Provides a list of all custom pages for this entry. Only available on entries of type [`CUSTOM_STORY`](/docs/reference/enum/EntryType.html#custom-story). */
  customPages: Maybe<Array<EntryCustomPage>>;
  /** The line of text immediately below the headline on the entry page. */
  dek: Maybe<RichText>;
  /** A URL to edit this entry draft in the story editor. */
  editUrl: Scalars['URL'];
  /**
   * The editorial status of this draft.
   * Reflects editorial workflow decisions such as review and approval prior to the draft's initial publish.
   * Once published, this status will always be `APPROVED`.
   */
  editorialStatus: EntryDraftEditorialStatus;
  /**
   * A published [`Entry`](/docs/reference/object/Entry) associated with this draft.
   * A draft without an entry has never been published.
   * The draft will retain this association even when its published entry is hidden.
   */
  entry: Maybe<Entry>;
  /** A list of external associations for this entry formatted as `"{service}:{identifier}"`, e.g.: `"associatedpress:12345"`. */
  externalIds: Array<Scalars['ID']>;
  /** Whether there are affiliate links in the entry body. Should return true if there are hard-coded links, even if the entry's `affiliateLinkRewritingDisabled` is `true`. */
  hasAffiliateLinks: Maybe<Scalars['Boolean']>;
  /** Specifies if this entry is hidden from AMP. */
  hideFromAmp: Scalars['Boolean'];
  /**
   * The internal id of this record in SBN.
   * @deprecated use a ContentAPI uuid identifier
   */
  id: Scalars['Int'];
  /** Specifies if this draft is embargoed. An entry may not be published until its embargo is lifted. */
  isEmbargoed: Scalars['Boolean'];
  /** Specifies if this entry has been paywalled. */
  isPaywalled: Scalars['Boolean'];
  /** Specifies if this entry is restricted by regional privacy laws (GDPR). */
  isRestrictedInPrivacyConsentRegion: Scalars['Boolean'];
  /** Specifies the layout template to use for a revision */
  layoutTemplate: Maybe<EntryLayoutTemplate>;
  /** @deprecated use leadComponent */
  leadArt: Maybe<EntryLeadArt>;
  /** One of several possible featured media types for this entry, including an image, a gallery of images, a third-party embed, or a video. This featured media is typically rendered at the top of the story, sometimes in a typographical lockup with the headline. When blank, this entry omits the featured media slot. */
  leadComponent: Maybe<EntryLeadComponent>;
  /** Similar to [`Entry.leadComponent`](#leadComponent-EntryLeadComponent), but only provides an image selection. This is useful when [assessing fallbacks](/docs/guides/using-entry-images#selecting-entry-meta-images) for other meta images such as `socialImage` or `seoImage`. */
  leadImage: Maybe<EntryImage>;
  /** Legacy database ID, used internally for analytics. */
  legacyId: Maybe<Scalars['Int']>;
  /** The link set associated with this entry. */
  linkSet: Maybe<LinkSet>;
  /**
   * The link set ID associated with this entry.
   * @deprecated use linkSet.id
   */
  linkSetId: Maybe<Scalars['Int']>;
  /** End time for live coverage. */
  liveCoverageEnd: Maybe<Scalars['DateTime']>;
  /** References to LiveCoverageEvent records in Hermano. */
  liveCoverageEventIds: Array<Scalars['Int']>;
  liveCoverageEvents: Maybe<Array<Maybe<LiveCoverageEvent>>>;
  /** Start time for live coverage. */
  liveCoverageStart: Maybe<Scalars['DateTime']>;
  /** Provides a list of interactive map points for this entry. Only available on entires of type [`MAP_STACK`](/docs/reference/enum/EntryType#map-stack). */
  mapCards: Maybe<Array<MapCard>>;
  /** References to MmaEvent records in Hermano. */
  mmaEventIds: Array<Scalars['Int']>;
  mmaEvents: Maybe<Array<Maybe<MmaEvent>>>;
  /** References to MmaFight records in Hermano. */
  mmaFightIds: Array<Scalars['Int']>;
  /** References to MmaFighter records in Hermano. */
  mmaFighterIds: Array<Scalars['Int']>;
  mmaFighters: Maybe<Array<Maybe<MmaFighter>>>;
  mmaFights: Maybe<Array<Maybe<MmaFight>>>;
  /** References to MmaPromotion records in Hermano. */
  mmaPromotionIds: Array<Scalars['Int']>;
  mmaPromotions: Maybe<Array<Maybe<MmaPromotion>>>;
  /** References to MmaWeightClass records in Hermano. */
  mmaWeightClassIds: Array<Scalars['Int']>;
  mmaWeightClasses: Maybe<Array<Maybe<MmaWeightClass>>>;
  /** References to Neighborhood records in Hermano. */
  neighborhoodIds: Array<Scalars['Int']>;
  neighborhoods: Maybe<Array<Maybe<Neighborhood>>>;
  /** A collection of network-level groups that this draft belongs to, including its `primaryNetworkGroup`. */
  networkGroups: Array<Maybe<EntryGroup>>;
  /** The package this entry or draft belongs to. */
  package: Maybe<EntryRevision>;
  /** The package landing page's cover. Will be `null` if EntryType is not a Package. */
  packageCover: Maybe<EntryPackageCover>;
  /** The package landing page's logo to display for all member entries. Will be `null` if EntryType is not a Package. */
  packageLogo: Maybe<EntryImage>;
  /** The package landing page's ordered table of contents containing all its member stories. Will be `null` if EntryType is not a Package. */
  packageToc: Maybe<EntryPackageToc>;
  /** A password needed to view this Entry publicly */
  password: Maybe<Scalars['String']>;
  /** The editorially-managed SEO path segment of the URL. */
  permalink: Scalars['String'];
  places: Maybe<Array<Maybe<Place>>>;
  /** The primary network-level campaign group of this entry, to be sorted first in a list of groupings. */
  primaryCampaignGroup: Maybe<EntryGroup>;
  /** The primary community-level group of this entry, to be sorted first in a list of groupings. */
  primaryCommunityGroup: Maybe<EntryGroup>;
  /**
   * The primary community-level group ID of this entry.
   * @deprecated use primaryCommunityGroup.id
   */
  primaryCommunityGroupId: Maybe<Scalars['Int']>;
  /** The primary network-level group of this entry, to be sorted first in a list of groupings. */
  primaryNetworkGroup: Maybe<EntryGroup>;
  /**
   * The primary network-level group ID of this entry.
   * @deprecated use primaryNetworkGroup.id
   */
  primaryNetworkGroupId: Maybe<Scalars['Int']>;
  /** Corresponds with the date an entry will run in print */
  printPublicationDate: Maybe<Scalars['Date']>;
  /** A slug to identify this entry if it is sent to print. */
  printSlug: Maybe<Scalars['String']>;
  /** References to ProductBrand records in Hermano. */
  productBrandIds: Array<Scalars['Int']>;
  productBrands: Maybe<Array<Maybe<ProductBrand>>>;
  productCategories: Maybe<Array<Maybe<ProductCategory>>>;
  /** References to ProductCategory records in Hermano. */
  productCategoryIds: Array<Scalars['Int']>;
  /** References to Product records in Hermano. */
  productIds: Array<Scalars['Int']>;
  products: Maybe<Array<Maybe<Product>>>;
  /** A dedicated description for use in promotional contexts, such as hub pages, archives, syndicated feeds, etc., separate from the promotional headline. */
  promoDescription: Maybe<RichText>;
  /** A dedicated headline for use in promotional contexts, such as hub pages, archives, and syndicated feeds. */
  promoHeadline: Maybe<Scalars['String']>;
  /** A dedicated image for use in promotional contexts, such as hub pages, archives, and syndicated feeds. */
  promoImage: Maybe<EntryImage>;
  /**
   * The publish status of this draft.
   * Reflects publish/unpublish decisions such as scheduling, expiration, deletion, etc.
   */
  publishStatus: EntryDraftPublishStatus;
  /** An object that is the attachment for quick entries */
  quickAttachment: Maybe<EntryQuickAttachment>;
  /**
   * The date and time that this entry draft is scheduled to be published.
   * Changes may continue being made to the working draft leading up to this publication date.
   */
  scheduledForPublishAt: Maybe<Scalars['DateTime']>;
  /** A dedicated description for use in [NewsArticle](https://schema.org/NewsArticle) schema, placing it in search engine results and the Google AMP carousel. */
  seoDescription: Maybe<RichText>;
  /** A dedicated headline for use in [NewsArticle](https://schema.org/NewsArticle) schema, placing it in search engine results and the Google AMP carousel. */
  seoHeadline: Maybe<Scalars['String']>;
  /** A dedicated image for use in [NewsArticle](https://schema.org/NewsArticle) schema, placing it in search engine results and the Google AMP carousel. */
  seoImage: Maybe<EntryImage>;
  /** The SEO schema data for an entry that may include one, some or all of the following schemas: [NewsArticle](https://schema.org/NewsArticle), [Review](https://schema.org/Review), [Product](https://schema.org/Product), [ItemList](https://schema.org/ItemList), [VideoObject](https://schema.org/VideoObject) and [LiveBlogPosting](https://schema.org/LiveBlogPosting). */
  seoSchema: Maybe<Array<Scalars['JSON']>>;
  /** References to ShoppingDeal records in Hermano. */
  shoppingDealIds: Array<Scalars['Int']>;
  shoppingDeals: Maybe<Array<Maybe<ShoppingDeal>>>;
  /** A short link for the Entry in the format [domain]/e/[entry_id], which redirects to the Entry's canonical URL. */
  shortLink: Scalars['URL'];
  /** Specifies if this entry should be excluded from feeds and sitemaps. */
  shouldNotDistribute: Scalars['Boolean'];
  /** When displaying on the web, include "nofollow" in the `<meta name="robots">` HTML tag value. */
  shouldUseHTMLNofollow: Scalars['Boolean'];
  /** When displaying on the web, include "noindex" in the `<meta name="robots">` HTML tag value. */
  shouldUseHTMLNoindex: Scalars['Boolean'];
  /** The full URL path of this entry, including categorical prefixes and the permalink. */
  slug: Scalars['String'];
  /** A dedicated description for use in social sharing contexts, such as Facebook and Twitter meta tags. */
  socialDescription: Maybe<RichText>;
  /** A dedicated headling for use in social sharing contexts, such as Facebook and Twitter meta tags. */
  socialHeadline: Maybe<Scalars['String']>;
  /** A dedicated image for use in social sharing contexts, such as Facebook and Twitter meta images. */
  socialImage: Maybe<EntryImage>;
  /** References to SportEvent records in Hermano. */
  sportEventIds: Array<Scalars['Int']>;
  sportEvents: Maybe<Array<Maybe<SportEvent>>>;
  /** References to SportPlayer records in Hermano. */
  sportPlayerIds: Array<Scalars['Int']>;
  sportPlayers: Maybe<Array<Maybe<SportPlayer>>>;
  /** References to SportTeam records in Hermano. */
  sportTeamIds: Array<Scalars['Int']>;
  sportTeams: Maybe<Array<Maybe<SportTeam>>>;
  /** Provides scoped access to entries belonging to this stream. Only available on entires of type [`STREAM`](/docs/reference/enum/EntryType#stream). */
  stream: Maybe<EntryStream>;
  /** All entries of type `STREAM` that this entry belongs to. */
  streams: Maybe<Array<Maybe<Entry>>>;
  /** The custom css added in story editor. */
  styles: Maybe<Scalars['String']>;
  /** The teaser text for this entry. (INTERNAL - only used by The Verge) */
  teaser: Maybe<RichText>;
  ticketEvents: Maybe<Array<Maybe<TicketEvent>>>;
  /** The main headline of this Entry. */
  title: Scalars['String'];
  /** The date when this entry was marked for deletion. */
  trashedAt: Maybe<Scalars['DateTime']>;
  /** The type of this entry based on editorial features that it incorporates. An entry's type generally influences the content layout that presents it. */
  type: EntryType;
  /** The unique idenfifier for this entry record. */
  uid: Scalars['ID'];
  /** When this entry was last changed. May be more recent than when it was last published. */
  updatedAt: Maybe<Scalars['DateTime']>;
  /** The relative path of the entry. (Empty for EntryDraft) */
  urlPath: Scalars['String'];
  /** The internal id of this record in Content-API. */
  uuid: Scalars['String'];
  /** References to Venue records in Hermano. */
  venueIds: Array<Scalars['Int']>;
  venues: Maybe<Array<Maybe<Venue>>>;
  /** A version number that increments each time this entry is modified. Useful for building cache keys. */
  version: Scalars['Int'];
  /** References to VideoGameFranchise records in Hermano. */
  videoGameFranchiseIds: Array<Scalars['Int']>;
  videoGameFranchises: Maybe<Array<Maybe<VideoGameFranchise>>>;
  /** References to VideoGame records in Hermano. */
  videoGameIds: Array<Scalars['Int']>;
  /** References to VideoGamePlatform records in Hermano. */
  videoGamePlatformIds: Array<Scalars['Int']>;
  videoGamePlatforms: Maybe<Array<Maybe<VideoGamePlatform>>>;
  videoGames: Maybe<Array<Maybe<VideoGame>>>;
  /** References to networks returned by the visibleNetworks field. */
  visibleNetworkIds: Array<Scalars['Int']>;
  /** The word count of the body text excluding em dashes `–`, hyphens `-` and asterisks `*`. Used for analytics. */
  wordCount: Scalars['Int'];
};


/**
 * The internal draft of an upcoming [`Entry`](/docs/reference/object/Entry),
 * or the working copy of a published Entry that may contain unreleased changes.
 * An EntryDraft represents a unit of content throughout its entire lifecycle:
 * from the time an author starts a new story, through its first publish,
 * and on to any subsequent updates.
 */
export type EntryDraftCustomFieldFlagArgs = {
  key: Scalars['String'];
};


/**
 * The internal draft of an upcoming [`Entry`](/docs/reference/object/Entry),
 * or the working copy of a published Entry that may contain unreleased changes.
 * An EntryDraft represents a unit of content throughout its entire lifecycle:
 * from the time an author starts a new story, through its first publish,
 * and on to any subsequent updates.
 */
export type EntryDraftCustomFieldTextArgs = {
  key: Scalars['String'];
};

/**
 * Input used to create a new [`EntryDraft`](/docs/reference/object/EntryDraft).
 * The requested changes will be immediately published.
 */
export type EntryDraftCreateInput = {
  /** Set a formatted text string to use in the byline in addition to `author` and `contributors`. */
  additionalContributors: InputMaybe<RichTextValueInput>;
  /** Associate a [`User`](/docs/reference/object/User) as the primary author. */
  author: UserUniqueKeyInput;
  /** Create body contents. */
  body: InputMaybe<EntryBodyCreateInput>;
  /** Whether comments should be closed when rendering on the web */
  commentsClosed: InputMaybe<Scalars['Boolean']>;
  /**
   * Which [`Community`](/docs/reference/object/Community) this [`EntryDraft`](/docs/reference/object/EntryDraft) will belong to.
   * Cannot be changed after the [`EntryDraft`](/docs/reference/object/EntryDraft) is created.
   */
  community: CommunityUniqueKeyInput;
  /** Associate with one or more [`Community`](/docs/reference/object/Community)-scoped [`EntryGroup`](/docs/reference/object/EntryGroup)s. */
  communityGroupMemberships: InputMaybe<Array<EntryGroupMembershipInput>>;
  /** Associate with one or more [`User`](/docs/reference/object/User)s as secondary contributors. */
  contributors: InputMaybe<Array<UserUniqueKeyInput>>;
  /** A list of custom toggle fields to set by name */
  customFieldFlags: InputMaybe<Array<EntryCustomFieldFlagInput>>;
  /** A list of custom text fields to set by name */
  customFieldTexts: InputMaybe<Array<EntryCustomFieldTextInput>>;
  /** A subheadline that appears beneath the main headline on the entry page. */
  dek: InputMaybe<RichTextValueInput>;
  /**
   * Assign one or more IDs supplied by an external system. Each ID must take the form of `{namespace}:{id}`.
   * The `{namespace}` and `{id}` segments may only contain ASCII alphanumeric characters, dashes, and underscores (`[a-zA-Z0-9_-]`).
   */
  externalIds: InputMaybe<Array<Scalars['ID']>>;
  /** Specifies the layout template to use for a revision. */
  layoutTemplate: InputMaybe<EntryLayoutTemplate>;
  /** Create an [`EntryImage`](/docs/reference/object/EntryImage) to use in the lead position. */
  leadImage: InputMaybe<EntryImageCreateInput>;
  /** Associate with one or more [`Network`](/docs/reference/object/Network)-scoped [`EntryGroup`](/docs/reference/object/EntryGroup)s. */
  networkGroupMemberships: InputMaybe<Array<EntryGroupMembershipInput>>;
  /** Set the SEO keywords segment of the [`EntryDraft`](/docs/reference/object/EntryDraft) URL. */
  permalink: InputMaybe<Scalars['String']>;
  /**
   * Set the primary [`Community`](/docs/reference/object/Community)-scoped [`EntryGroup`](/docs/reference/object/EntryGroup).
   * This [`EntryGroup`](/docs/reference/object/EntryGroup) will be implicitly added to the `communityGroups` collection if needed.
   */
  primaryCommunityGroup: InputMaybe<EntryGroupUniqueKeyInput>;
  /**
   * Set the primary [`Network`](/docs/reference/object/Network)-scoped [`EntryGroup`](/docs/reference/object/EntryGroup).
   * This [`EntryGroup`](/docs/reference/object/EntryGroup) will be implicitly added to the `networkGroups` collection if needed.
   */
  primaryNetworkGroup: InputMaybe<EntryGroupUniqueKeyInput>;
  /** Set a date for when an entry article will run to print. */
  printPublicationDate: InputMaybe<Scalars['Date']>;
  /** Set a slug used to identify this entry if it is sent to print. */
  printSlug: InputMaybe<Scalars['String']>;
  /** Set a short summary to use in promotional contexts within Chorus. */
  promoDescription: InputMaybe<RichTextValueInput>;
  /** Set a headline to use in promotional contexts within Chorus. */
  promoHeadline: InputMaybe<Scalars['String']>;
  /** Create an [`EntryImage`](/docs/reference/object/EntryImage) to use for promotional contexts within Chorus. */
  promoImage: InputMaybe<EntryImageCreateInput>;
  /** Set a date when the Entry will become hidden once published. */
  scheduledForExpirationAt: InputMaybe<Scalars['DateTime']>;
  /**
   * Set a date when the Entry will be automatically published.
   * This date will become the `publishDate` of the resulting Entry.
   */
  scheduledForPublishAt: InputMaybe<Scalars['DateTime']>;
  /** Set a short summary to use in search engine metadata. */
  seoDescription: InputMaybe<RichTextValueInput>;
  /** Set a headline to use in search engine metadata. */
  seoHeadline: InputMaybe<Scalars['String']>;
  /** Create an [`EntryImage`](/docs/reference/object/EntryImage) to use in search engine metadata. */
  seoImage: InputMaybe<EntryImageCreateInput>;
  /** Whether a `<meta name="robots" content="nofollow">` tag should be included when rendering on the web. */
  shouldUseHTMLNofollow: InputMaybe<Scalars['Boolean']>;
  /** Whether a `<meta name="robots" content="noindex">` tag should be included when rendering on the web. */
  shouldUseHTMLNoindex: InputMaybe<Scalars['Boolean']>;
  /** Set a short summary to use in social metadata. */
  socialDescription: InputMaybe<RichTextValueInput>;
  /** Set a headline to use in social metadata. */
  socialHeadline: InputMaybe<Scalars['String']>;
  /** Create an [`EntryImage`](/docs/reference/object/EntryImage) to use in social metadata. */
  socialImage: InputMaybe<EntryImageCreateInput>;
  /** Set the main headline. */
  title: Scalars['String'];
};

/** Returned when the `createEntryDraft` mutation completed successfully. */
export type EntryDraftCreateResult = {
  __typename?: 'EntryDraftCreateResult';
  /** The EntryDraft that was created. */
  entryDraft: EntryDraft;
};

/** Specifies possible editorial workflow states of an [`EntryDraft`](/docs/reference/object/EntryDraft/). */
export enum EntryDraftEditorialStatus {
  /** The draft has been approved by an editor. */
  Approved = 'APPROVED',
  /** The draft is in progress and has not yet been submitted to an editor. */
  Draft = 'DRAFT',
  /** The draft has been submitted for approval by an editor. */
  Submitted = 'SUBMITTED'
}

export type EntryDraftEventSubjectInput = {
  authorUid: Scalars['ID'];
  communityUid: Scalars['ID'];
  contributorUids: Array<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  linkSetUid: InputMaybe<Scalars['ID']>;
  networkUid: Scalars['ID'];
  organizationUid: Scalars['ID'];
  permalink: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  uid: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  version: Scalars['Int'];
};

/** Input used when publishing an [`EntryDraft`](/docs/reference/object/EntryDraft). */
export type EntryDraftPublishInput = {
  /**
   * Choose a date that should appear as the timestamp on the published Entry.
   * Optional, defaults to the current time if not previously published.
   * Otherwise the publishDate is unchanged.
   */
  publishDate: InputMaybe<Scalars['DateTime']>;
};

/** Returned when the `publishEntryDraft` mutation completed successfully. */
export type EntryDraftPublishResult = {
  __typename?: 'EntryDraftPublishResult';
  /** The resulting published Entry */
  entry: Maybe<Entry>;
  /** The EntryDraft that was published */
  entryDraft: Maybe<EntryDraft>;
};

/** Specifies possible publish/unpublish states of an [`EntryDraft`](/docs/reference/object/EntryDraft/). */
export enum EntryDraftPublishStatus {
  /** The draft has been created, but never published. */
  Draft = 'DRAFT',
  /** The draft's associated Entry has been unpublished due to a content expiration rule (e.g., a wire licensing agreement). */
  Expired = 'EXPIRED',
  /** The draft's associated Entry has been unpublished. */
  Hidden = 'HIDDEN',
  /** The draft has been published. Its Entry is publicly visible. */
  Published = 'PUBLISHED',
  /** The draft has been created and is scheduled for a future publish. */
  Scheduled = 'SCHEDULED',
  /** The draft's associated Entry has been unpublished. A trashed `EntryDraft` and its `Entry` will be destroyed permanently after 30 days. */
  Trashed = 'TRASHED'
}

export type EntryDraftSentToPrintEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: EntryDraftEventSubjectInput;
};

/**
 * Identify an existing [`EntryDraft`](/docs/reference/object/EntryDraft) by a unique key.
 * Exactly one field must be specified.
 */
export type EntryDraftUniqueKeyInput = {
  /** An identifier provided by an external system. */
  externalId: InputMaybe<Scalars['ID']>;
  /** An internal numeric identifier. */
  id: InputMaybe<Scalars['Int']>;
  /** A unique identifier set by Chorus. */
  uid: InputMaybe<Scalars['ID']>;
  /** An internal string identifier that conforms to RFC 4122. */
  uuid: InputMaybe<Scalars['String']>;
};

/**
 * Input used to update an existing [`EntryDraft`](/docs/reference/object/EntryDraft).
 * The requested changes will be immediately published.
 */
export type EntryDraftUpdateInput = {
  /** Change or set a formatted text string to use in the byline in addition to `author` and `contributors`. */
  additionalContributors: InputMaybe<RichTextInput>;
  /** Set a different [`User`](/docs/reference/object/User) as the primary author. */
  author: InputMaybe<UserUniqueKeyInput>;
  /** Update the body contents. */
  body: InputMaybe<EntryBodyUpdateInput>;
  /** Whether comments should be closed when rendering on the web */
  commentsClosed: InputMaybe<Scalars['Boolean']>;
  /** Modify associations with [`Community`](/docs/reference/object/Community)-scoped [`EntryGroup`](/docs/reference/object/EntryGroup)s. */
  communityGroupMemberships: InputMaybe<EntryGroupMembershipCollectionInput>;
  /** Modify the list of [`User`](/docs/reference/object/User)s associated as secondary contributors. */
  contributors: InputMaybe<EntryUserAssociationListInput>;
  /** A list of custom toggle fields to change by name */
  customFieldFlags: InputMaybe<Array<EntryCustomFieldFlagInput>>;
  /** A list of custom text fields to change by name */
  customFieldTexts: InputMaybe<Array<EntryCustomFieldTextInput>>;
  /** Change or set the subheadline which appears beneath the main headline on the entry page. */
  dek: InputMaybe<RichTextInput>;
  /**
   * Replace any currently set externally-supplied IDs with the input. Each ID take the form of `{namespace}:{id}`,
   * The `{namespace}` and `{id}` segments may only contain ASCII alphanumeric characters, dashes, and underscores (`[a-zA-Z0-9_-]`).
   */
  externalIds: InputMaybe<ExternalIdCollectionInput>;
  /** Specifies the layout template to use for a revision. */
  layoutTemplate: InputMaybe<EntryLayoutTemplate>;
  /** Create or modify the [`EntryImage`](/docs/reference/object/EntryImage) to use in the lead position. */
  leadImage: InputMaybe<EntryImageInput>;
  /** Modify associations with [`Network`](/docs/reference/object/Network)-scoped [`EntryGroup`](/docs/reference/object/EntryGroup)s. */
  networkGroupMemberships: InputMaybe<EntryGroupMembershipCollectionInput>;
  /** Change the SEO keywords segment of the [`Entry`](/docs/reference/object/Entry) URL. */
  permalink: InputMaybe<PlainTextInput>;
  /**
   * Change the primary [`Community`](/docs/reference/object/Community)-scoped [`EntryGroup`](/docs/reference/object/EntryGroup).
   * This [`EntryGroup`](/docs/reference/object/EntryGroup) will be implicitly added to the `communityGroups` collection if needed.
   */
  primaryCommunityGroup: InputMaybe<EntryGroupUniqueKeyInput>;
  /**
   * Change the primary [`Network`](/docs/reference/object/Network)-scoped [`EntryGroup`](/docs/reference/object/EntryGroup).
   * This [`EntryGroup`](/docs/reference/object/EntryGroup) will be implicitly added to the `networkGroups` collection if needed.
   */
  primaryNetworkGroup: InputMaybe<EntryGroupUniqueKeyInput>;
  /** Set a date for when an entry article will run to print. */
  printPublicationDate: InputMaybe<Scalars['Date']>;
  /** Set a slug used to identify this entry if it is sent to print. */
  printSlug: InputMaybe<PlainTextInput>;
  /** Change or set a short summary to use in promotional contexts within Chorus. */
  promoDescription: InputMaybe<RichTextInput>;
  /** Change or set a headline to use in promotional contexts within Chorus. */
  promoHeadline: InputMaybe<PlainTextInput>;
  /** Change or create an [`EntryImage`](/docs/reference/object/EntryImage) to use in promotional contexts within Chorus. */
  promoImage: InputMaybe<EntryImageInput>;
  /** Set a date when the Entry will become hidden once published. */
  scheduledForExpirationAt: InputMaybe<Scalars['DateTime']>;
  /**
   * Set a date when the Entry will be automatically published.
   * This date will become the `publishDate` of the resulting Entry.
   * Previously published entries may not be scheduled to republish; attempting to use this input will throw an error unless `publishStatus = DRAFT`.
   */
  scheduledForPublishAt: InputMaybe<Scalars['DateTime']>;
  /** Change or set a short summary to use in search engine metadata. */
  seoDescription: InputMaybe<RichTextInput>;
  /** Change or set a headline to use in search engine metadata. */
  seoHeadline: InputMaybe<PlainTextInput>;
  /** Change or create an `EntryImage` to use in search engine metadata. */
  seoImage: InputMaybe<EntryImageInput>;
  /** Whether a `<meta name="robots" content="nofollow">` tag should be included when rendering on the web. */
  shouldUseHTMLNofollow: InputMaybe<Scalars['Boolean']>;
  /** Whether a `<meta name="robots" content="noindex">` tag should be included when rendering on the web. */
  shouldUseHTMLNoindex: InputMaybe<Scalars['Boolean']>;
  /** Change or set a short summary to use in social metadata. */
  socialDescription: InputMaybe<RichTextInput>;
  /** Change or set a short summary to use in social metadata. */
  socialHeadline: InputMaybe<PlainTextInput>;
  /** Change or create an `EntryImage` object to use in social metadata. */
  socialImage: InputMaybe<EntryImageInput>;
  /** Modify the main headline. */
  title: InputMaybe<PlainTextInput>;
};

/** Returned when the `updateEntryDraft` mutation completed successfully. */
export type EntryDraftUpdateResult = {
  __typename?: 'EntryDraftUpdateResult';
  /** The EntryDraft that was updated. */
  entryDraft: EntryDraft;
};

/** Input used to either create or update an [`EntryDraft`](/docs/reference/object/EntryDraft) matching an `externalId`. */
export type EntryDraftUpsertByExternalIdInput = {
  /** Input used to create a new [`EntryDraft`](/docs/reference/object/EntryDraft). */
  create: EntryDraftCreateInput;
  /**
   * Used to either look up an existing [`EntryDraft`](/docs/reference/object/EntryDraft),
   * or else create a new EntryDraft if one was not found.
   * In the latter case, this ID will be automatically associated with the new record.
   */
  externalId: Scalars['ID'];
  /** Input used to update an existing [`EntryDraft`](/docs/reference/object/EntryDraft). */
  update: InputMaybe<EntryDraftUpdateInput>;
};

/** Returned when the `upsertEntryDraftByExternalId` mutation completed successfully. */
export type EntryDraftUpsertByExternalIdResult = {
  __typename?: 'EntryDraftUpsertByExternalIdResult';
  /** The EntryDraft that was either created or updated. */
  entryDraft: EntryDraft;
  /** Whether the entry draft was created (true) or updated (false). */
  isNew: Scalars['Boolean'];
};

/** Entry edge in a connection */
export type EntryEdge = {
  __typename?: 'EntryEdge';
  /** A Cursor used in pagination. */
  cursor: Scalars['String'];
  /** Entry at the end of the edge. */
  node: Entry;
};

/** Provides embed markup and metadata for third-party elements such as Tweets, YouTube videos, Instagram widgets, etc. */
export type EntryEmbed = {
  __typename?: 'EntryEmbed';
  /** The original author of this content. */
  author: EntryEmbedSource;
  /** A third-party HTML snippet used to install the embedded object. */
  embedHtml: Scalars['String'];
  /** The platform or service distributing this content. */
  provider: EntryEmbedSource;
  /** The original URL of this embedded content. */
  url: Scalars['URL'];
};

/** Specify the data needed to create an [`EntryEmbed`](/docs/reference/object/EntryEmbed.html). */
export type EntryEmbedInput = {
  /**
   * The original URL of the content to create an embed for.
   * This URL will be used to automatically derive the associated embed markup and other metadata.
   */
  url: Scalars['URL'];
};

/** Represents a third-party content source of an [`EntryBodyEmbed`](/docs/reference/object/EntryBodyEmbed.html). */
export type EntryEmbedSource = {
  __typename?: 'EntryEmbedSource';
  /** The name of this source. */
  name: Maybe<Scalars['String']>;
  /** A link to this source. */
  url: Maybe<Scalars['URL']>;
};

export type EntryEventSubjectInput = {
  authorUid: Scalars['ID'];
  communityUid: Scalars['ID'];
  contributorUids: Array<Scalars['ID']>;
  firstPublishedAt: InputMaybe<Scalars['DateTime']>;
  lastPublishedAt: InputMaybe<Scalars['DateTime']>;
  linkSetUid: InputMaybe<Scalars['ID']>;
  networkUid: Scalars['ID'];
  oldSlug: InputMaybe<Scalars['String']>;
  organizationUid: Scalars['ID'];
  originalPublishDate: InputMaybe<Scalars['DateTime']>;
  permalink: Scalars['String'];
  publishDate: InputMaybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  uid: Scalars['ID'];
  version: Scalars['Int'];
};

export type EntryExpiredEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: EntryEventSubjectInput;
};

/** Provides a url, title and source to link to an external page */
export type EntryExternalLink = {
  __typename?: 'EntryExternalLink';
  /** The source/attribution for the link */
  source: Maybe<Scalars['String']>;
  /** The title that will be linked */
  title: Maybe<Scalars['String']>;
  /** The URL of the link */
  url: Scalars['URL'];
};

/** Frontend configuration for an Entry. */
export type EntryFrontend = {
  __typename?: 'EntryFrontend';
  /** DFP ad unit configuration */
  adUnitSlug: Scalars['String'];
  /** Analyics data layer data destined for Chorus and Google Analytics */
  analyticsDataLayer: Maybe<Scalars['Any']>;
  /** Gives a presentation-ready version of an entry's content with optionally included assets and embeds of various kinds */
  bodyUnified: Maybe<Scalars['String']>;
  /** The entry id corresponding to this record */
  entryId: Scalars['Int'];
};


/** Frontend configuration for an Entry. */
export type EntryFrontendBodyUnifiedArgs = {
  characterLimit: InputMaybe<Scalars['Int']>;
  continueReadingLink: InputMaybe<Scalars['String']>;
  shouldIncludeAssociatedEmbeds?: InputMaybe<Scalars['Boolean']>;
  shouldIncludeInlineAssets?: InputMaybe<Scalars['Boolean']>;
  shouldIncludeIntro?: InputMaybe<Scalars['Boolean']>;
  shouldIncludeTokens?: InputMaybe<Scalars['Boolean']>;
  shouldTruncateAll?: InputMaybe<Scalars['Boolean']>;
  shouldUseAffiliateLinks?: InputMaybe<Scalars['Boolean']>;
};

/** Provides a collection of images to display in a gallery format. */
export type EntryGallery = {
  __typename?: 'EntryGallery';
  /** A list of external associations for this gallery formatted as `"{service}:{identifier}"`, e.g.: `wordpress:12345`." */
  externalIds: Array<Scalars['ID']>;
  /** A collection of [`EntryImage`](/docs/reference/object/EntryImage.html) objects to display in this gallery. */
  images: Array<EntryImage>;
  /** Recent entries that this gallery was included in. */
  recentEntries: EntryPage;
  /** The title of this gallery. */
  title: Scalars['String'];
  /** The unique idenfifier for this gallery record. */
  uid: Scalars['ID'];
  /** The internal idenfifier for this gallery record. */
  uuid: Scalars['String'];
};


/** Provides a collection of images to display in a gallery format. */
export type EntryGalleryRecentEntriesArgs = {
  pageNumber?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};

/**
 * Create a new association to an [`EntryGallery`](/docs/reference/object/EntryGallery.html).
 * Exactly one field must be specified.
 */
export type EntryGalleryAssociationCreateInput = {
  /** Associate with an existing [`EntryGallery`](/docs/reference/object/EntryGallery.html). */
  connect: InputMaybe<EntryGalleryUniqueKeyInput>;
};

/**
 * Update an existing association to an [`EntryGallery`](/docs/reference/object/EntryGallery.html).
 * Exactly one field must be specified.
 */
export type EntryGalleryAssociationUpdateInput = {
  /** Associate with a different [`EntryGallery`](/docs/reference/object/EntryGallery.html). */
  connect: InputMaybe<EntryGalleryUniqueKeyInput>;
};

/**
 * Identify an existing [`EntryGallery`](/docs/reference/object/EntryGallery.html) by a unique key.
 * Exactly one field must be specified.
 */
export type EntryGalleryUniqueKeyInput = {
  /** An identifier provided by an external system. */
  externalId: InputMaybe<Scalars['ID']>;
  /** An internal numeric identifier. */
  id: InputMaybe<Scalars['Int']>;
  /** A unique identifier set by Chorus. */
  uid: InputMaybe<Scalars['ID']>;
  /** An internal string identifier that conforms to RFC 4122. */
  uuid: InputMaybe<Scalars['String']>;
};

/**
 * [`EntryGroups`](/docs/reference/object/EntryGroup) are the primary mechanism for content categorization in Chorus.
 * An entry group can have child groups. For example, The Verge’s “Science” entry group has child groups for “Space”, “Health”, “Environment”, etc.
 */
export type EntryGroup = HubPagePlaceable & {
  __typename?: 'EntryGroup';
  /** The advertiser's url for this campaign group. `null` for other group types. */
  advertiserClickthroughUrl: Maybe<Scalars['String']>;
  /** The advertiser's associtated DFP order name for this campaign group. `null` for other group types. */
  advertiserDfpOrderName: Maybe<Scalars['String']>;
  /** The advertiser for this campaign group. `null` for other group types. */
  advertiserName: Maybe<Scalars['String']>;
  /** The preceding text to display for this campaign group's advertiser. `null` for other group types. */
  advertiserPreamble: Maybe<Scalars['String']>;
  /** The dark version of the advertiser's image for this campaign group. `null` for other group types. */
  campaignAdvertiserDarkImage: Maybe<BasicImage>;
  /** The light version of the advertiser's image for this campaign group. `null` for other group types. */
  campaignAdvertiserLightImage: Maybe<BasicImage>;
  /** The dark version of this campaign group's branding image. `null` for other group types. `null` for other group types. */
  campaignDarkImage: Maybe<BasicImage>;
  /** A branding image for this campaign group's hub page. `null` for other group types. */
  campaignHubImage: Maybe<BasicImage>;
  /** The light version of this campaign group's branding image. `null` for other group types. */
  campaignLightImage: Maybe<BasicImage>;
  /** Paginate child entry groups belonging to this entry group. */
  childEntryGroups: EntryGroupPage;
  /** The community that this entry group belongs to. `null` for network-level groups. */
  community: Maybe<Community>;
  communityId: Maybe<Scalars['Int']>;
  /** The cover image used in breakers and sidebars of this entry group. */
  coverImage: Maybe<BasicImage>;
  /** When this entry group was created. */
  createdAt: Maybe<Scalars['DateTime']>;
  /** The description of the entry group. */
  description: Maybe<Scalars['String']>;
  /** Return whether or not a value is set for the given key. */
  hasSiteConfig: Maybe<Scalars['Boolean']>;
  /** The hub page of this entry group. */
  hubPage: Maybe<HubPage>;
  hubPageId: Maybe<Scalars['Int']>;
  /** A list of placements, one for each hub page that this entry group appears on. */
  hubPagePlacements: Array<Maybe<HubPagePlacement>>;
  /** An internal identifier for this entry group. */
  id: Scalars['Int'];
  /** A branding image for this entry group. */
  image: Maybe<EntryGroupImage>;
  isDisclaimer: Scalars['Boolean'];
  isInternal: Scalars['Boolean'];
  isStarred: Scalars['Boolean'];
  /** The name of this entry group. */
  name: Maybe<Scalars['String']>;
  /** The network associated with this entry group. `null` for community-level groups. */
  network: Maybe<Network>;
  networkId: Maybe<Scalars['Int']>;
  /** This entry group's parent entry group. */
  parentEntryGroup: Maybe<EntryGroup>;
  promoHeadline: Maybe<Scalars['String']>;
  /** An array of components that may appear in the rail of a page. */
  railComponents: Array<Maybe<EntryGroupRailComponent>>;
  /** Recent entries for this entry group. For groups that have hub pages, optionally exclude placeables from the results. */
  recentEntries: EntryPage;
  redirectUrl: Maybe<Scalars['String']>;
  /** Description optimized for search engines */
  seoDescription: Maybe<Scalars['String']>;
  /** Override value to use in the `<title>` tag on this group's landing page in order to optimize appearance in search results. */
  seoTitle: Maybe<Scalars['String']>;
  shouldAutoAddSubgroupEntries: Scalars['Boolean'];
  shouldRedirect: Scalars['Boolean'];
  /** For direct site_config boolean queries, often used as aliases */
  siteConfigBoolean: Maybe<Scalars['Boolean']>;
  /** For direct site_config int queries, often used as aliases */
  siteConfigInt: Maybe<Scalars['Int']>;
  /** For direct site_config json queries, often used as aliases */
  siteConfigJson: Maybe<Scalars['JSON']>;
  /** For direct site_config string queries, often used as aliases */
  siteConfigString: Maybe<Scalars['String']>;
  /** The URL path where this entry group is available. */
  slug: Maybe<Scalars['String']>;
  /** The title logo image this entry group. */
  titleImage: Maybe<BasicImage>;
  type: Maybe<Scalars['String']>;
  /** A unique identifier for this entry group. */
  uid: Scalars['ID'];
  /** The date and time when the entry group was last updated. */
  updatedAt: Maybe<Scalars['DateTime']>;
  /** The HTTP URL of this entry group. */
  url: Scalars['URL'];
  /**
   * The relative path of this entry group. This does not include the leading `/` slash.
   * e.g. `foo/bar` for URL `example.com/foo/bar`
   */
  urlPath: Scalars['String'];
};


/**
 * [`EntryGroups`](/docs/reference/object/EntryGroup) are the primary mechanism for content categorization in Chorus.
 * An entry group can have child groups. For example, The Verge’s “Science” entry group has child groups for “Space”, “Health”, “Environment”, etc.
 */
export type EntryGroupChildEntryGroupsArgs = {
  pageNumber?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


/**
 * [`EntryGroups`](/docs/reference/object/EntryGroup) are the primary mechanism for content categorization in Chorus.
 * An entry group can have child groups. For example, The Verge’s “Science” entry group has child groups for “Space”, “Health”, “Environment”, etc.
 */
export type EntryGroupHasSiteConfigArgs = {
  key: Scalars['String'];
  type: Scalars['String'];
};


/**
 * [`EntryGroups`](/docs/reference/object/EntryGroup) are the primary mechanism for content categorization in Chorus.
 * An entry group can have child groups. For example, The Verge’s “Science” entry group has child groups for “Space”, “Health”, “Environment”, etc.
 */
export type EntryGroupRecentEntriesArgs = {
  excludePlaceables?: InputMaybe<Scalars['Boolean']>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


/**
 * [`EntryGroups`](/docs/reference/object/EntryGroup) are the primary mechanism for content categorization in Chorus.
 * An entry group can have child groups. For example, The Verge’s “Science” entry group has child groups for “Space”, “Health”, “Environment”, etc.
 */
export type EntryGroupSiteConfigBooleanArgs = {
  fallback?: InputMaybe<Scalars['Boolean']>;
  key: Scalars['String'];
};


/**
 * [`EntryGroups`](/docs/reference/object/EntryGroup) are the primary mechanism for content categorization in Chorus.
 * An entry group can have child groups. For example, The Verge’s “Science” entry group has child groups for “Space”, “Health”, “Environment”, etc.
 */
export type EntryGroupSiteConfigIntArgs = {
  fallback?: InputMaybe<Scalars['Boolean']>;
  key: Scalars['String'];
};


/**
 * [`EntryGroups`](/docs/reference/object/EntryGroup) are the primary mechanism for content categorization in Chorus.
 * An entry group can have child groups. For example, The Verge’s “Science” entry group has child groups for “Space”, “Health”, “Environment”, etc.
 */
export type EntryGroupSiteConfigJsonArgs = {
  fallback?: InputMaybe<Scalars['Boolean']>;
  key: Scalars['String'];
};


/**
 * [`EntryGroups`](/docs/reference/object/EntryGroup) are the primary mechanism for content categorization in Chorus.
 * An entry group can have child groups. For example, The Verge’s “Science” entry group has child groups for “Space”, “Health”, “Environment”, etc.
 */
export type EntryGroupSiteConfigStringArgs = {
  fallback?: InputMaybe<Scalars['Boolean']>;
  key: Scalars['String'];
};

export type EntryGroupCreatedEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: EntryGroupEventSubjectInput;
};

export type EntryGroupDestroyedEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: EntryGroupEventSubjectInput;
};

export type EntryGroupEntryAddedEventDataInput = {
  entryUid: InputMaybe<Scalars['ID']>;
  originalPublishDate: InputMaybe<Scalars['DateTime']>;
  publishDate: InputMaybe<Scalars['DateTime']>;
};

export type EntryGroupEntryAddedEventInput = {
  data: EntryGroupEntryAddedEventDataInput;
  occurredAt: Scalars['DateTime'];
  subject: EntryGroupEventSubjectInput;
};

export type EntryGroupEntryRemovedEventDataInput = {
  entryUid: InputMaybe<Scalars['ID']>;
  originalPublishDate: InputMaybe<Scalars['DateTime']>;
  publishDate: InputMaybe<Scalars['DateTime']>;
};

export type EntryGroupEntryRemovedEventInput = {
  data: EntryGroupEntryRemovedEventDataInput;
  occurredAt: Scalars['DateTime'];
  subject: EntryGroupEventSubjectInput;
};

export type EntryGroupEventSubjectInput = {
  communityUid: InputMaybe<Scalars['ID']>;
  hubPageUid: InputMaybe<Scalars['ID']>;
  networkUid: Scalars['ID'];
  organizationUid: Scalars['ID'];
  parentEntryGroupUid: InputMaybe<Scalars['ID']>;
  slug: Scalars['String'];
  uid: Scalars['ID'];
};

/** An image asset placement. May have customized metadata from its source Asset. */
export type EntryGroupImage = {
  __typename?: 'EntryGroupImage';
  /** A description of the contents of this image. */
  altText: Maybe<Scalars['String']>;
  /** A description of the contents of this image. */
  caption: Maybe<Scalars['String']>;
  /** The photo credit of this image placement. */
  credit: Maybe<Scalars['String']>;
  /** The height of this image in pixels. */
  height: Maybe<Scalars['Int']>;
  /** A thumbor-generated image URL. */
  thumborUrl: Maybe<Scalars['String']>;
  /** The HTTP URL of this image. */
  url: Scalars['String'];
  /** The width of this image in pixels. */
  width: Maybe<Scalars['Int']>;
};


/** An image asset placement. May have customized metadata from its source Asset. */
export type EntryGroupImageThumborUrlArgs = {
  crop: InputMaybe<ThumborCrop>;
  filters: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  flip: InputMaybe<Scalars['Boolean']>;
  flop: InputMaybe<Scalars['Boolean']>;
  halign: InputMaybe<Scalars['String']>;
  height: InputMaybe<Scalars['Int']>;
  smart: InputMaybe<Scalars['Boolean']>;
  valign: InputMaybe<Scalars['String']>;
  width: InputMaybe<Scalars['Int']>;
};

/**
 * Specify changes to a collection of [`EntryGroupMembership`s](/docs/reference/object/EntryGroupMembership/).
 * The order of items in the collection is not meaningful.
 */
export type EntryGroupMembershipCollectionInput = {
  /** Add new memberships. Adding a membership which already exists will update it to match the input. */
  add: InputMaybe<Array<EntryGroupMembershipInput>>;
  /**
   * Replace all current memberships with new ones.
   * Cannot be used in conjunction with `add`, `remove`, or `update` inputs.
   */
  assign: InputMaybe<Array<EntryGroupMembershipInput>>;
  /** Remove existing memberships. */
  remove: InputMaybe<Array<EntryGroupUniqueKeyInput>>;
};

/** Specify the attributes of an [`EntryGroupMembership`](/docs/reference/object/EntryGroupMembership/). */
export type EntryGroupMembershipInput = {
  /** Which [`EntryGroup`](/docs/reference/object/EntryGroup/) to associate with. */
  entryGroup: EntryGroupUniqueKeyInput;
  /**
   * If the EntryGroup has an attached [`HubPage`](/docs/reference/object/HubPage/),
   * then this controls the resulting placement on that HubPage.
   * If the EntryGroup does not have an attached HubPage, then specifying this (even with a `null` value) will cause an error.
   * Specify `null` for automatic placement into an unpinned slot in reverse-cron order.
   * Specify `-1` to exclude the Entry from being placed onto the HubPage at all.
   * Specify any number (>= 0) to create a pinned placement at that slot.
   */
  hubPagePlacementSlot: InputMaybe<Scalars['Int']>;
};

/**
 * One portion of results from a paginated EntryGroup query.
 *
 * At most `perPage` results are included, according to the corresponding input parameter.
 *
 * The first result has the offset `perPage * (pageNumber - 1)` in the full result set.
 */
export type EntryGroupPage = {
  __typename?: 'EntryGroupPage';
  /** The page number of the current page. */
  pageNumber: Scalars['Int'];
  /** The limit on results per page. */
  perPage: Scalars['Int'];
  /** A list of EntryGroup results in this page. */
  results: Array<Maybe<EntryGroup>>;
  /** The total count of EntryGroups in the result set. */
  totalCount: Scalars['Int'];
};

/** Provides components that hold full-fidelity content as structured data */
export type EntryGroupRailComponent = EntryGroupRailGroupWithImages | EntryGroupRailGroupWithText | EntryGroupRailNewsletter;

/** Provides an entry group from which to pull recent entries' text and images. */
export type EntryGroupRailGroupWithImages = {
  __typename?: 'EntryGroupRailGroupWithImages';
  group: EntryGroup;
  layout: EntryGroupRailGroupWithImagesLayout;
};

/** The types of display layouts for a sidebar group with images. */
export enum EntryGroupRailGroupWithImagesLayout {
  Cinema = 'CINEMA',
  PhotosRight = 'PHOTOS_RIGHT',
  Square = 'SQUARE',
  WithPhotos = 'WITH_PHOTOS'
}

/** Provides an entry group from which to pull recent entries' text only. */
export type EntryGroupRailGroupWithText = {
  __typename?: 'EntryGroupRailGroupWithText';
  group: EntryGroup;
  layout: EntryGroupRailGroupWithTextLayout;
};

/** The types of display layouts for a sidebar group with text only. */
export enum EntryGroupRailGroupWithTextLayout {
  NumberedList = 'NUMBERED_LIST',
  Text = 'TEXT'
}

/** Provides a newsletter. */
export type EntryGroupRailNewsletter = {
  __typename?: 'EntryGroupRailNewsletter';
  newsletter: Newsletter;
};

export type EntryGroupSearchQuery = {
  /** Filter groups by community. Will also pull in SuperGroups available to that community. */
  communityId: Scalars['Int'];
  /** The target page number of this entry search. */
  pageNumber: InputMaybe<Scalars['Int']>;
  /** The desired records per page of results, maximum of 100. */
  perPage: InputMaybe<Scalars['Int']>;
  /**
   * When true, `text` matches only exact phrases, allowing prefix matching on
   * the last term in `text`. Can be useful for autocomplete inputs.
   */
  prefix: InputMaybe<Scalars['Boolean']>;
  /** Search keywords to match against, matching phrases boost relevance score. */
  text: Scalars['String'];
};

/**
 * Identify an existing [`EntryGroup`](/docs/reference/object/EntryGroup.html) by a unique key.
 * Exactly one field must be specified.
 */
export type EntryGroupUniqueKeyInput = {
  /** An internal numeric identifier. */
  id: InputMaybe<Scalars['Int']>;
  /** A human readable string identifier, commonly used in URL paths. */
  slug: InputMaybe<Scalars['String']>;
  /** A unique identifier set by Chorus. */
  uid: InputMaybe<Scalars['ID']>;
};

export type EntryGroupUpdatedEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: EntryGroupEventSubjectInput;
};

/**
 * Provides a configured placement of a raw image [`Asset`](/docs/reference/object/Asset.html).
 * Used in several contexts of the [`Entry`](/docs/reference/object/Entry.html) type,
 * including various top-level fields and among body components.
 */
export type EntryImage = {
  __typename?: 'EntryImage';
  /** The source [`Asset`](/docs/reference/object/Asset) for this entry image placement. */
  asset: Maybe<Asset>;
  /**
   * The id of this image's source [`Asset`](/docs/reference/object/Asset.html).
   * @deprecated use asset.id
   */
  assetId: Scalars['Int'];
  /** A caption for this image placement. */
  caption: Maybe<RichText>;
  /**
   * A warning message for sensitive content.
   * Normally overlays the image and must be clicked-through to reveal the content.
   * @deprecated use EntryBodyImage.contentWarning
   */
  contentWarning: Maybe<Scalars['String']>;
  /** A credit for this image placement. */
  credit: Maybe<RichText>;
  /** A crop for this image placement. */
  crop: EntryImageCrop;
  /** A focal point on the subject of this image placement. */
  focus: EntryImageFocus;
  /** Height of this image placement. Always matches the crop size. */
  height: Scalars['Int'];
  /** Indicates that the credit should be hidden from audiences. Default false. */
  hideCredit: Scalars['Boolean'];
  /**
   * A full-sized image variant URL with this placement's editorial crop applied.
   * The original source URL may be obtained from the raw image [Asset](/docs/reference/object/Asset.html).
   */
  url: Scalars['URL'];
  /**
   * Generates a scaled and/or [art directed](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#Art_direction)
   * variant URL for this image with its editorial crop applied. This method may be repeatedly [aliased](https://graphql.org/learn/queries/#aliases)
   * with different parameters to request many URLs of varying sizes, aspect ratios, and encodings.
   */
  variantUrl: Maybe<Scalars['URL']>;
  /** Width of this image placement. Always matches the crop size. */
  width: Scalars['Int'];
};


/**
 * Provides a configured placement of a raw image [`Asset`](/docs/reference/object/Asset.html).
 * Used in several contexts of the [`Entry`](/docs/reference/object/Entry.html) type,
 * including various top-level fields and among body components.
 */
export type EntryImageVariantUrlArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  format?: InputMaybe<EntryImageVariantFormat>;
  width: Scalars['Int'];
};

/**
 * Create a new association to an image [`Asset`](/docs/reference/object/Asset.html).
 * Exactly one field must be specified.
 */
export type EntryImageAssetAssociationCreateInput = {
  /** Associate with an existing [`Asset`](/docs/reference/object/Asset.html). */
  connect: InputMaybe<AssetUniqueKeyInput>;
};

/**
 * Update an existing association to an image [`Asset`](/docs/reference/object/Asset.html).
 * Exactly one field must be specified.
 */
export type EntryImageAssetAssociationUpdateInput = {
  /** Associate with a different [`Asset`](/docs/reference/object/Asset.html). */
  connect: InputMaybe<AssetUniqueKeyInput>;
};

/** Provides a pair of images to display as a side-by-side comparison. */
export type EntryImageComparison = {
  __typename?: 'EntryImageComparison';
  /** A caption describing this image comparison. */
  caption: Maybe<RichText>;
  /** A pair of [`EntryImage`](/docs/reference/object/EntryImage.html) objects to display as a side-by-side comparison. */
  firstImage: EntryImage;
  secondImage: EntryImage;
};

/** Specify the data needed to create an [`EntryImage`](/docs/reference/object/EntryImage.html). */
export type EntryImageCreateInput = {
  /** Associate with an [`Asset`](/docs/reference/object/Asset.html) which holds the raw image data. */
  asset: EntryImageAssetAssociationCreateInput;
  /** The editorial description of this image in the context of the surrounding content. */
  caption: InputMaybe<RichTextValueInput>;
  /**
   * The editorial-defined crop boundary of the underlying asset.
   * Defaults to the full image if unspecified.
   */
  crop: InputMaybe<EntryImageCropInput>;
  /**
   * The editorial-defined coordinates of the image subject.
   * Defaults to the center of the image if unspecified.
   */
  focus: InputMaybe<EntryImageFocusInput>;
  /** Whether the `credit` stored on the underlying [`Asset`](/docs/reference/object/Asset.html) should be displayed to audiences. */
  hideCredit: InputMaybe<Scalars['Boolean']>;
};

/**
 * Defines a crop of the original [`Asset`](/docs/reference/object/Asset.html)
 * to use with this [`EntryImage`](/docs/reference/object/EntryImage.html) placement.
 */
export type EntryImageCrop = {
  __typename?: 'EntryImageCrop';
  /** Height of the crop, in pixels. */
  height: Scalars['Int'];
  /** Width of the crop, in pixels. */
  width: Scalars['Int'];
  /** Left origin of the crop, in pixels. */
  x: Scalars['Int'];
  /** Top origin of the crop, in pixels. */
  y: Scalars['Int'];
};

/** Specify the boundary of an editorial-defined crop, using the top-left corner as the origin. */
export type EntryImageCropInput = {
  /**
   * The height of the cropped area.
   * `y + height` is the bottom boundary.
   */
  height: Scalars['Int'];
  /**
   * The width of the cropped area.
   * `x + width` is the right boundary.
   */
  width: Scalars['Int'];
  /** The left boundary of the cropped area. */
  x: Scalars['Int'];
  /** The top boundary of the cropped area. */
  y: Scalars['Int'];
};

/**
 * Defines a focal point in the original [`Asset`](/docs/reference/object/Asset.html)
 * to use with this [`EntryImage`](/docs/reference/object/EntryImage.html) placement.
 */
export type EntryImageFocus = {
  __typename?: 'EntryImageFocus';
  /** Horizontal focal position, in pixels. */
  x: Scalars['Int'];
  /** Vertical focal position, in pixels. */
  y: Scalars['Int'];
};

/** Specify the coordinates of the editorial-defined image subject, using the top-left corner as the origin. */
export type EntryImageFocusInput = {
  /** How many pixels from the left of the image. */
  x: Scalars['Int'];
  /** How many pixels fro mthe top of the image. */
  y: Scalars['Int'];
};

/**
 * Either create a new [`EntryImage`](/docs/reference/object/EntryImage.html) or update an existing one.
 * Exactly one field must be specified.
 */
export type EntryImageInput = {
  /** Input used to create a new [`EntryImage`](/docs/reference/object/EntryImage.html). */
  create: InputMaybe<EntryImageCreateInput>;
  /**
   * Input used to update an existing [`EntryImage`](/docs/reference/object/EntryImage.html).
   * If an existing [`EntryImage`](/docs/reference/object/EntryImage.html) does not already exist, an error will be returned.
   */
  update: InputMaybe<EntryImageUpdateInput>;
};

/** Specify changes to an existing [`EntryImage`](/docs/reference/object/EntryImage.html). */
export type EntryImageUpdateInput = {
  /**
   * Change the associated [`Asset`](/docs/reference/object/Asset.html).
   * If the underlying asset is changed, then `crop` and `focus` are reset to default values unless they also specified.
   */
  asset: InputMaybe<EntryImageAssetAssociationUpdateInput>;
  /** The editorial description of this image in the context of the surrounding content. */
  caption: InputMaybe<RichTextInput>;
  /** The editorial-defined crop boundary of the underlying asset. */
  crop: InputMaybe<EntryImageCropInput>;
  /** The editorial-defined coordinates of the image subject. */
  focus: InputMaybe<EntryImageFocusInput>;
  /** Whether the `credit` stored on the underlying [`Asset`](/docs/reference/object/Asset.html) should be displayed to audiences. */
  hideCredit: InputMaybe<Scalars['Boolean']>;
};

/** external enum (CAPI) - do not document here */
export enum EntryImageVariantFormat {
  /**
   * Requests the source image in [GifV](https://help.imgur.com/hc/en-us/articles/208606616-What-is-GIFV-) format.
   * GifV is a lightweight looping video alternative to GIF images.
   * To display the GifV format, a variant URL is applied to a `video` tag, e.g.:
   * `<video playsinline autoplay loop mute src="VARIANT_URL"></video>`.
   * This video element may contain a fallback `img` or `picture` tag that displays the original GIF.
   * Requesting the GIFV format from non-GIF images will return null.
   */
  Gifv = 'GIFV',
  /**
   * Requests the source image in basic JPEG format.
   * Useful for ensuring an optimized image file without transparency or animation.
   */
  Jpeg = 'JPEG',
  /** Requests the source image in its original file format: JPG, PNG, etc. */
  Original = 'ORIGINAL',
  /**
   * Requests the source image in [WebP](https://en.wikipedia.org/wiki/WebP) format.
   * WebP is an optimized format that frequently saves 10-30% filesize over JPG,
   * however it is not compatible with all web browsers.
   * WebP sources are best used in `picture` elements that support fallback formats,
   * or displayed via JavaScript after detecting WebP browser support.
   */
  Webp = 'WEBP'
}

/** Possible layout types for entry revision */
export enum EntryLayoutTemplate {
  /** Headline above */
  HeadlineAbove = 'HEADLINE_ABOVE',
  /** Headline above variant */
  HeadlineAbove_2 = 'HEADLINE_ABOVE__2',
  /** Headline below entry */
  HeadlineBelow = 'HEADLINE_BELOW',
  /** Headline below in short form */
  HeadlineBelowShort = 'HEADLINE_BELOW_SHORT',
  /** Overlayed headline */
  HeadlineOverlay = 'HEADLINE_OVERLAY',
  /** Headline above with impact */
  ImpactHeadlineAbove = 'IMPACT_HEADLINE_ABOVE',
  /** Headline overlay with impact */
  ImpactHeadlineOverlay = 'IMPACT_HEADLINE_OVERLAY',
  /** Left split layout */
  SplitLeft = 'SPLIT_LEFT',
  /** Right split layout */
  SplitRight = 'SPLIT_RIGHT',
  /** Standard layout (default) */
  Standard = 'STANDARD',
  /** Video layout */
  Video = 'VIDEO'
}

/** Possible featured media types for the [`Entry.leadArt`](/docs/reference/object/Entry.html#leadart-entryleadart) slot. */
export type EntryLeadArt = EntryEmbed | EntryGallery | EntryImage | EntryVideo;

/** Possible featured media types for the [`Entry.leadComponent`](/docs/reference/object/Entry.html#leadComponent-entryleadcomponent) slot. */
export type EntryLeadComponent = EntryLeadEmbed | EntryLeadGallery | EntryLeadHtml | EntryLeadImage | EntryLeadVideo;

/** Represents a lead [`EntryEmbed`](/docs/reference/object/EntryEmbed.html). */
export type EntryLeadEmbed = {
  __typename?: 'EntryLeadEmbed';
  caption: Maybe<RichText>;
  embed: Maybe<EntryEmbed>;
};

/** Represents a lead [`EntryGallery`](/docs/reference/object/EntryGallery.html). */
export type EntryLeadGallery = {
  __typename?: 'EntryLeadGallery';
  gallery: Maybe<EntryGallery>;
};

/** Provides a raw string of editorially-managed HTML, used as lead art. */
export type EntryLeadHtml = {
  __typename?: 'EntryLeadHTML';
  /** The raw editorially-managed HTML string. */
  rawHtml: Maybe<Scalars['String']>;
};

/** Represents a lead [`EntryImage`](/docs/reference/object/EntryImage.html). */
export type EntryLeadImage = {
  __typename?: 'EntryLeadImage';
  caption: Maybe<RichText>;
  image: Maybe<EntryImage>;
};

/** Represents a lead [`EntryVideo`](/docs/reference/object/EntryVideo.html). */
export type EntryLeadVideo = {
  __typename?: 'EntryLeadVideo';
  /** Whether this video will autoplay. */
  autoplay: Maybe<Scalars['Boolean']>;
  caption: Maybe<RichText>;
  video: Maybe<EntryVideo>;
};

/** Attributes by which a list of entries can be ordered by. */
export enum EntryOrderField {
  /** Order entries by creation time. */
  CreatedAt = 'CREATED_AT',
  /** Order entries by update time. */
  UpdatedAt = 'UPDATED_AT'
}

/** Specify how to order a list of entries. */
export type EntryOrderInput = {
  /** The direction in which to order entries by the specified field. */
  direction: OrderDirection;
  /** The field in which to order entries by. */
  field: EntryOrderField;
};

/** Provides a collection of entries, pull quotes, and videos. */
export type EntryPackageCover = {
  __typename?: 'EntryPackageCover';
  /** A list of ordered sections for this package. */
  items: Maybe<Array<Maybe<EntryPackageCoverItem>>>;
};

/** Provides a single entry in this package. */
export type EntryPackageCoverEntry = {
  __typename?: 'EntryPackageCoverEntry';
  /** The [`Entry`](/docs/ reference/object/Entry) object placed at this position. */
  entry: Entry;
  /** The layout of the story in the cover. */
  layout: Maybe<EntryPackageCoverEntryLayout>;
  /** The entry title that only appears in the cover. */
  title: Maybe<Scalars['String']>;
};

/** Specifies how a story in a package's cover should render on the landing page. */
export enum EntryPackageCoverEntryLayout {
  /** Specifies a full width layout. */
  FullWidth = 'FULL_WIDTH',
  /** Specifies a horizontal layout. */
  Horizontal = 'HORIZONTAL',
  /** Specifies a layout spanning 1 column. */
  OneCol = 'ONE_COL',
  /** Specifies a layout spanning 2 columns. */
  TwoCol = 'TWO_COL',
  /** Specifies a vertical layout. */
  Vertical = 'VERTICAL'
}

export type EntryPackageCoverItem = EntryPackageCoverEntry | EntryPackageCoverPullquote | EntryPackageCoverVideo;

/** Provides a pullquote in the package cover. */
export type EntryPackageCoverPullquote = {
  __typename?: 'EntryPackageCoverPullquote';
  /** The quotation text. */
  quote: RichText;
};

/** Provides a landing page placement of an [`EntryVideo`](/docs/reference/object/EntryVideo.html) in the package cover. */
export type EntryPackageCoverVideo = {
  __typename?: 'EntryPackageCoverVideo';
  /** A caption for this video. */
  caption: Maybe<RichText>;
  /** The [`EntryVideo`](/docs/ reference/object/EntryVideo) object placed at this position. */
  video: Maybe<EntryVideo>;
};

/** Provides a single entry in this package. */
export type EntryPackageEntry = {
  __typename?: 'EntryPackageEntry';
  entry: Entry;
  /** The entry title that only appears in the TOC. */
  title: Maybe<Scalars['String']>;
};

/** Provides a collection of related entries. */
export type EntryPackageToc = {
  __typename?: 'EntryPackageToc';
  /** Whether the table of contents is hidden on the landing page. */
  hidden: Maybe<Scalars['Boolean']>;
  /** The layout of the table of contents on the landing page. */
  layout: Maybe<EntryPackageTocLayout>;
  /** A list of ordered sections for this package. */
  sections: Maybe<Array<Maybe<EntryPackageTocSection>>>;
};

/** Specifies how a package's table of contents should render on the landing page. */
export enum EntryPackageTocLayout {
  /** Specifies a horizontal layout. */
  Horizontal = 'HORIZONTAL',
  /** Specifies a vertical layout. */
  Vertical = 'VERTICAL'
}

/** Provides a single section of entries. */
export type EntryPackageTocSection = {
  __typename?: 'EntryPackageTocSection';
  /** The section's ordered collection of entries. */
  entries: Array<Maybe<EntryPackageEntry>>;
  /** The section's heading. */
  heading: Maybe<Scalars['String']>;
};

/**
 * One portion of results from a paginated Entry listing.
 * The first result has the offset `pageNumber * (perPage - 1)` in the full result set.
 */
export type EntryPage = {
  __typename?: 'EntryPage';
  /** The page number of current entry page. */
  pageNumber: Scalars['Int'];
  /** The limit on results per page. */
  perPage: Scalars['Int'];
  /** A list of Entry results in this page. */
  results: Array<Maybe<Entry>>;
  /** The total count of entries in the result set. */
  totalCount: Scalars['Int'];
};

/**
 * Provides a non-scientific poll with a question that audiences may respond to.
 * Normally displays as an aside to the entry body.
 */
export type EntryPoll = {
  __typename?: 'EntryPoll';
  /** Specifies the closing date/time for this poll. */
  closeDate: Scalars['DateTime'];
  /** An internal numeric identifier. */
  id: Scalars['Int'];
  /** A list of response options for this poll. */
  options: Array<EntryPollOption>;
  /** The title and question raised by this poll. */
  title: Scalars['String'];
  /** The total number of votes for this poll */
  totalVotes: Maybe<Scalars['Int']>;
};

/** Provides a single response option for an [`EntryPoll`](/docs/reference/object/EntryPoll.html). */
export type EntryPollOption = {
  __typename?: 'EntryPollOption';
  /** The label for this response option. */
  label: Scalars['String'];
  /** A unique identifier for this response option. */
  uuid: Scalars['String'];
  /** The number of votes per option. */
  votes: Scalars['Int'];
};

/** Provides a product card with purchase links. */
export type EntryProduct = {
  __typename?: 'EntryProduct';
  /** A description of this product. */
  description: Maybe<RichText>;
  /** An image of this product. */
  image: Maybe<EntryImage>;
  /** The retailers of this product. */
  retailers: Maybe<Array<EntryProductRetailer>>;
  /** The name of this product. */
  title: Scalars['String'];
};

/** Provides a retailer for an `EntryBodyProductCard`. */
export type EntryProductRetailer = {
  __typename?: 'EntryProductRetailer';
  /** Name of this retailer. */
  name: Scalars['String'];
  /** The product price through this retailer. */
  price: Maybe<Scalars['Float']>;
  /** The sale price through this retailer. */
  salePrice: Maybe<Scalars['Float']>;
  /** The product listing URL through this retailer. */
  url: Maybe<Scalars['URL']>;
};

/** Specifies possible publish/unpublish states of an [`Entry`](/docs/reference/object/Entry/). */
export enum EntryPublishStatus {
  /** The entry is published; it will be shown publicly. */
  Published = 'PUBLISHED',
  /**
   * The entry has been unpublished; it was previously published,
   * and then made private again.
   */
  Unpublished = 'UNPUBLISHED'
}

export type EntryPublishedEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: EntryEventSubjectInput;
};

/** Provides one of four possible attachment types */
export type EntryQuickAttachment = EntryEmbed | EntryExternalLink | EntryImage | EntryRelatedEntry | EntryVideo;

/** Provides components that hold full-fidelity content as structured data */
export type EntryRailComponent = EntryRailGroupWithImages | EntryRailGroupWithText | EntryRailNewsletter;

/** Provides an entry group from which to pull recent entries' text and images. */
export type EntryRailGroupWithImages = {
  __typename?: 'EntryRailGroupWithImages';
  group: EntryGroup;
  layout: EntryRailGroupWithImagesLayout;
};

/** The types of display layouts for a sidebar group with images. */
export enum EntryRailGroupWithImagesLayout {
  Cinema = 'CINEMA',
  PhotosRight = 'PHOTOS_RIGHT',
  Square = 'SQUARE',
  WithPhotos = 'WITH_PHOTOS'
}

/** Provides an entry group from which to pull recent entries' text only. */
export type EntryRailGroupWithText = {
  __typename?: 'EntryRailGroupWithText';
  group: EntryGroup;
  layout: EntryRailGroupWithTextLayout;
};

/** The types of display layouts for a sidebar group with text only. */
export enum EntryRailGroupWithTextLayout {
  NumberedList = 'NUMBERED_LIST',
  Text = 'TEXT'
}

/** Provides a newsletter. */
export type EntryRailNewsletter = {
  __typename?: 'EntryRailNewsletter';
  newsletter: Newsletter;
};

/** Links a related entry to the entry */
export type EntryRelatedEntry = {
  __typename?: 'EntryRelatedEntry';
  /** The [`Entry`](/docs/ reference/object/Entry) object which is related. */
  entry: Entry;
  /** An optional entry title to override the existing one. */
  title: Maybe<Scalars['String']>;
};

/** Provides a common interface for both published and draft entries. */
export type EntryRevision = {
  /** The freeform text field that an editor can use to specify people who worked on the story, e.g. `"Photos by Bill Cunningham"`. */
  additionalContributors: Maybe<RichText>;
  /** Indicates that clients should not rewrite e-commerce links for affiliate revenue purposes (default `false`). */
  affiliateLinkRewritingDisabled: Scalars['Boolean'];
  /** The primary author of this entry. */
  author: User;
  /**
   * The primary author ID of this entry.
   * @deprecated use author.id
   */
  authorId: Scalars['Int'];
  /** The full body content of this entry. */
  body: EntryBody;
  /** References to Building records in Hermano. */
  buildingIds: Array<Scalars['Int']>;
  /**
   * A collection of network-level campaign groups that this entry belongs to, including its `primaryCampaignGroup`.
   * Campaign groups are used by the Vox Creative network to create branded content stories for advertisers.
   */
  campaignGroups: Array<Maybe<EntryGroup>>;
  /** Specifies a custom URL to override this entry's canonical URL meta field. Useful for republishing offsite content. */
  canonicalUrlOverride: Maybe<Scalars['URL']>;
  /** The community that this entry belongs to. */
  community: Community;
  /** A collection of community-level groups that this belongs to, including its `primaryCommunityGroup`. */
  communityGroups: Array<Maybe<EntryGroup>>;
  /**
   * The community ID that this entry belongs to.
   * @deprecated use community.id
   */
  communityId: Scalars['Int'];
  /**
   * A list of contributor IDs for this entry, not including the primary author.
   * @deprecated use contributors.id
   */
  contributorIds: Array<Scalars['Int']>;
  /** A list of contributors for this entry, not including the primary author. */
  contributors: Maybe<Array<User>>;
  /** The date this entry was created. */
  createdAt: Maybe<Scalars['DateTime']>;
  /** Custom flag field by key for this entry. */
  customFieldFlag: Maybe<Scalars['Boolean']>;
  /** Custom text field by key for this entry. */
  customFieldText: Maybe<Scalars['String']>;
  /** Provides a list of all custom pages for this entry. Only available on entries of type [`CUSTOM_STORY`](/docs/reference/enum/EntryType.html#custom-story). */
  customPages: Maybe<Array<EntryCustomPage>>;
  /** The line of text immediately below the headline on the entry page. */
  dek: Maybe<RichText>;
  /** A list of external associations for this entry formatted as `"{service}:{identifier}"`, e.g.: `"associatedpress:12345"`. */
  externalIds: Array<Scalars['ID']>;
  /** Whether there are affiliate links in the entry body. Should return true if there are hard-coded links, even if the entry's `affiliateLinkRewritingDisabled` is `true`. */
  hasAffiliateLinks: Maybe<Scalars['Boolean']>;
  /** Specifies if this entry is hidden from AMP. */
  hideFromAmp: Scalars['Boolean'];
  /**
   * The internal id of this record in SBN.
   * @deprecated use a ContentAPI uuid identifier
   */
  id: Scalars['Int'];
  /** Specifies if this entry has been paywalled. */
  isPaywalled: Scalars['Boolean'];
  /** Specifies if this entry is restricted by regional privacy laws (GDPR). */
  isRestrictedInPrivacyConsentRegion: Scalars['Boolean'];
  /** Specifies the layout template to use for a revision */
  layoutTemplate: Maybe<EntryLayoutTemplate>;
  /** @deprecated use leadComponent */
  leadArt: Maybe<EntryLeadArt>;
  /** One of several possible featured media types for this entry, including an image, a gallery of images, a third-party embed, or a video. This featured media is typically rendered at the top of the story, sometimes in a typographical lockup with the headline. When blank, this entry omits the featured media slot. */
  leadComponent: Maybe<EntryLeadComponent>;
  /** Similar to [`Entry.leadComponent`](#leadComponent-EntryLeadComponent), but only provides an image selection. This is useful when [assessing fallbacks](/docs/guides/using-entry-images#selecting-entry-meta-images) for other meta images such as `socialImage` or `seoImage`. */
  leadImage: Maybe<EntryImage>;
  /** Legacy database ID, used internally for analytics. */
  legacyId: Maybe<Scalars['Int']>;
  /** The link set associated with this entry. */
  linkSet: Maybe<LinkSet>;
  /**
   * The link set ID associated with this entry.
   * @deprecated use linkSet.id
   */
  linkSetId: Maybe<Scalars['Int']>;
  /** End time for live coverage. */
  liveCoverageEnd: Maybe<Scalars['DateTime']>;
  /** References to LiveCoverageEvent records in Hermano. */
  liveCoverageEventIds: Array<Scalars['Int']>;
  /** Start time for live coverage. */
  liveCoverageStart: Maybe<Scalars['DateTime']>;
  /** Provides a list of interactive map points for this entry. Only available on entires of type [`MAP_STACK`](/docs/reference/enum/EntryType#map-stack). */
  mapCards: Maybe<Array<MapCard>>;
  /** References to MmaEvent records in Hermano. */
  mmaEventIds: Array<Scalars['Int']>;
  /** References to MmaFight records in Hermano. */
  mmaFightIds: Array<Scalars['Int']>;
  /** References to MmaFighter records in Hermano. */
  mmaFighterIds: Array<Scalars['Int']>;
  /** References to MmaPromotion records in Hermano. */
  mmaPromotionIds: Array<Scalars['Int']>;
  /** References to MmaWeightClass records in Hermano. */
  mmaWeightClassIds: Array<Scalars['Int']>;
  /** References to Neighborhood records in Hermano. */
  neighborhoodIds: Array<Scalars['Int']>;
  /** A collection of network-level groups that this entry belongs to, including its `primaryNetworkGroup`. */
  networkGroups: Array<Maybe<EntryGroup>>;
  /** The package this entry or draft belongs to. */
  package: Maybe<EntryRevision>;
  /** The package landing page's cover. Will be `null` if EntryType is not a Package. */
  packageCover: Maybe<EntryPackageCover>;
  /** The package landing page's logo to display for all member entries. Will be `null` if EntryType is not a Package. */
  packageLogo: Maybe<EntryImage>;
  /** The package landing page's ordered table of contents containing all its member stories. Will be `null` if EntryType is not a Package. */
  packageToc: Maybe<EntryPackageToc>;
  /** A password needed to view this Entry publicly */
  password: Maybe<Scalars['String']>;
  /** The editorially-managed SEO path segment of the URL. */
  permalink: Scalars['String'];
  /** The primary network-level campaign group of this entry, to be sorted first in a list of groupings. */
  primaryCampaignGroup: Maybe<EntryGroup>;
  /** The primary community-level group of this entry, to be sorted first in a list of groupings. */
  primaryCommunityGroup: Maybe<EntryGroup>;
  /**
   * The primary community-level group ID of this entry.
   * @deprecated use primaryCommunityGroup.id
   */
  primaryCommunityGroupId: Maybe<Scalars['Int']>;
  /** The primary network-level group of this entry, to be sorted first in a list of groupings. */
  primaryNetworkGroup: Maybe<EntryGroup>;
  /**
   * The primary network-level group ID of this entry.
   * @deprecated use primaryNetworkGroup.id
   */
  primaryNetworkGroupId: Maybe<Scalars['Int']>;
  /** Corresponds with the date an entry will run in print */
  printPublicationDate: Maybe<Scalars['Date']>;
  /** A slug to identify this entry if it is sent to print. */
  printSlug: Maybe<Scalars['String']>;
  /** References to ProductBrand records in Hermano. */
  productBrandIds: Array<Scalars['Int']>;
  /** References to ProductCategory records in Hermano. */
  productCategoryIds: Array<Scalars['Int']>;
  /** References to Product records in Hermano. */
  productIds: Array<Scalars['Int']>;
  /** A dedicated description for use in promotional contexts, such as hub pages, archives, syndicated feeds, etc., separate from the promotional headline. */
  promoDescription: Maybe<RichText>;
  /** A dedicated headline for use in promotional contexts, such as hub pages, archives, and syndicated feeds. */
  promoHeadline: Maybe<Scalars['String']>;
  /** A dedicated image for use in promotional contexts, such as hub pages, archives, and syndicated feeds. */
  promoImage: Maybe<EntryImage>;
  /** An object that is the attachment for quick entries */
  quickAttachment: Maybe<EntryQuickAttachment>;
  /** A dedicated description for use in [NewsArticle](https://schema.org/NewsArticle) schema, placing it in search engine results and the Google AMP carousel. */
  seoDescription: Maybe<RichText>;
  /** A dedicated headline for use in [NewsArticle](https://schema.org/NewsArticle) schema, placing it in search engine results and the Google AMP carousel. */
  seoHeadline: Maybe<Scalars['String']>;
  /** A dedicated image for use in [NewsArticle](https://schema.org/NewsArticle) schema, placing it in search engine results and the Google AMP carousel. */
  seoImage: Maybe<EntryImage>;
  /** The SEO schema data for an entry that may include one, some or all of the following schemas: [NewsArticle](https://schema.org/NewsArticle), [Review](https://schema.org/Review), [Product](https://schema.org/Product), [ItemList](https://schema.org/ItemList), [VideoObject](https://schema.org/VideoObject) and [LiveBlogPosting](https://schema.org/LiveBlogPosting). */
  seoSchema: Maybe<Array<Scalars['JSON']>>;
  /** References to ShoppingDeal records in Hermano. */
  shoppingDealIds: Array<Scalars['Int']>;
  /** A short link for the Entry in the format [domain]/e/[entry_id], which redirects to the Entry's canonical URL. */
  shortLink: Scalars['URL'];
  /** Specifies if this entry should be excluded from feeds and sitemaps. */
  shouldNotDistribute: Scalars['Boolean'];
  /** When displaying on the web, include "nofollow" in the `<meta name="robots">` HTML tag value. */
  shouldUseHTMLNofollow: Scalars['Boolean'];
  /** When displaying on the web, include "noindex" in the `<meta name="robots">` HTML tag value. */
  shouldUseHTMLNoindex: Scalars['Boolean'];
  /** The full URL path of this entry, including categorical prefixes and the permalink. */
  slug: Scalars['String'];
  /** A dedicated description for use in social sharing contexts, such as Facebook and Twitter meta tags. */
  socialDescription: Maybe<RichText>;
  /** A dedicated headling for use in social sharing contexts, such as Facebook and Twitter meta tags. */
  socialHeadline: Maybe<Scalars['String']>;
  /** A dedicated image for use in social sharing contexts, such as Facebook and Twitter meta images. */
  socialImage: Maybe<EntryImage>;
  /** References to SportEvent records in Hermano. */
  sportEventIds: Array<Scalars['Int']>;
  /** References to SportPlayer records in Hermano. */
  sportPlayerIds: Array<Scalars['Int']>;
  /** References to SportTeam records in Hermano. */
  sportTeamIds: Array<Scalars['Int']>;
  /** Provides scoped access to entries belonging to this stream. Only available on entires of type [`STREAM`](/docs/reference/enum/EntryType#stream). */
  stream: Maybe<EntryStream>;
  /** All entries of type `STREAM` that this entry belongs to. */
  streams: Maybe<Array<Maybe<Entry>>>;
  /** The custom css added in story editor. */
  styles: Maybe<Scalars['String']>;
  /** The teaser text for this entry. (INTERNAL - only used by The Verge) */
  teaser: Maybe<RichText>;
  /** The main headline of this Entry. */
  title: Scalars['String'];
  /** The date when this entry was marked for deletion. */
  trashedAt: Maybe<Scalars['DateTime']>;
  /** The type of this entry based on editorial features that it incorporates. An entry's type generally influences the content layout that presents it. */
  type: EntryType;
  /** The unique idenfifier for this entry record. */
  uid: Scalars['ID'];
  /** When this entry was last changed. May be more recent than when it was last published. */
  updatedAt: Maybe<Scalars['DateTime']>;
  /** The relative path of the entry. (Empty for EntryDraft) */
  urlPath: Scalars['String'];
  /** The internal id of this record in Content-API. */
  uuid: Scalars['String'];
  /** References to Venue records in Hermano. */
  venueIds: Array<Scalars['Int']>;
  /** A version number that increments each time this entry is modified. Useful for building cache keys. */
  version: Scalars['Int'];
  /** References to VideoGameFranchise records in Hermano. */
  videoGameFranchiseIds: Array<Scalars['Int']>;
  /** References to VideoGame records in Hermano. */
  videoGameIds: Array<Scalars['Int']>;
  /** References to VideoGamePlatform records in Hermano. */
  videoGamePlatformIds: Array<Scalars['Int']>;
  /** References to networks returned by the visibleNetworks field. */
  visibleNetworkIds: Array<Scalars['Int']>;
  /** The word count of the body text excluding em dashes `–`, hyphens `-` and asterisks `*`. Used for analytics. */
  wordCount: Scalars['Int'];
};


/** Provides a common interface for both published and draft entries. */
export type EntryRevisionCustomFieldFlagArgs = {
  key: Scalars['String'];
};


/** Provides a common interface for both published and draft entries. */
export type EntryRevisionCustomFieldTextArgs = {
  key: Scalars['String'];
};

/**
 * Provides a scored product review with analysis of pros and cons.
 * Normally appears as an aside to the entry body.
 */
export type EntryScorecard = {
  __typename?: 'EntryScorecard';
  /** A [second-level body](/docs/reference/interface/EntryBodySecondLevelComponent.html) providing editorial context on the subject. */
  body: Array<EntryBodySecondLevelComponent>;
  /** A [second-level body](/docs/reference/interface/EntryBodySecondLevelComponent.html) describing drawbacks of the subject. */
  cons: Array<EntryBodySecondLevelComponent>;
  /** An image of the scorecard subject. */
  image: Maybe<EntryImage>;
  /** Provides the maximum extent of the scoring scale. */
  maxScore: Scalars['Float'];
  /** Product data from Hermano, used for Verge reviews */
  product: Maybe<Product>;
  /** A [second-level body](/docs/reference/interface/EntryBodySecondLevelComponent.html) describing advantages of the subject. */
  pros: Array<EntryBodySecondLevelComponent>;
  /**
   * A numeric score awarded to the subject.
   * @deprecated use EntryScorecard.tempScore
   */
  score: Scalars['Float'];
  /**
   * A numeric score awarded to the subject.
   * Note: This field is only a temporary replacement for `EntryScorecard.score`
   */
  tempScore: Maybe<Scalars['Float']>;
  /** A title for the scorecard subject. */
  title: Scalars['String'];
};

/**
 * Provides a [second-level body](/docs/reference/interface/EntryBodySecondLevelComponent.html) to display as an editorial sidebar.
 * Normally appears as an aside to the entry body.
 */
export type EntrySidebar = {
  __typename?: 'EntrySidebar';
  /** A [second-level body](/docs/reference/interface/EntryBodySecondLevelComponent.html) of editorial content for this sidebar. */
  body: Array<EntryBodySecondLevelComponent>;
  /** A title for this sidebar. Not necessarily for public display. */
  title: Scalars['String'];
  /** The unique idenfifier for this gallery record. */
  uid: Scalars['ID'];
  /** The internal idenfifier for this gallery record. */
  uuid: Scalars['String'];
};

/**
 * Create a new association to an [`EntrySidebar`](/docs/reference/object/EntrySidebar.html).
 * Exactly one field must be specified.
 */
export type EntrySidebarAssociationCreateInput = {
  /** Associate with an existing [`EntrySidebar`](/docs/reference/object/EntrySidebar.html). */
  connect: InputMaybe<EntrySidebarUniqueKeyInput>;
};

/**
 * Update an existing association to an [`EntrySidebar`](/docs/reference/object/EntrySidebar.html).
 * Exactly one field must be specified.
 */
export type EntrySidebarAssociationUpdateInput = {
  /** Associate with a different [`EntrySidebar`](/docs/reference/object/EntrySidebar.html). */
  connect: InputMaybe<EntrySidebarUniqueKeyInput>;
};

/** Specify the body components needed to create a new [`EntrySidebar`](/docs/reference/object/EntrySidebar.html). */
export type EntrySidebarBodyCreateInput = {
  /** Create a new list [`EntryBodyComponents`](/docs/reference/interface/EntryBodyComponent.html). */
  components: InputMaybe<Array<EntryBodySecondLevelComponentCreateInput>>;
};

/** Specify the body components needed to create a new [`EntrySidebar`](/docs/reference/object/EntrySidebar.html). */
export type EntrySidebarBodyUpdateInput = {
  /** Update the list of [`EntryBodyComponents`](/docs/reference/interface/EntryBodyComponent.html). */
  components: InputMaybe<EntryBodySecondLevelComponentListInput>;
};

/** Specify the data needed to create a new [`EntrySidebar`](/docs/reference/object/EntrySidebar.html). */
export type EntrySidebarCreateInput = {
  /** Create body components. */
  body: InputMaybe<EntrySidebarBodyCreateInput>;
  /** Which [`Community`](/docs/reference/object/Community) this [`EntrySidebar`](/docs/reference/object/EntrySidebar) will belong to. */
  community: CommunityUniqueKeyInput;
  /** Set the title. */
  title: Scalars['String'];
};

/** Returned when the `createEntrySidebar` mutation completed successfully. */
export type EntrySidebarCreateResult = {
  __typename?: 'EntrySidebarCreateResult';
  /** The EntrySidebar that was created. */
  entrySidebar: EntrySidebar;
};

/**
 * Identify an existing [`EntrySidebar`](/docs/reference/object/EntrySidebar.html) by a unique key.
 * Exactly one field must be specified.
 */
export type EntrySidebarUniqueKeyInput = {
  /** An internal numeric identifier. */
  id: InputMaybe<Scalars['Int']>;
  /** A unique identifier set by Chorus. */
  uid: InputMaybe<Scalars['ID']>;
  /** An internal string identifier that conforms to RFC 4122. */
  uuid: InputMaybe<Scalars['String']>;
};

/** Specify the data needed to create a new [`EntrySidebar`](/docs/reference/object/EntrySidebar.html). */
export type EntrySidebarUpdateInput = {
  /** Create body components. */
  body: InputMaybe<EntrySidebarBodyUpdateInput>;
  /** Set the title. */
  title: InputMaybe<Scalars['String']>;
};

/** Returned when the `updateEntrySidebar` mutation completed successfully. */
export type EntrySidebarUpdateResult = {
  __typename?: 'EntrySidebarUpdateResult';
  /** The EntrySidebar that was updated. */
  entrySidebar: EntrySidebar;
};

/**
 * Provides the listing of entries that have been added to a story stream,
 * i.e.: an `Entry` of type [`STREAM`](/docs/reference/enum/EntryType.html#stream).
 */
export type EntryStream = {
  __typename?: 'EntryStream';
  /**
   * All entries belonging to this story stream in chronological order.
   * This listing is indexed asynchronously, so may not immediately reflect
   * when an Entry is added or removed.
   */
  entries: EntryPage;
  /**
   * All entries belonging to this story stream in reverse chronological order.
   * This listing is indexed asynchronously, so may not immediately reflect
   * when an Entry is added or removed.
   */
  recentEntries: EntryPage;
};


/**
 * Provides the listing of entries that have been added to a story stream,
 * i.e.: an `Entry` of type [`STREAM`](/docs/reference/enum/EntryType.html#stream).
 */
export type EntryStreamEntriesArgs = {
  pageNumber?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


/**
 * Provides the listing of entries that have been added to a story stream,
 * i.e.: an `Entry` of type [`STREAM`](/docs/reference/enum/EntryType.html#stream).
 */
export type EntryStreamRecentEntriesArgs = {
  pageNumber?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};

/** Provides a table of data with optional interactive features. */
export type EntryTable = {
  __typename?: 'EntryTable';
  /** A caption describing the table contents. */
  caption: Maybe<RichText>;
  /** An array of column headers. */
  columns: Array<Scalars['String']>;
  /** A credit for the table data. */
  credit: Maybe<RichText>;
  /**
   * A two-dimensional array representing rows of the table body.
   * Each row's length matches the length of `columns`.
   */
  rows: Array<Array<Scalars['String']>>;
  /** Specifies whether to include search field. */
  searchable: Scalars['Boolean'];
  /** Specifies sorting criteria for this table, when present. */
  sort: Maybe<EntryTableSort>;
  /** The style of this table. */
  style: Scalars['String'];
  /** The title of this table. */
  title: Scalars['String'];
};

/** Provides sorting configuration for an [`EntryTable`](/docs/reference/object/EntryTable). */
export type EntryTableSort = {
  __typename?: 'EntryTableSort';
  /** The numeric index of a column to sort by default. */
  columnIndex: Scalars['Int'];
  /** Specifies when sorting should use descending order. */
  descending: Scalars['Boolean'];
};

/** A promotional tweet for automatic dispatch when its entry is published. */
export type EntryTweet = {
  __typename?: 'EntryTweet';
  /** The Twitter account handle for the tweet. */
  handle: Scalars['String'];
  /**
   * Specifies if the tweet should include an image.
   * When enabled, we recommend using `Entry.socialImage` or a [preferred fallback](/docs/guides/using-entry-images#selecting-entry-meta-images).
   */
  includeImage: Scalars['Boolean'];
  /** The text of the tweet. */
  text: Maybe<Scalars['String']>;
};

/**
 * Defines possible `Entry` content types.
 * An entry's type is derived from major editorial features that the entry incorporates,
 * and will generally influence the entry's presentation layout.
 */
export enum EntryType {
  /** This entry is managed by the custom story-telling kit. */
  CustomStory = 'CUSTOM_STORY',
  /** This entry has a custom redirect URL. Useful for placing third-party links onto a hub page. */
  Link = 'LINK',
  /** This entry features an interactive map component. */
  MapStack = 'MAP_STACK',
  /** This entry acts as a landing page for a collection of related entries. Packages may publish all of their child entries at once. */
  Package = 'PACKAGE',
  /** This entry is a static page with timeless content such as an "about" page or community guidelines. */
  Page = 'PAGE',
  /** This entry has limited fields and is published as part of a kind of twitter-like timeline */
  QuickPost = 'QUICK_POST',
  /** A standard entry without any special high-level editorial features. */
  Story = 'STORY',
  /** This entry acts as an aggregator for additional entries published on the same subject. Useful for curating developing stories and live coverage. */
  Stream = 'STREAM'
}

/**
 * Identify an existing [`Entry`](/docs/reference/object/Entry.html) by a unique key.
 * Exactly one field must be specified.
 */
export type EntryUniqueKeyInput = {
  /** An identifier provided by an external system. */
  externalId: InputMaybe<Scalars['ID']>;
  /** An internal numeric identifier. */
  id: InputMaybe<Scalars['Int']>;
  /** A unique identifier set by Chorus. */
  uid: InputMaybe<Scalars['ID']>;
  /** An internal string identifier that conforms to RFC 4122. */
  uuid: InputMaybe<Scalars['String']>;
};

export type EntryUnpublishedEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: EntryEventSubjectInput;
};

/**
 * Input used to update an existing [`Entry`](/docs/reference/object/Entry.html).
 * The requested changes will be immediately published.
 */
export type EntryUpdateInput = {
  /** Change or set a formatted text string to use in the byline in addition to `author` and `contributors`. */
  additionalContributors: InputMaybe<RichTextInput>;
  /** Set a different [`User`](/docs/reference/object/User.html) as the primary author. */
  author: InputMaybe<UserUniqueKeyInput>;
  /** Update the body contents. */
  body: InputMaybe<EntryBodyUpdateInput>;
  /** A custom URL to include in a <meta rel="canonical"> tag. Useful for republishing offsite content. */
  canonicalUrlOverride: InputMaybe<Scalars['URL']>;
  /** Whether comments should be closed when rendering on the web */
  commentsClosed: InputMaybe<Scalars['Boolean']>;
  /** Modify associations with [`Community`](/docs/reference/object/Community.html)-scoped [`EntryGroup`](/docs/reference/object/EntryGroup.html)s. */
  communityGroupMemberships: InputMaybe<EntryGroupMembershipCollectionInput>;
  /** Modify the list of [`User`](/docs/reference/object/User.html)s associated as secondary contributors. */
  contributors: InputMaybe<EntryUserAssociationListInput>;
  /** A list of custom toggle fields to change by name */
  customFieldFlags: InputMaybe<Array<EntryCustomFieldFlagInput>>;
  /** A list of custom text fields to change by name */
  customFieldTexts: InputMaybe<Array<EntryCustomFieldTextInput>>;
  /** Change or set the subheadline which appears beneath the main headline on the entry page. */
  dek: InputMaybe<RichTextInput>;
  /**
   * Replace any currently set externally-supplied IDs with the input. Each ID take the form of `{namespace}:{id}`,
   * The `{namespace}` and `{id}` segments may only contain ASCII alphanumeric characters, dashes, and underscores (`[a-zA-Z0-9_-]`).
   */
  externalIds: InputMaybe<ExternalIdCollectionInput>;
  /** Specifies the layout template to use for an entry. */
  layoutTemplate: InputMaybe<EntryLayoutTemplate>;
  /** Create or modify the [`EntryImage`](/docs/reference/object/EntryImage.html) to use in the lead position. */
  leadImage: InputMaybe<EntryImageInput>;
  /** Modify associations with [`Network`](/docs/reference/object/Network.html)-scoped [`EntryGroup`](/docs/reference/object/EntryGroup.html)s. */
  networkGroupMemberships: InputMaybe<EntryGroupMembershipCollectionInput>;
  /** Change the password used to govern public access to view the Entry. */
  password: InputMaybe<PlainTextInput>;
  /** Change the SEO keywords segment of the [`Entry`](/docs/reference/object/Entry.html) URL. */
  permalink: InputMaybe<PlainTextInput>;
  /**
   * Change the primary [`Community`](/docs/reference/object/Community.html)-scoped [`EntryGroup`](/docs/reference/object/EntryGroup.html).
   * This [`EntryGroup`](/docs/reference/object/EntryGroup.html) will be implicitly added to the `communityGroups` collection if needed.
   */
  primaryCommunityGroup: InputMaybe<EntryGroupUniqueKeyInput>;
  /**
   * Change the primary [`Network`](/docs/reference/object/Network.html)-scoped [`EntryGroup`](/docs/reference/object/EntryGroup.html).
   * This [`EntryGroup`](/docs/reference/object/EntryGroup.html) will be implicitly added to the `networkGroups` collection if needed.
   */
  primaryNetworkGroup: InputMaybe<EntryGroupUniqueKeyInput>;
  /** Set a date for when an entry article will run to print. */
  printPublicationDate: InputMaybe<Scalars['Date']>;
  /** Set a slug used to identify this entry if it is sent to print. */
  printSlug: InputMaybe<PlainTextInput>;
  /** Change or set a short summary to use in promotional contexts within Chorus. */
  promoDescription: InputMaybe<RichTextInput>;
  /** Change or set a headline to use in promotional contexts within Chorus. */
  promoHeadline: InputMaybe<PlainTextInput>;
  /** Change or create an [`EntryImage`](/docs/reference/object/EntryImage.html) to use in promotional contexts within Chorus. */
  promoImage: InputMaybe<EntryImageInput>;
  /** Change the date and time of publish shown to audiences. Must be in the past. Defaults to now. */
  publishDate: InputMaybe<Scalars['DateTime']>;
  /** Set a date when the Entry will become hidden. */
  scheduledForExpirationAt: InputMaybe<Scalars['DateTime']>;
  /** Change or set a short summary to use in search engine metadata. */
  seoDescription: InputMaybe<RichTextInput>;
  /** Change or set a headline to use in search engine metadata. */
  seoHeadline: InputMaybe<PlainTextInput>;
  /** Change or create an `EntryImage` to use in search engine metadata. */
  seoImage: InputMaybe<EntryImageInput>;
  /** Whether a `<meta name="robots" content="nofollow">` tag should be included when rendering on the web. */
  shouldUseHTMLNofollow: InputMaybe<Scalars['Boolean']>;
  /** Whether a `<meta name="robots" content="noindex">` tag should be included when rendering on the web. */
  shouldUseHTMLNoindex: InputMaybe<Scalars['Boolean']>;
  /** Change or set a short summary to use in social metadata. */
  socialDescription: InputMaybe<RichTextInput>;
  /** Change or set a short summary to use in social metadata. */
  socialHeadline: InputMaybe<PlainTextInput>;
  /** Change or create an `EntryImage` object to use in social metadata. */
  socialImage: InputMaybe<EntryImageInput>;
  /** Modify the main headline. */
  title: InputMaybe<PlainTextInput>;
};

/** Returned when the `updateEntry` mutation completed successfully. */
export type EntryUpdateResult = {
  __typename?: 'EntryUpdateResult';
  /** The Entry that was updated. */
  entry: Entry;
};

/** Input used to either create or update an [`Entry`](/docs/reference/object/Entry.html) matching an `externalId`. */
export type EntryUpsertByExternalIdInput = {
  /** Input used to create a new [`Entry`](/docs/reference/object/Entry.html). */
  create: EntryCreateInput;
  /**
   * Used to either look up an existing [`Entry`](/docs/reference/object/Entry),
   * or else create a new Entry if one was not found.
   * In the latter case, this ID will be automatically associated with the new record.
   */
  externalId: Scalars['ID'];
  /** Input used to update an existing [`Entry`](/docs/reference/object/Entry.html). */
  update: InputMaybe<EntryUpdateInput>;
};

/** Returned when the `upsertEntryByExternalId` mutation completed successfully. */
export type EntryUpsertByExternalIdResult = {
  __typename?: 'EntryUpsertByExternalIdResult';
  /** The Entry that was either created or updated. */
  entry: Entry;
  /** Whether the entry was created (true) or updated (false). */
  isNew: Scalars['Boolean'];
};

/**
 * Specify an operation to apply to a list of associated [`User`](/docs/reference/object/User.html) objects.
 * Exactly one field must be specified.
 */
export type EntryUserAssociationListInput = {
  /** Add one or more components to the end of the list. */
  append: InputMaybe<Array<UserUniqueKeyInput>>;
  /** Overwrite the entire list. */
  assign: InputMaybe<Array<UserUniqueKeyInput>>;
  /** Overwrite the entire list only if it is empty (`[]`). */
  assignIfBlank: InputMaybe<Array<UserUniqueKeyInput>>;
  /** Apply a list patch in order to insert, remove, or move users in the list. */
  patch: InputMaybe<Array<EntryUserAssociationListPatchInput>>;
  /** Add one or more components to the beginning of the list. */
  prepend: InputMaybe<Array<UserUniqueKeyInput>>;
};

/**
 * Specify an operation to apply at a particular offset in a list of associated [`User`](/docs/reference/object/User.html) objects.
 * A list of these inputs constitutes a `list patch`, which is a convenient way to make multiple edits to a list in a single pass.
 * See the guide on [list patches](/docs/guides/list-patches.md) for more details.
 * Exactly one field must be specified.
 */
export type EntryUserAssociationListPatchInput = {
  /**
   * Remove a single user association from the list and place it into the clipboard with the given key.
   * The same key cannot be used in more than one `cut` operation in a single patch.
   */
  cut: InputMaybe<Scalars['String']>;
  /** Insert a new user association at the current offset. */
  insert: InputMaybe<UserUniqueKeyInput>;
  /** Skip over a number of user associations in the list. */
  keep: InputMaybe<Scalars['Int']>;
  /**
   * Insert a single user association from the clipboard by the given key.
   * The same key cannot be used in more than one `paste` operation in a single patch.
   */
  paste: InputMaybe<Scalars['String']>;
  /** Remove a number of user associations from the list. */
  remove: InputMaybe<Scalars['Int']>;
  /** Update the user at the current offset. */
  update: InputMaybe<UserUniqueKeyInput>;
};

/**
 * Provides a video record managed by Chorus Video.
 * This is a formal platform integration with tracked placements and analytics
 * (versus a generic third-party embed such as a YouTube video placed via
 * [`EntryBodyEmbed`](/docs/reference/object/EntryBodyEmbed.html)).
 */
export type EntryVideo = {
  __typename?: 'EntryVideo';
  /**
   * An internal key used to find this record in Volume.
   * May be a valid uid or a default reference formatted as `EntryVideo:12345/default`
   * @deprecated stitching use only
   */
  _key: Scalars['ID'];
  /** A numeric aspect ratio calculated as `width / height`; e.g., `1.78` for a 16x9 video. */
  aspectRatio: Maybe<Scalars['Float']>;
  /** The Volume VideoAsset associated with the EntryVideo. */
  asset: VideoAsset;
  /** A list of credits */
  credits: Maybe<Array<Maybe<VideoCredit>>>;
  /** A description of the video content. */
  description: Maybe<Scalars['String']>;
  /** The video duration in milliseconds. */
  duration: Maybe<Scalars['Int']>;
  /** Height of the original video source. */
  height: Maybe<Scalars['Int']>;
  /** The URL of a [HTTP Live Streaming (HLS)](https://developer.apple.com/streaming/) playlist. */
  hlsUrl: Maybe<Scalars['URL']>;
  /**
   * The URL of the original video file upload.
   * This is a raw source file and not intended for live use.
   */
  originalUrl: Maybe<Scalars['URL']>;
  /** Provides hosted player embed information for this video. */
  player: Maybe<EntryVideoPlayer>;
  /** Provides the video's poster image. */
  poster: Maybe<EntryVideoImage>;
  /** The URL of a [SubRip Subtitles (SRT)](https://en.wikipedia.org/wiki/SubRip) captioning file. */
  srtCaptionUrl: Maybe<Scalars['URL']>;
  /** The title of the video. */
  title: Maybe<Scalars['String']>;
  /**
   * A list of web-optimized MP4 file URLs [transcoded](https://en.wikipedia.org/wiki/Transcoding) from the original video source.
   * These URLs are always sorted in descending bitrate order, with the highest quality renditions first.
   */
  transcodedMp4Urls: Maybe<Array<Scalars['URL']>>;
  /** The player type associated with this video rendition. */
  type: EntryVideoType;
  /** The unique idenfifier for this entry video. */
  uid: Scalars['ID'];
  /** The public unique identifier for this entry.  */
  uuid: Scalars['ID'];
  /** The URL of a [Web Video Text Tracks (VTT)](https://en.wikipedia.org/wiki/WebVTT) captioning file. */
  vttCaptionUrl: Maybe<Scalars['URL']>;
  /** Width of the original video source. */
  width: Maybe<Scalars['Int']>;
};

/**
 * Create a new association to an [`EntryVideo`](/docs/reference/object/EntryVideo.html).
 * Exactly one field must be specified.
 */
export type EntryVideoAssociationCreateInput = {
  /** Associate with an existing [`EntryVideo`](/docs/reference/object/EntryVideo.html). */
  connect: InputMaybe<EntryVideoUniqueKeyInput>;
};

export type EntryVideoImage = {
  __typename?: 'EntryVideoImage';
  /** The URL of the original image upload. */
  url: Scalars['URL'];
  /**
   * Generates a scaled and/or [art directed](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#Art_direction)
   * variant URL for this image with its editorial crop applied. This method may be repeatedly [aliased](https://graphql.org/learn/queries/#aliases)
   * with different parameters to request many URLs of varying sizes, aspect ratios, and encodings.
   */
  variantUrl: Maybe<Scalars['URL']>;
};


export type EntryVideoImageVariantUrlArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  format?: InputMaybe<EntryImageVariantFormat>;
  width: Scalars['Int'];
};

/** Represents a video player embed. */
export type EntryVideoPlayer = {
  __typename?: 'EntryVideoPlayer';
  /** The HTML embed snippet for this player embed. */
  embedHtml: Scalars['String'];
  /** The permalink of this player embed. */
  url: Scalars['URL'];
};

/** The source type associated with an `EntryVideo`. */
export enum EntryVideoType {
  /** A video distributed on [Apple News](https://www.apple.com/apple-news/). */
  AppleNews = 'APPLE_NEWS',
  /** A video sourced from [Brightcove](https://www.brightcove.com/en/). */
  Brightcove = 'BRIGHTCOVE',
  /** A video sourced from [Chorus Video](https://getchorus.voxmedia.com/). */
  Chorus = 'CHORUS',
  /** A video sourced from [Facebook](https://facebook.com/). */
  Facebook = 'FACEBOOK',
  /** A video sourced from [YouTube](https://youtube.com/). */
  Youtube = 'YOUTUBE'
}

/**
 * Identify an existing [`EntryVideo`](/docs/reference/object/EntryVideo.html) by a unique key.
 * Exactly one field must be specified.
 */
export type EntryVideoUniqueKeyInput = {
  /** A unique identifier set by Chorus. */
  uid: InputMaybe<Scalars['ID']>;
};

/**
 * The types of errors this API can return. Each of these keys will be set as an
 * 'errorType' property on the error object, in addition to the human-readable
 * 'message' property that provides more details when possible.
 */
export enum Error {
  /** Returned when the currentUser is not permitted to perform the given query or mutation. */
  Authorization = 'AUTHORIZATION',
  /** Returned when the currentUser is not permitted to perform the given query or mutation. */
  Authorization = 'Authorization',
  /** An unexpected error occurred. No additional information is available. */
  Unexpected = 'UNEXPECTED',
  /** An unexpected error occurred. No additional information is available. */
  Unexpected = 'Unexpected',
  /** Returned when the input provided for a query or mutation is invalid. */
  Validation = 'VALIDATION',
  /** Returned when the input provided for a mutation is invalid. */
  Validation = 'Validation'
}

export type EventResult = {
  __typename?: 'EventResult';
  id: Scalars['ID'];
};

/** Specify changes to a collection of ID. The order of items in the collection is not meaningful. */
export type ExternalIdCollectionInput = {
  /** Add new IDs to the collection. Adding an ID which already exists in this collection is a no-op. */
  add: InputMaybe<Array<Scalars['ID']>>;
  /** Replace all current IDs with new ones. Cannot be used in conjunction with the `add` or `remove` inputs. */
  assign: InputMaybe<Array<Scalars['ID']>>;
  /** Remove existing IDs from the collection. Removing an ID which is not in the collection is a no-op. */
  remove: InputMaybe<Array<Scalars['ID']>>;
};

export type Feed = {
  __typename?: 'Feed';
  allowPaging: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  publishedWithin: Maybe<Scalars['Int']>;
  sortBy: Scalars['Int'];
  syndicationPartner: Maybe<SyndicationPartner>;
  tagWithSeries: Scalars['Boolean'];
  templateKey: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  urlSegment: Maybe<Scalars['String']>;
  /** Nested FeedAsset for a specific Video Project */
  videoFeedAsset: Maybe<VideoAsset>;
  videoProvider: Maybe<VideoProvider>;
};


export type FeedVideoFeedAssetArgs = {
  videoId: InputMaybe<Scalars['Int']>;
};

export type FileLocation = {
  __typename?: 'FileLocation';
  expiresAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Forum = {
  __typename?: 'Forum';
  community: Community;
  communityId: Scalars['Int'];
  createdOn: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  open: Scalars['Boolean'];
  provisionalWaitPeriod: Scalars['Int'];
  slug: Scalars['String'];
  url: Scalars['String'];
};

export type ForumMembership = {
  __typename?: 'ForumMembership';
  forum: Forum;
  forumId: Scalars['Int'];
  joinedOn: Scalars['DateTime'];
  lastVisitedOn: Scalars['DateTime'];
  statusId: Scalars['Int'];
};

/** Google AMP logo details */
export type GoogleAmpLogo = {
  __typename?: 'GoogleAmpLogo';
  height: Scalars['Int'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

/**
 * A single "WHERE" condition used in the context
 * of a HermanoResourceSearchQuery.
 */
export type HermanoResourceSearchCondition = {
  /** Field must equal to one of the given values */
  anyOf: InputMaybe<Array<Scalars['Any']>>;
  /**
   * Field must be greater than the first item in the given array and
   * less than the second item (numeric and date fields only)
   */
  between: InputMaybe<Array<Scalars['Any']>>;
  /** Field must be equal to the given value */
  equal: InputMaybe<Scalars['Any']>;
  /** Name of the field this condition applies to */
  field: InputMaybe<Scalars['String']>;
  /** Field must be greater than the given value (numeric and date fields only) */
  greaterThan: InputMaybe<Scalars['Any']>;
  /** When true, field must be equal to null. When false, field must have a non-null value. */
  isNull: InputMaybe<Scalars['Boolean']>;
  /** Field must be less than the given value (numeric and date fields only) */
  lessThan: InputMaybe<Scalars['Any']>;
};

/**
 * The common query format for searching/filtering Hermano resources.
 *
 * If the `keywords`, `whereAny`, and `whereAll` params are used together,
 * they all apply, using AND semantics.
 */
export type HermanoResourceSearchQuery = {
  /** Results must match the keywords */
  keywords: InputMaybe<Scalars['String']>;
  /**
   * Name of field to order results by. for example:
   * * name
   * * name,asc
   * * name,desc
   *
   * ('asc' ordering is default)
   */
  orderBy: InputMaybe<Scalars['String']>;
  pageNumber: InputMaybe<Scalars['Int']>;
  perPage: InputMaybe<Scalars['Int']>;
  /** Results must meet ALL of the given conditions */
  whereAll: InputMaybe<Array<HermanoResourceSearchCondition>>;
  /** Results must meet at least ONE of the given conditions */
  whereAny: InputMaybe<Array<HermanoResourceSearchCondition>>;
};

/** A HubPage is a curated view of a single [`EntryGroup`](/docs/reference/object/EntryGroup.html). A HubPage can be controlled by editorial users using the hub layout tool. It can be configured to automatically display recent entries from its group or to pin HubPagePlaceables in specific slots. */
export type HubPage = {
  __typename?: 'HubPage';
  /** The breaking news banner for this hub page. */
  breakingNewsBanner: Maybe<HubPageBreakingNewsBanner>;
  /** The community this hub page belongs to. */
  community: Maybe<Community>;
  /** The entry group associated with this hub page. */
  entryGroup: Maybe<EntryGroup>;
  /** Fetch the first {heroPlacementCount} placeables. */
  heroPlaceables: Array<Maybe<HubPagePlaceable>>;
  /**
   * The number of slots designated for hero placements in this hub page's template.
   * Hero slots always come before any other slots.
   */
  heroPlacementCount: Scalars['Int'];
  /** Fetch the first {heroPlacementCount} placements. */
  heroPlacements: Array<Maybe<HubPagePlacement>>;
  /** An internal identifier for this hub page. */
  id: Scalars['Int'];
  /** Indicates if this hub page is the front page. */
  isFrontPage: Scalars['Boolean'];
  /** Indicates which of the available templates has been chosen. */
  layoutTemplateKey: Maybe<Scalars['ID']>;
  /** The date and time when the placements of this hub page were last updated. */
  layoutUpdatedAt: Maybe<Scalars['DateTime']>;
  /** Fetch the placeable at a given slot. */
  placeable: Maybe<HubPagePlaceable>;
  /** A list of all placeable content items present on this hub page, optionally exclude placeables from the results. */
  placeables: Array<Maybe<HubPagePlaceable>>;
  /** Fetch the placement at a given slot. */
  placement: Maybe<HubPagePlacement>;
  /** The total number of slots available for content items on this hub page. */
  placementCount: Scalars['Int'];
  /** A list of placement labels of this hub page. */
  placementLabels: Array<Maybe<Scalars['String']>>;
  /** A list of all the placements present on this hub page. */
  placements: Array<Maybe<HubPagePlacement>>;
  /** The SEO schema data for the front page. */
  seoSchema: Array<Scalars['JSON']>;
  /** The path URL segment of this hub page. */
  slug: Maybe<Scalars['String']>;
  /** The hub page title. */
  title: Maybe<Scalars['String']>;
  /** A unique identifier for this hub page. */
  uid: Scalars['ID'];
  /** The HTTP URL of this hub page. */
  url: Maybe<Scalars['String']>;
  /** The relative URL of this hub page. */
  urlPath: Maybe<Scalars['String']>;
  /** A number that is incremented any time this hub page is modified. Useful for including in cache keys. */
  version: Scalars['Int'];
};


/** A HubPage is a curated view of a single [`EntryGroup`](/docs/reference/object/EntryGroup.html). A HubPage can be controlled by editorial users using the hub layout tool. It can be configured to automatically display recent entries from its group or to pin HubPagePlaceables in specific slots. */
export type HubPagePlaceableArgs = {
  slot: InputMaybe<Scalars['Int']>;
};


/** A HubPage is a curated view of a single [`EntryGroup`](/docs/reference/object/EntryGroup.html). A HubPage can be controlled by editorial users using the hub layout tool. It can be configured to automatically display recent entries from its group or to pin HubPagePlaceables in specific slots. */
export type HubPagePlaceablesArgs = {
  excludeTypes: InputMaybe<Array<HubPagePlaceableExcludeType>>;
  limit: InputMaybe<Scalars['Int']>;
};


/** A HubPage is a curated view of a single [`EntryGroup`](/docs/reference/object/EntryGroup.html). A HubPage can be controlled by editorial users using the hub layout tool. It can be configured to automatically display recent entries from its group or to pin HubPagePlaceables in specific slots. */
export type HubPagePlacementArgs = {
  slot: Scalars['Int'];
};


/** A HubPage is a curated view of a single [`EntryGroup`](/docs/reference/object/EntryGroup.html). A HubPage can be controlled by editorial users using the hub layout tool. It can be configured to automatically display recent entries from its group or to pin HubPagePlaceables in specific slots. */
export type HubPagePlacementLabelsArgs = {
  limit: InputMaybe<Scalars['Int']>;
};


/** A HubPage is a curated view of a single [`EntryGroup`](/docs/reference/object/EntryGroup.html). A HubPage can be controlled by editorial users using the hub layout tool. It can be configured to automatically display recent entries from its group or to pin HubPagePlaceables in specific slots. */
export type HubPagePlacementsArgs = {
  limit: InputMaybe<Scalars['Int']>;
};

/** A banner displayed on a [`HubPage`](/docs/reference/object/HubPage) useful for featuring a breaking story or link to a livestream. */
export type HubPageBreakingNewsBanner = {
  __typename?: 'HubPageBreakingNewsBanner';
  /** The main text of the banner. */
  content: Maybe<Scalars['String']>;
  /** A short description to appear before the content, e.g. "Breaking News" or "Live Video". */
  label: Maybe<Scalars['String']>;
  /** The HTTP URL to the breaking story. If set, the content text of this banner should be a link with this URL as the target, e.g. `<a href="{url}"> {content} </a>`. */
  url: Maybe<Scalars['URL']>;
};

export type HubPageCreatedEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: HubPageEventSubjectInput;
};

export type HubPageDestroyedEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: HubPageEventSubjectInput;
};

export type HubPageEventSubjectInput = {
  communityUid: Scalars['ID'];
  entryGroupUid: Scalars['ID'];
  layoutTemplateKey: Scalars['String'];
  networkUid: Scalars['ID'];
  organizationUid: Scalars['ID'];
  uid: Scalars['ID'];
  version: Scalars['Int'];
};

/**
 * One portion of results from a paginated HubPage search.
 *
 * At most `perPage` results are included, according to the corresponding input parameter.
 *
 * The first result has the offset `pageNumber * (perPage - 1)` in the full result set.
 */
export type HubPagePage = {
  __typename?: 'HubPagePage';
  /** The page number of the current page. */
  pageNumber: Scalars['Int'];
  /** The limit on results per page. */
  perPage: Scalars['Int'];
  /** A list of HubPage results in this page. */
  results: Array<Maybe<HubPage>>;
  /** The total count of HubPages in the result set. */
  totalCount: Scalars['Int'];
};

/**
 * An [`Entry`](/docs/reference/object/Entry.html) or [`EntryGroup`](/docs/reference/object/EntryGroup.html) that is placed on a [HubPage](/docs/reference/object/HubPage.html).
 * Entry is the most common kind of HubPagePlaceable, but EntryGroups themselves can also be placed onto a HubPage (the intent is typically to highlight recent content from other EntryGroups).
 */
export type HubPagePlaceable = {
  /** All the hub pages that this item appears on. Includes both pinned and unpinned placements. */
  hubPagePlacements: Array<Maybe<HubPagePlacement>>;
  /** A unique identifier for this placeable. */
  uid: Scalars['ID'];
  /** A URL for this placeable. */
  url: Scalars['URL'];
};

/**
 * Specifies possible placeable types to exclude from
 * [`HubPage.placeables`](/docs/reference/object/HubPage/#placeables-hubpageplaceable)
 */
export enum HubPagePlaceableExcludeType {
  /** Specifies an EntryGroup placeable type */
  EntryGroup = 'ENTRY_GROUP',
  /** Specifies a QuickPost placeable type */
  QuickPost = 'QUICK_POST'
}

/** The connection between a HubPagePlaceable and the HubPage it's placed on. Includes metadata about the placement itself. */
export type HubPagePlacement = {
  __typename?: 'HubPagePlacement';
  /** The community this placement comes from, if the placement is a cross posted entry (either through a LinkPost or via the hub layout tool). */
  crossPostCommunity: Maybe<Community>;
  /** Which HubPage this placement belongs to. */
  hubPage: Maybe<HubPage>;
  /** The label assigned to this slot by the hub page's template. */
  label: Maybe<Scalars['String']>;
  /** Whether this placement is static (true), or will dynamically update as entries are published in the entry group associated with the hub page. */
  pinned: Scalars['Boolean'];
  /** The item of content that is referenced by this placement. */
  placeable: Maybe<HubPagePlaceable>;
  /** An index indicating the order that this placement appears among all the placements on the same hub page. */
  slot: Scalars['Int'];
};

export type HubPagePlacementsUpdatedEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: HubPageEventSubjectInput;
};

export type HubPageTemplateUpdatedEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: HubPageEventSubjectInput;
};

export type HubPageUpdatedEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: HubPageEventSubjectInput;
};

export type LegacySlug = {
  __typename?: 'LegacySlug';
  community: Community;
  communityId: Scalars['Int'];
  /** The ID of the destination entry */
  entryId: Scalars['Int'];
  /** The format of the destination entry */
  format: LegacySlugFormat;
  id: Scalars['Int'];
  /** The origin path of the redirect */
  slug: Scalars['String'];
};

export enum LegacySlugFormat {
  Amp = 'AMP',
  Html = 'HTML'
}

/**
 * A customizable grouping of [`LinkSetLink`](/docs/reference/object/LinkSetLink.html) normally
 * displayed after the body of a story to highlight related stories.
 * An Entry can have one LinkSet while Community may contain several LinkSets.
 * Note: Communities may have only one default link set and one override link set.
 */
export type LinkSet = {
  __typename?: 'LinkSet';
  /** HTML embed code for linkset media */
  embedCode: Maybe<Scalars['String']>;
  /** EntryGroup associated with this linkset */
  entryGroup: Maybe<EntryGroup>;
  /** The id of this link set. */
  id: Scalars['Int'];
  /**
   * Indicates if this link set is default. Editors can set this for a Community
   * as a fall back for when stories do not have their own link set.
   */
  isDefault: Scalars['Boolean'];
  /**
   * Indicates if this link set is override. Editors can set this for a Community
   * to force all stories to share this link set.
   */
  isOverride: Scalars['Boolean'];
  /** A list of links in this link set. */
  links: Maybe<Array<LinkSetLink>>;
  /** The name of this link set. */
  name: Scalars['String'];
  /** The mode in which links have been populated */
  populateMode: LinkSetPopulateMode;
  /** The unique identifier of this link set. */
  uid: Scalars['ID'];
};

export type LinkSetCreatedEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: LinkSetEventSubjectInput;
};

export type LinkSetDestroyedEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: LinkSetEventSubjectInput;
};

export type LinkSetEventSubjectInput = {
  communityUid: Scalars['ID'];
  networkUid: Scalars['ID'];
  ordinal: InputMaybe<Scalars['Int']>;
  organizationUid: Scalars['ID'];
  uid: Scalars['ID'];
};

/** A link belonging to a [`LinkSet`](/docs/reference/object/LinkSet.html). */
export type LinkSetLink = {
  __typename?: 'LinkSetLink';
  /** The display name of this link. */
  name: Scalars['String'];
  /**
   * This link's ordinal position within the sorted list.
   * Ordinals are not guarenteed to be contiguous across a collection of links.
   */
  ordinal: Scalars['Int'];
  /** The HTTP URL of this link. */
  url: Scalars['String'];
};

export type LinkSetLinkCreatedEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: LinkSetEventSubjectInput;
};

export type LinkSetLinkDestroyedEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: LinkSetEventSubjectInput;
};

export type LinkSetLinkUpdatedEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: LinkSetEventSubjectInput;
};

/**
 * One portion of results from a paginated LinkSet query. i.e. The return type of the `Community.linkSets` field.
 *
 * At most `perPage` results are included, according to the corresponding input parameter (see [`Community.linkSets`](/docs/reference/object/Community.html#linksets-linksetpage)).
 *
 * The first result has the offset `perPage * (pageNumber - 1)` in the full result set.
 */
export type LinkSetPage = {
  __typename?: 'LinkSetPage';
  /** The page number of the current page. */
  pageNumber: Scalars['Int'];
  /** The limit on results per page. */
  perPage: Scalars['Int'];
  /** A list of LinkSet results of this link set page. */
  results: Array<Maybe<LinkSet>>;
  /** The total number of link sets in the result set. */
  totalCount: Scalars['Int'];
};

/** Specifies modes in which the [`LinkSet`](/docs/reference/object/LinkSet.html) is populated */
export enum LinkSetPopulateMode {
  /** LinkSet is populated manually */
  Manual = 'MANUAL',
  /** LinkSet is populated dynamically from most recent entries */
  MostRecent = 'MOST_RECENT'
}

export type LinkSetUpdatedEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: LinkSetEventSubjectInput;
};

/**
 * Stories are tagged with LiveCoverageEvent for integration with Google's
 * structured data results. aka LiveCoverage::Event in Hermano.
 */
export type LiveCoverageEvent = {
  __typename?: 'LiveCoverageEvent';
  awayTeam: Maybe<Scalars['String']>;
  category: Maybe<Scalars['String']>;
  competitors: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  draft: Scalars['Boolean'];
  externalForeignKey: Scalars['String'];
  hideFromAutotagger: Scalars['Boolean'];
  homeTeam: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
  startTime: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  venueLocation: Maybe<Scalars['String']>;
  venueName: Maybe<Scalars['String']>;
};

export type LiveCoverageEventPage = {
  __typename?: 'LiveCoverageEventPage';
  pageNumber: Scalars['Int'];
  results: Array<Maybe<LiveCoverageEvent>>;
  totalCount: Scalars['Int'];
};

/**
 * City or region-sized locations, the broadest type of geo data.
 * aka Geo::Locale in Hermano.
 */
export type Locale = {
  __typename?: 'Locale';
  abbreviation: Scalars['String'];
  continent: Scalars['String'];
  createdAt: Scalars['DateTime'];
  draft: Scalars['Boolean'];
  externalForeignKey: Scalars['String'];
  hideFromAutotagger: Scalars['Boolean'];
  id: Scalars['Int'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  name: Scalars['String'];
  radiusKm: Scalars['Float'];
  searchBuildings: Maybe<BuildingPage>;
  searchNeighborhoods: Maybe<NeighborhoodPage>;
  searchPlaces: Maybe<PlacePage>;
  searchShoppingDeals: Maybe<ShoppingDealPage>;
  searchVenues: Maybe<VenuePage>;
  slug: Scalars['String'];
  timezone: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  widename: Maybe<Scalars['String']>;
};


/**
 * City or region-sized locations, the broadest type of geo data.
 * aka Geo::Locale in Hermano.
 */
export type LocaleSearchBuildingsArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


/**
 * City or region-sized locations, the broadest type of geo data.
 * aka Geo::Locale in Hermano.
 */
export type LocaleSearchNeighborhoodsArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


/**
 * City or region-sized locations, the broadest type of geo data.
 * aka Geo::Locale in Hermano.
 */
export type LocaleSearchPlacesArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


/**
 * City or region-sized locations, the broadest type of geo data.
 * aka Geo::Locale in Hermano.
 */
export type LocaleSearchShoppingDealsArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


/**
 * City or region-sized locations, the broadest type of geo data.
 * aka Geo::Locale in Hermano.
 */
export type LocaleSearchVenuesArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};

export type LocalePage = {
  __typename?: 'LocalePage';
  pageNumber: Scalars['Int'];
  results: Array<Locale>;
  totalCount: Scalars['Int'];
};

/** Represents a single map point within an `Entry` of type `MAP_STACK`. */
export type MapCard = {
  __typename?: 'MapCard';
  address: Maybe<Scalars['String']>;
  caption: Maybe<RichText>;
  embed: Maybe<EntryEmbed>;
  googlePlaceId: Maybe<Scalars['String']>;
  image: Maybe<EntryImage>;
  latitude: Maybe<Scalars['Float']>;
  longitude: Maybe<Scalars['Float']>;
  name: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  url: Maybe<Scalars['URL']>;
  venueId: Maybe<Scalars['Int']>;
  video: Maybe<EntryVideo>;
};

/** A User's Member Profile on a given community - /users/[username] */
export type MemberProfile = UserProfile & {
  __typename?: 'MemberProfile';
  /** A brief description of the user that appears on their profile page. */
  bio: Maybe<Scalars['String']>;
  /**
   * Number of comments the user has posted
   * across all communities on this network
   */
  commentCount: Scalars['Int'];
  /** The community this member profile belongs to. */
  community: Community;
  /** The URL of an image suitable for use on a public profile page for this user. */
  imageUrl: Maybe<Scalars['URL']>;
  /** Date the user joined the network associated with the current community */
  joinedOn: Scalars['DateTime'];
  /** Date the user last logged into Chorus */
  lastLoginAt: Maybe<Scalars['DateTime']>;
  /** The user's `full_name` if they are an author on this community. Otherwise, the user's `username`. */
  name: Scalars['String'];
  /** User's slug -- vanity portion of the URL */
  slug: Maybe<Scalars['String']>;
  /** A list of social links for this member profile. */
  socialLinks: Array<SocialLink>;
  /** A title badge that appears next to posted comments, only available to trusted users. */
  title: Maybe<Scalars['String']>;
  /**
   * Number of user-generated content entries the user has posted
   * across all communities on this network
   */
  ugcEntryCount: Scalars['Int'];
  /** The URL where this member profile may be viewed. */
  url: Scalars['URL'];
  /** The user behind this member profile. */
  user: User;
};

/** A future or past MMA Event (e.g. UFC 199). aka SbnMma::Event in Hermano. */
export type MmaEvent = {
  __typename?: 'MmaEvent';
  coverImageUrl: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description: Maybe<Scalars['String']>;
  draft: Scalars['Boolean'];
  externalForeignKey: Scalars['String'];
  fights: Array<MmaFight>;
  headlineFight: Maybe<MmaFight>;
  headlineFightId: Maybe<Scalars['Int']>;
  hideFromAutotagger: Scalars['Boolean'];
  id: Scalars['Int'];
  legacyId: Maybe<Scalars['Int']>;
  location: Maybe<Scalars['String']>;
  name: Scalars['String'];
  promotion: Maybe<MmaPromotion>;
  promotionId: Maybe<Scalars['Int']>;
  shortName: Scalars['String'];
  slug: Scalars['String'];
  startTime: Maybe<Scalars['DateTime']>;
  tvInfo: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type MmaEventPage = {
  __typename?: 'MmaEventPage';
  pageNumber: Scalars['Int'];
  results: Array<MmaEvent>;
  totalCount: Scalars['Int'];
};

/**
 * A particular one-on-one matchup that took place (or will take place) as part
 * of an MMA Event (e.g. Brock Lesnar vs Cain Velasquez @ UFC 121).
 * aka SbnMma::Fight in Hermano.
 */
export type MmaFight = {
  __typename?: 'MmaFight';
  cardOrder: Maybe<Scalars['Int']>;
  coverImageUrl: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  decision: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  draft: Scalars['Boolean'];
  event: MmaEvent;
  eventId: Scalars['Int'];
  externalForeignKey: Scalars['String'];
  fighterA: MmaFighter;
  fighterAId: Scalars['Int'];
  fighterB: MmaFighter;
  fighterBId: Scalars['Int'];
  hideFromAutotagger: Scalars['Boolean'];
  id: Scalars['Int'];
  legacyId: Maybe<Scalars['Int']>;
  mainCard: Scalars['Boolean'];
  name: Scalars['String'];
  slug: Scalars['String'];
  /** Possible values: 'upcoming', 'completed', 'canceled' */
  status: Maybe<Scalars['String']>;
  titleFight: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
  weightClass: Maybe<MmaWeightClass>;
  weightClassId: Maybe<Scalars['Int']>;
  winner: Maybe<MmaFighter>;
  winnerId: Maybe<Scalars['Int']>;
};

export type MmaFightPage = {
  __typename?: 'MmaFightPage';
  pageNumber: Scalars['Int'];
  results: Array<MmaFight>;
  totalCount: Scalars['Int'];
};

/**
 * A MMA combatant, potentially involved in many bouts (`MmaFight`s).
 * aka SbnMma::Fighter in Hermano.
 */
export type MmaFighter = {
  __typename?: 'MmaFighter';
  birthDate: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description: Maybe<Scalars['String']>;
  draft: Scalars['Boolean'];
  externalForeignKey: Scalars['String'];
  featured: Maybe<Scalars['Boolean']>;
  firstName: Maybe<Scalars['String']>;
  height: Maybe<Scalars['String']>;
  hideFromAutotagger: Scalars['Boolean'];
  id: Scalars['Int'];
  lastName: Maybe<Scalars['String']>;
  legacyId: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  nickname: Maybe<Scalars['String']>;
  /** @deprecated no data present */
  overallRank: Maybe<Scalars['Int']>;
  placeOfBirth: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  weight: Maybe<Scalars['String']>;
  /** @deprecated no data present */
  weightClassRank: Maybe<Scalars['Int']>;
  /** Format: `win-loss-draw (# NC)` (NC = no contest). e.g. `18-11-1 (1 NC)` */
  winRecord: Maybe<Scalars['String']>;
};

export type MmaFighterPage = {
  __typename?: 'MmaFighterPage';
  pageNumber: Scalars['Int'];
  results: Array<MmaFighter>;
  totalCount: Scalars['Int'];
};

/** A MMA Event organizer, e.g. UFC. aka SbnMma::Promotion in Hermano. */
export type MmaPromotion = {
  __typename?: 'MmaPromotion';
  abbreviation: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Maybe<Scalars['String']>;
  draft: Scalars['Boolean'];
  externalForeignKey: Scalars['String'];
  hideFromAutotagger: Scalars['Boolean'];
  id: Scalars['Int'];
  legacyId: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  scheduleArchiveDescription: Maybe<Scalars['String']>;
  scheduleDescription: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type MmaPromotionPage = {
  __typename?: 'MmaPromotionPage';
  pageNumber: Scalars['Int'];
  results: Array<MmaPromotion>;
  totalCount: Scalars['Int'];
};

/** e.g. Heavyweight. aka SbnMma::WeightClass in Hermano. */
export type MmaWeightClass = {
  __typename?: 'MmaWeightClass';
  abbreviation: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Maybe<Scalars['String']>;
  draft: Scalars['Boolean'];
  externalForeignKey: Scalars['String'];
  hideFromAutotagger: Scalars['Boolean'];
  id: Scalars['Int'];
  legacyId: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type MmaWeightClassPage = {
  __typename?: 'MmaWeightClassPage';
  pageNumber: Scalars['Int'];
  results: Array<MmaWeightClass>;
  totalCount: Scalars['Int'];
};

export type ModifyVideoProjectFileTreeInput = {
  deleteFile: InputMaybe<Scalars['Boolean']>;
  deleteFileParent: InputMaybe<Scalars['Boolean']>;
  fileId: Scalars['Int'];
  newParentFileId: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  bulkCreateVideoAssets: Maybe<Array<VideoAsset>>;
  bulkRemoveVideoAssets: Maybe<Array<VideoAsset>>;
  /** Create a new published Asset. */
  createAsset: AssetCreateResult;
  /** Creates a build job for the given source url */
  createBuild: Build;
  /** @deprecated Use createPersonalDataSupportRequest */
  createCCPASupportRequest: SupportRequestCreateResult;
  /** Copies the source of an existing project into a new project */
  createCopy: Maybe<Scalars['String']>;
  /** Create a new published Entry. */
  createEntry: EntryCreateResult;
  /** Create a new unpublished EntryDraft. */
  createEntryDraft: EntryDraftCreateResult;
  /** Create a new EntrySidebar. */
  createEntrySidebar: EntrySidebarCreateResult;
  /** @deprecated Use createPersonalDataSupportRequest */
  createGDPRSupportRequest: SupportRequestCreateResult;
  createPersonalDataSupportRequest: SupportRequestCreateResult;
  createRedirect: RedirectCreateResult;
  createRegisteredQuery: Maybe<RegisteredQueryCreateResult>;
  /** Syndication Partners */
  createSyndicationPartner: SyndicationPartner;
  /** Video Assets */
  createVideoAsset: VideoAsset;
  /** Projects */
  createVideoProject: VideoProject;
  /** Creates a new project file, returning the new file */
  createVideoProjectFile: VideoProjectFile;
  /** Video Rights */
  createVideoProjectRights: VideoProjectRights;
  customerMigration_createLegacySlug: LegacySlug;
  customerMigration_createOrUpdateLegacySlug: LegacySlug;
  customerMigration_createOrUpdateRedirect: Redirect;
  customerMigration_createRedirect: Redirect;
  customerMigration_createSiteGroup: EntryGroup;
  customerMigration_createSuperGroup: EntryGroup;
  customerMigration_createUser: User;
  /** @deprecated Use createUser */
  customerMigration_createUserWithAuthorProfile: User;
  customerMigration_updateSiteGroup: EntryGroup;
  customerMigration_updateUser: User;
  deleteRedirect: RedirectDeleteResult;
  deleteVideoProject: VideoProject;
  /** This mutation creates a background task to process the input.  Results are emailed to the user. */
  importRedirects: RedirectImportResult;
  /**
   * Reparents a file and its jobs, optionally making deletions within the file tree in the process.
   * Returns all modified files, including the target file, its old parent, and its new parent.
   */
  modifyVideoProjectFileTree: Array<Maybe<VideoProjectFile>>;
  promoteVideoAsset: VideoAsset;
  /** Publish an EntryDraft. */
  publishEntryDraft: EntryDraftPublishResult;
  recordAuthorProfileCreatedEvent: Maybe<EventResult>;
  recordAuthorProfileDestroyedEvent: Maybe<EventResult>;
  recordAuthorProfileUpdatedEvent: Maybe<EventResult>;
  recordCommunityNavigationUpdatedEvent: Maybe<EventResult>;
  recordEntryDraftSentToPrintEvent: Maybe<EventResult>;
  recordEntryExpiredEvent: Maybe<EventResult>;
  recordEntryGroupCreatedEvent: Maybe<EventResult>;
  recordEntryGroupDestroyedEvent: Maybe<EventResult>;
  recordEntryGroupEntryAddedEvent: Maybe<EventResult>;
  recordEntryGroupEntryRemovedEvent: Maybe<EventResult>;
  recordEntryGroupUpdatedEvent: Maybe<EventResult>;
  recordEntryPublishedEvent: Maybe<EventResult>;
  recordEntryUnpublishedEvent: Maybe<EventResult>;
  recordHubPageCreatedEvent: Maybe<EventResult>;
  recordHubPageDestroyedEvent: Maybe<EventResult>;
  recordHubPagePlacementsUpdatedEvent: Maybe<EventResult>;
  recordHubPageTemplateUpdatedEvent: Maybe<EventResult>;
  recordHubPageUpdatedEvent: Maybe<EventResult>;
  recordLinkSetCreatedEvent: Maybe<EventResult>;
  recordLinkSetDestroyedEvent: Maybe<EventResult>;
  recordLinkSetLinkCreatedEvent: Maybe<EventResult>;
  recordLinkSetLinkDestroyedEvent: Maybe<EventResult>;
  recordLinkSetLinkUpdatedEvent: Maybe<EventResult>;
  recordLinkSetUpdatedEvent: Maybe<EventResult>;
  recordRedirectCreatedEvent: Maybe<EventResult>;
  recordRedirectDestroyedEvent: Maybe<EventResult>;
  recordRedirectUpdatedEvent: Maybe<EventResult>;
  recordUserDestroyedEvent: Maybe<EventResult>;
  recordUserUpdatedEvent: Maybe<EventResult>;
  /** Delete asset via Chorus Asset Service (legacy method) */
  removeAsset: Maybe<Asset>;
  removeRegisteredQuery: Maybe<RegisteredQueryRemoveResult>;
  reparentVideoAsset: VideoAsset;
  /** Sends a Video file to the captioning service, and returns the sent file. */
  sendVideoFileForCaptioning: VideoProjectFile;
  /** Sends a Video file to the transcoding service, and returns the sent file. */
  sendVideoFileForTranscoding: VideoProjectFile;
  syncVideoAsset: VideoAsset;
  /** Touches the updated timestamps of a list of files, returning the updated files */
  touchVideoProjectFiles: Array<Maybe<VideoProjectFile>>;
  /** Update an existing Asset. */
  updateAsset: AssetUpdateResult;
  /**
   * Update an existing Entry.
   * The resulting changes will be reflected in the published revision immediately.
   */
  updateEntry: EntryUpdateResult;
  /**
   * Update an existing EntryDraft.
   * The resulting changes will not be published.
   */
  updateEntryDraft: EntryDraftUpdateResult;
  /** Update an existing EntrySidebar. */
  updateEntrySidebar: EntrySidebarUpdateResult;
  updateRedirect: RedirectUpdateResult;
  updateSyndicationPartner: SyndicationPartner;
  updateVideoAsset: VideoAsset;
  updateVideoProject: VideoProject;
  /** Updates a project file, returning the updated file */
  updateVideoProjectFile: VideoProjectFile;
  updateVideoProjectRights: VideoProjectRights;
  /** Update the Asset matching an external identifier, or create a new Asset if none was found. */
  upsertAssetByExternalId: AssetUpsertByExternalIdResult;
  /** Update the Entry matching an `externalId`, or create a new Entry if none was found. */
  upsertEntryByExternalId: EntryUpsertByExternalIdResult;
  /** Update the EntryDraft matching an `externalId`, or create a new EntryDraft if none was found. */
  upsertEntryDraftByExternalId: EntryDraftUpsertByExternalIdResult;
};


export type MutationBulkCreateVideoAssetsArgs = {
  input: BulkCreateVideoAssetsInput;
};


export type MutationBulkRemoveVideoAssetsArgs = {
  input: BulkRemoveVideoAssetsInput;
};


export type MutationCreateAssetArgs = {
  input: AssetCreateInput;
};


export type MutationCreateBuildArgs = {
  input: BuildInput;
};


export type MutationCreateCcpaSupportRequestArgs = {
  input: SupportRequestCcpaInput;
};


export type MutationCreateCopyArgs = {
  input: CopyInput;
};


export type MutationCreateEntryArgs = {
  input: EntryCreateInput;
};


export type MutationCreateEntryDraftArgs = {
  input: EntryDraftCreateInput;
};


export type MutationCreateEntrySidebarArgs = {
  input: EntrySidebarCreateInput;
};


export type MutationCreateGdprSupportRequestArgs = {
  input: SupportRequestGdprInput;
};


export type MutationCreatePersonalDataSupportRequestArgs = {
  input: SupportRequestPersonalDataInput;
};


export type MutationCreateRedirectArgs = {
  input: RedirectCreateInput;
};


export type MutationCreateRegisteredQueryArgs = {
  input: RegisteredQueryCreateInput;
};


export type MutationCreateSyndicationPartnerArgs = {
  input: CreateSyndicationPartnerInput;
};


export type MutationCreateVideoAssetArgs = {
  input: CreateVideoAssetInput;
};


export type MutationCreateVideoProjectArgs = {
  input: CreateVideoProjectInput;
};


export type MutationCreateVideoProjectFileArgs = {
  input: CreateVideoProjectFileInput;
};


export type MutationCreateVideoProjectRightsArgs = {
  input: CreateVideoProjectRightsInput;
};


export type MutationCustomerMigration_CreateLegacySlugArgs = {
  input: CustomerMigration_CreateLegacySlugInput;
};


export type MutationCustomerMigration_CreateOrUpdateLegacySlugArgs = {
  input: CustomerMigration_CreateLegacySlugInput;
};


export type MutationCustomerMigration_CreateOrUpdateRedirectArgs = {
  input: CustomerMigration_CreateRedirectInput;
};


export type MutationCustomerMigration_CreateRedirectArgs = {
  input: CustomerMigration_CreateRedirectInput;
};


export type MutationCustomerMigration_CreateSiteGroupArgs = {
  input: CustomerMigration_CreateSiteGroupInput;
};


export type MutationCustomerMigration_CreateSuperGroupArgs = {
  input: CustomerMigration_CreateSuperGroupInput;
};


export type MutationCustomerMigration_CreateUserArgs = {
  input: CustomerMigration_CreateUserInput;
};


export type MutationCustomerMigration_CreateUserWithAuthorProfileArgs = {
  input: CustomerMigration_CreateUserInput;
};


export type MutationCustomerMigration_UpdateSiteGroupArgs = {
  input: CustomerMigration_UpdateSiteGroupInput;
};


export type MutationCustomerMigration_UpdateUserArgs = {
  input: CustomerMigration_UpdateUserInput;
};


export type MutationDeleteRedirectArgs = {
  where: RedirectUniqueKeyInput;
};


export type MutationDeleteVideoProjectArgs = {
  videoProjectId: Scalars['Int'];
};


export type MutationImportRedirectsArgs = {
  input: RedirectImportInput;
};


export type MutationModifyVideoProjectFileTreeArgs = {
  input: ModifyVideoProjectFileTreeInput;
};


export type MutationPromoteVideoAssetArgs = {
  videoAssetId: Scalars['Int'];
};


export type MutationPublishEntryDraftArgs = {
  expectedVersion: InputMaybe<Scalars['Int']>;
  input: InputMaybe<EntryDraftPublishInput>;
  where: EntryDraftUniqueKeyInput;
};


export type MutationRecordAuthorProfileCreatedEventArgs = {
  input: AuthorProfileCreatedEventInput;
};


export type MutationRecordAuthorProfileDestroyedEventArgs = {
  input: AuthorProfileDestroyedEventInput;
};


export type MutationRecordAuthorProfileUpdatedEventArgs = {
  input: AuthorProfileUpdatedEventInput;
};


export type MutationRecordCommunityNavigationUpdatedEventArgs = {
  input: CommunityNavigationUpdatedEventInput;
};


export type MutationRecordEntryDraftSentToPrintEventArgs = {
  input: EntryDraftSentToPrintEventInput;
};


export type MutationRecordEntryExpiredEventArgs = {
  input: EntryExpiredEventInput;
};


export type MutationRecordEntryGroupCreatedEventArgs = {
  input: EntryGroupCreatedEventInput;
};


export type MutationRecordEntryGroupDestroyedEventArgs = {
  input: EntryGroupDestroyedEventInput;
};


export type MutationRecordEntryGroupEntryAddedEventArgs = {
  input: EntryGroupEntryAddedEventInput;
};


export type MutationRecordEntryGroupEntryRemovedEventArgs = {
  input: EntryGroupEntryRemovedEventInput;
};


export type MutationRecordEntryGroupUpdatedEventArgs = {
  input: EntryGroupUpdatedEventInput;
};


export type MutationRecordEntryPublishedEventArgs = {
  input: EntryPublishedEventInput;
};


export type MutationRecordEntryUnpublishedEventArgs = {
  input: EntryUnpublishedEventInput;
};


export type MutationRecordHubPageCreatedEventArgs = {
  input: HubPageCreatedEventInput;
};


export type MutationRecordHubPageDestroyedEventArgs = {
  input: HubPageDestroyedEventInput;
};


export type MutationRecordHubPagePlacementsUpdatedEventArgs = {
  input: HubPagePlacementsUpdatedEventInput;
};


export type MutationRecordHubPageTemplateUpdatedEventArgs = {
  input: HubPageTemplateUpdatedEventInput;
};


export type MutationRecordHubPageUpdatedEventArgs = {
  input: HubPageUpdatedEventInput;
};


export type MutationRecordLinkSetCreatedEventArgs = {
  input: LinkSetCreatedEventInput;
};


export type MutationRecordLinkSetDestroyedEventArgs = {
  input: LinkSetDestroyedEventInput;
};


export type MutationRecordLinkSetLinkCreatedEventArgs = {
  input: LinkSetLinkCreatedEventInput;
};


export type MutationRecordLinkSetLinkDestroyedEventArgs = {
  input: LinkSetLinkDestroyedEventInput;
};


export type MutationRecordLinkSetLinkUpdatedEventArgs = {
  input: LinkSetLinkUpdatedEventInput;
};


export type MutationRecordLinkSetUpdatedEventArgs = {
  input: LinkSetUpdatedEventInput;
};


export type MutationRecordRedirectCreatedEventArgs = {
  input: RedirectCreatedEventInput;
};


export type MutationRecordRedirectDestroyedEventArgs = {
  input: RedirectDestroyedEventInput;
};


export type MutationRecordRedirectUpdatedEventArgs = {
  input: RedirectUpdatedEventInput;
};


export type MutationRecordUserDestroyedEventArgs = {
  input: UserDestroyedEventInput;
};


export type MutationRecordUserUpdatedEventArgs = {
  input: UserUpdatedEventInput;
};


export type MutationRemoveAssetArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveRegisteredQueryArgs = {
  input: RegisteredQueryRemoveInput;
};


export type MutationReparentVideoAssetArgs = {
  videoAssetId: Scalars['Int'];
  videoProjectId: InputMaybe<Scalars['Int']>;
};


export type MutationSendVideoFileForCaptioningArgs = {
  input: SendVideoFileForCaptioningInput;
};


export type MutationSendVideoFileForTranscodingArgs = {
  videoProjectFileId: Scalars['Int'];
};


export type MutationSyncVideoAssetArgs = {
  videoAssetId: Scalars['Int'];
};


export type MutationTouchVideoProjectFilesArgs = {
  videoProjectFileIds: Array<InputMaybe<Scalars['Int']>>;
};


export type MutationUpdateAssetArgs = {
  input: AssetUpdateInput;
  where: AssetUniqueKeyInput;
};


export type MutationUpdateEntryArgs = {
  expectedVersion: InputMaybe<Scalars['Int']>;
  input: EntryUpdateInput;
  where: EntryUniqueKeyInput;
};


export type MutationUpdateEntryDraftArgs = {
  expectedVersion: InputMaybe<Scalars['Int']>;
  input: EntryDraftUpdateInput;
  where: EntryDraftUniqueKeyInput;
};


export type MutationUpdateEntrySidebarArgs = {
  expectedVersion: InputMaybe<Scalars['Int']>;
  input: EntrySidebarUpdateInput;
  where: EntrySidebarUniqueKeyInput;
};


export type MutationUpdateRedirectArgs = {
  input: RedirectUpdateInput;
  where: RedirectUniqueKeyInput;
};


export type MutationUpdateSyndicationPartnerArgs = {
  input: UpdateSyndicationPartnerInput;
};


export type MutationUpdateVideoAssetArgs = {
  input: UpdateVideoAssetInput;
};


export type MutationUpdateVideoProjectArgs = {
  input: UpdateVideoProjectInput;
};


export type MutationUpdateVideoProjectFileArgs = {
  input: UpdateVideoProjectFileInput;
};


export type MutationUpdateVideoProjectRightsArgs = {
  input: UpdateVideoProjectRightsInput;
};


export type MutationUpsertAssetByExternalIdArgs = {
  input: AssetUpsertByExternalIdInput;
};


export type MutationUpsertEntryByExternalIdArgs = {
  input: EntryUpsertByExternalIdInput;
};


export type MutationUpsertEntryDraftByExternalIdArgs = {
  input: EntryDraftUpsertByExternalIdInput;
};

/** Nested subdivision of a Locale. aka Geo::Neighborhood in Hermano. */
export type Neighborhood = {
  __typename?: 'Neighborhood';
  children: Array<Neighborhood>;
  createdAt: Scalars['DateTime'];
  draft: Scalars['Boolean'];
  externalForeignKey: Scalars['String'];
  hideFromAutotagger: Scalars['Boolean'];
  id: Scalars['Int'];
  lat: Maybe<Scalars['Float']>;
  lng: Maybe<Scalars['Float']>;
  locale: Locale;
  localeId: Scalars['Int'];
  name: Scalars['String'];
  parent: Maybe<Neighborhood>;
  parentId: Maybe<Scalars['Int']>;
  parentName: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type NeighborhoodPage = {
  __typename?: 'NeighborhoodPage';
  pageNumber: Scalars['Int'];
  results: Array<Neighborhood>;
  totalCount: Scalars['Int'];
};

/** A collection of communities; typically an umbrealla for an editorial brand. Networks can have many Communities. */
export type Network = {
  __typename?: 'Network';
  /** Paginates all [`EntryGroup`s](/docs/reference/object/EntryGroup) belonging to this Network. */
  allEntryGroups: EntryGroupPage;
  /** A list of communites that belong to this network. */
  communities: Array<Community>;
  /** The domain of this network. */
  domain: Scalars['String'];
  /** Find an [`EntryGroup`](/docs/reference/object/EntryGroup) belonging to this Network by its slug. */
  entryGroup: Maybe<EntryGroup>;
  /** Find several [`EntryGroup`s](/docs/reference/object/EntryGroup) belonging to this Network by their slugs. */
  entryGroups: Array<Maybe<EntryGroup>>;
  /** Return whether or not a value is set for the given key */
  hasSiteConfig: Maybe<Scalars['Boolean']>;
  /** An internal identifier for the network. */
  id: Scalars['Int'];
  isDisabled: Scalars['Boolean'];
  isMothballed: Scalars['Boolean'];
  /** Indicates if this network is private. */
  isPrivateMode: Scalars['Boolean'];
  /** The name of this network. */
  name: Scalars['String'];
  /** For direct network_config boolean queries, often used as aliases */
  networkConfigBoolean: Maybe<Scalars['Boolean']>;
  /** For direct network_config int queries, often used as aliases */
  networkConfigInt: Maybe<Scalars['Int']>;
  /** For direct network_config string queries, often used as aliases */
  networkConfigString: Maybe<Scalars['String']>;
  /** Return the Organization to which the Network belongs, if it belongs to any Organization */
  organization: Maybe<Organization>;
  /** The primary Community for this network. For example, `sbnation.com` is the primary community among all SBNation sites. */
  primaryCommunity: Community;
  /** Environment-specific domain, include port by default when local */
  schemaDomain: Scalars['String'];
  /** Just like [`searchCommunities`](/docs/reference/object/query#searchCommunities) but pre-scoped to this network. */
  searchCommunities: CommunityPage;
  /** For direct site_config boolean queries, often used as aliases */
  siteConfigBoolean: Maybe<Scalars['Boolean']>;
  /** For direct site_config int queries, often used as aliases */
  siteConfigInt: Maybe<Scalars['Int']>;
  /** For direct site_config json queries, often used as aliases */
  siteConfigJson: Maybe<Scalars['JSON']>;
  /** For direct site_config string queries, often used as aliases */
  siteConfigString: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  /** A unique identifier for this network. */
  uid: Scalars['ID'];
  /** The HTTP URL of this network. */
  url: Scalars['String'];
  /** The version of this network. */
  version: Scalars['Int'];
};


/** A collection of communities; typically an umbrealla for an editorial brand. Networks can have many Communities. */
export type NetworkAllEntryGroupsArgs = {
  pageNumber?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


/** A collection of communities; typically an umbrealla for an editorial brand. Networks can have many Communities. */
export type NetworkEntryGroupArgs = {
  slug: Scalars['String'];
};


/** A collection of communities; typically an umbrealla for an editorial brand. Networks can have many Communities. */
export type NetworkEntryGroupsArgs = {
  slugs: Array<Scalars['String']>;
};


/** A collection of communities; typically an umbrealla for an editorial brand. Networks can have many Communities. */
export type NetworkHasSiteConfigArgs = {
  key: Scalars['String'];
  type: Scalars['String'];
};


/** A collection of communities; typically an umbrealla for an editorial brand. Networks can have many Communities. */
export type NetworkNetworkConfigBooleanArgs = {
  key: Scalars['String'];
};


/** A collection of communities; typically an umbrealla for an editorial brand. Networks can have many Communities. */
export type NetworkNetworkConfigIntArgs = {
  key: Scalars['String'];
};


/** A collection of communities; typically an umbrealla for an editorial brand. Networks can have many Communities. */
export type NetworkNetworkConfigStringArgs = {
  key: Scalars['String'];
};


/** A collection of communities; typically an umbrealla for an editorial brand. Networks can have many Communities. */
export type NetworkSchemaDomainArgs = {
  withPort?: InputMaybe<Scalars['Boolean']>;
};


/** A collection of communities; typically an umbrealla for an editorial brand. Networks can have many Communities. */
export type NetworkSearchCommunitiesArgs = {
  query: InputMaybe<CommunitySearchQuery>;
};


/** A collection of communities; typically an umbrealla for an editorial brand. Networks can have many Communities. */
export type NetworkSiteConfigBooleanArgs = {
  fallback?: InputMaybe<Scalars['Boolean']>;
  key: Scalars['String'];
};


/** A collection of communities; typically an umbrealla for an editorial brand. Networks can have many Communities. */
export type NetworkSiteConfigIntArgs = {
  fallback?: InputMaybe<Scalars['Boolean']>;
  key: Scalars['String'];
};


/** A collection of communities; typically an umbrealla for an editorial brand. Networks can have many Communities. */
export type NetworkSiteConfigJsonArgs = {
  fallback?: InputMaybe<Scalars['Boolean']>;
  key: Scalars['String'];
};


/** A collection of communities; typically an umbrealla for an editorial brand. Networks can have many Communities. */
export type NetworkSiteConfigStringArgs = {
  fallback?: InputMaybe<Scalars['Boolean']>;
  key: Scalars['String'];
};

/** A User's relationship with a Network */
export type NetworkMembership = {
  __typename?: 'NetworkMembership';
  /** image URL for this user's profile iamge */
  imageUrl: Maybe<Scalars['String']>;
  /** when the user joined this network */
  joinedOn: Maybe<Scalars['DateTime']>;
  network: Network;
  networkId: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
};


/** A User's relationship with a Network */
export type NetworkMembershipImageUrlArgs = {
  size: InputMaybe<Scalars['String']>;
};

export enum NetworkRole {
  AbleToIpBan = 'ABLE_TO_IP_BAN',
  BypassTwoFactorAuthentication = 'BYPASS_TWO_FACTOR_AUTHENTICATION',
  CampaignsAdmin = 'CAMPAIGNS_ADMIN',
  EditorialAppsAdmin = 'EDITORIAL_APPS_ADMIN',
  Employee = 'EMPLOYEE',
  GrowthAndAnalytics = 'GROWTH_AND_ANALYTICS',
  NetworkAdmin = 'NETWORK_ADMIN',
  NetworkEditor = 'NETWORK_EDITOR',
  NetworkOps = 'NETWORK_OPS',
  PteEditor = 'PTE_EDITOR'
}

/** Metadata for the newsletter. */
export type Newsletter = {
  __typename?: 'Newsletter';
  /** The name of this newsletter. */
  name: Scalars['String'];
  /** The newsletter slug. */
  slug: Scalars['String'];
};

/**
 * OpentableVenues are created by a background process that consumes the
 * OpenTable API. They are used in order to match with the Venue type,
 * for the purpose of supporting OpenTable links in MapStack cards.
 */
export type OpentableVenue = {
  __typename?: 'OpentableVenue';
  address: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  externalForeignKey: Scalars['String'];
  id: Scalars['Int'];
  lat: Maybe<Scalars['Float']>;
  lng: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  opentableId: Scalars['Int'];
  slug: Scalars['String'];
  state: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  zip: Maybe<Scalars['String']>;
};

export type OpentableVenuePage = {
  __typename?: 'OpentableVenuePage';
  pageNumber: Scalars['Int'];
  results: Array<OpentableVenue>;
  totalCount: Scalars['Int'];
};

/** Possible directions to order a list by. */
export enum OrderDirection {
  /** Specifies an ascending order. */
  Asc = 'ASC',
  /** Specifies a descending order. */
  Desc = 'DESC'
}

/**
 * A collection of networks; typically an umbrella for an editorial organization
 * such as Vox Media proper or a licensing partner.
 */
export type Organization = {
  __typename?: 'Organization';
  /** The authentication domain for this organization. */
  authDomain: Scalars['String'];
  /** The environment-specific authentication domain for this organization, including port by default when local. */
  authSchemaDomain: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** List all member networks */
  networks: Array<Maybe<Network>>;
  /** The primary Network for this organization. */
  primaryNetwork: Maybe<Network>;
  slug: Scalars['String'];
  /** A unique identifier for this organization. */
  uid: Scalars['ID'];
  /** Retrieve a User by username or email. */
  user: Maybe<User>;
  /** Retrieve many Users by username or email. */
  users: Array<Maybe<User>>;
  /** Indicates if this organization uses Auth0. */
  usesAuth0: Maybe<Scalars['Boolean']>;
  version: Scalars['Int'];
};


/**
 * A collection of networks; typically an umbrella for an editorial organization
 * such as Vox Media proper or a licensing partner.
 */
export type OrganizationAuthSchemaDomainArgs = {
  withPort?: InputMaybe<Scalars['Boolean']>;
};


/**
 * A collection of networks; typically an umbrella for an editorial organization
 * such as Vox Media proper or a licensing partner.
 */
export type OrganizationUserArgs = {
  email: InputMaybe<Scalars['String']>;
  username: InputMaybe<Scalars['String']>;
};


/**
 * A collection of networks; typically an umbrella for an editorial organization
 * such as Vox Media proper or a licensing partner.
 */
export type OrganizationUsersArgs = {
  emails: InputMaybe<Array<Scalars['String']>>;
  usernames: InputMaybe<Array<Scalars['String']>>;
};

/** Page information used for cursor based pagination. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Cursor stirng to be used when paging forward. */
  endCursor: Maybe<Scalars['String']>;
  /** Are there more items when paging forward. */
  hasNextPage: Scalars['Boolean'];
  /** Are there more items when paging backwards. */
  hasPreviousPage: Scalars['Boolean'];
  /** Cursor string to be used when paging backwards. */
  startCursor: Maybe<Scalars['String']>;
};

/**
 * The Place type contains data common to both Venues and Buildings.
 * All of this data is available directly on those types already (denormalized),
 * so there should be little reason to query for Places directly, but is included
 * for completeness.
 */
export type Place = {
  __typename?: 'Place';
  address: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  crossstreet: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  detail: Maybe<PlaceDetail>;
  detailId: Maybe<Scalars['Int']>;
  detailType: Maybe<Scalars['String']>;
  draft: Scalars['Boolean'];
  externalForeignKey: Scalars['String'];
  foursquareId: Maybe<Scalars['String']>;
  foursquareTipId: Maybe<Scalars['String']>;
  googlePlaceId: Maybe<Scalars['String']>;
  hideFromAutotagger: Scalars['Boolean'];
  id: Scalars['Int'];
  imageUrls: Array<Scalars['String']>;
  lat: Maybe<Scalars['Float']>;
  lng: Maybe<Scalars['Float']>;
  locale: Locale;
  localeId: Scalars['Int'];
  name: Scalars['String'];
  network: Scalars['String'];
  slug: Scalars['String'];
  state: Maybe<Scalars['String']>;
  stubhubUpcomingEventCount: Maybe<Scalars['Int']>;
  stubhubVenueId: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
  url: Maybe<Scalars['String']>;
  zip: Maybe<Scalars['String']>;
};

/**
 * The `PlaceDetail` interface is implemented by both `Venue` and `Building`,
 * which provide access to all of these fields directly, rather than needing
 * to traverse their `Place` association.
 */
export type PlaceDetail = {
  address: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  crossstreet: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  foursquareId: Maybe<Scalars['String']>;
  foursquareTipId: Maybe<Scalars['String']>;
  googlePlaceId: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imageUrls: Array<Scalars['String']>;
  lat: Maybe<Scalars['Float']>;
  lng: Maybe<Scalars['Float']>;
  locale: Locale;
  localeId: Scalars['Int'];
  name: Scalars['String'];
  network: Scalars['String'];
  place: Place;
  placeId: Scalars['Int'];
  slug: Scalars['String'];
  state: Maybe<Scalars['String']>;
  stubhubUpcomingEventCount: Maybe<Scalars['Int']>;
  stubhubVenueId: Maybe<Scalars['Int']>;
  url: Maybe<Scalars['String']>;
  zip: Maybe<Scalars['String']>;
};

export type PlacePage = {
  __typename?: 'PlacePage';
  pageNumber: Scalars['Int'];
  results: Array<Place>;
  totalCount: Scalars['Int'];
};

/**
 * Modify a [`String`](/docs/reference/scalar/String.html) value by specifying an operation to perform.
 * Exactly one field must be specified.
 */
export type PlainTextInput = {
  /** Add a string to the end of the current value. */
  append: InputMaybe<Scalars['String']>;
  /** Overwrite the existing value. */
  assign: InputMaybe<Scalars['String']>;
  /** Overwrite the existing value only if it is `null` or empty (`""`). */
  assignIfBlank: InputMaybe<Scalars['String']>;
  /** Add a string to the beginning of the current value. */
  prepend: InputMaybe<Scalars['String']>;
};

/** Point-in-time Facebook metric */
export type PointMetricFacebook = {
  __typename?: 'PointMetricFacebook';
  /** Timestamp FB post was created */
  createdAt: Maybe<Scalars['String']>;
  /** FB post account name */
  fromName: Maybe<Scalars['String']>;
  /** FB post message */
  message: Maybe<Scalars['String']>;
  /** FB picture url */
  picture: Maybe<Scalars['String']>;
  /** FB link clicks */
  postConsumptionsByTypeLinkClicks: Maybe<Scalars['Int']>;
  /** FB post engaged users */
  postEngagedUsers: Maybe<Scalars['Int']>;
  /** FB post id */
  postId: Maybe<Scalars['String']>;
  /** FB post impressions - new */
  postImpressionsByPaidNonPaidUniqueTotal: Maybe<Scalars['Int']>;
  /** FB post impressions - deprecated 7/12/18 */
  postImpressionsUnique: Maybe<Scalars['Int']>;
  /** FB post shares */
  postStoryAddsByActionTypeShare: Maybe<Scalars['Int']>;
};

/** Point-in-time Reddit metric */
export type PointMetricReddit = {
  __typename?: 'PointMetricReddit';
  /** Reddit post comments */
  comments: Maybe<Scalars['Int']>;
  /** Reddit post created date */
  createdAt: Maybe<Scalars['String']>;
  /** Reddit post down votes */
  downVotes: Maybe<Scalars['Int']>;
  /** Reddit post id */
  id: Maybe<Scalars['Int']>;
  /** Reddit post permalink */
  permalink: Maybe<Scalars['String']>;
  /** Reddit post post score */
  score: Maybe<Scalars['Int']>;
  /** Reddit post subtitle */
  subreddit: Maybe<Scalars['String']>;
  /** Reddit post title */
  title: Maybe<Scalars['String']>;
  /** Reddit post up votes */
  upVotes: Maybe<Scalars['Int']>;
};

/** Point-in-time Twitter metric */
export type PointMetricTwitter = {
  __typename?: 'PointMetricTwitter';
  /** Tweet created at */
  createdAt: Maybe<Scalars['String']>;
  /** Tweet engagements */
  engagements: Maybe<Scalars['Int']>;
  /** Tweet favorites */
  favorites: Maybe<Scalars['Int']>;
  /** Tweet id */
  id: Maybe<Scalars['String']>;
  /** Tweet impressions */
  impressions: Maybe<Scalars['Int']>;
  /** Tweet picture link */
  picture: Maybe<Scalars['String']>;
  /** Tweet replies */
  replies: Maybe<Scalars['Int']>;
  /** Tweet retweets */
  retweets: Maybe<Scalars['Int']>;
  /** Tweet text */
  text: Maybe<Scalars['String']>;
  /** Tweet username */
  username: Maybe<Scalars['String']>;
};

/** This is a product type that external Hermano products merge into. */
export type Product = {
  __typename?: 'Product';
  aliases: Array<Scalars['String']>;
  asinCode: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description: Maybe<Scalars['String']>;
  draft: Scalars['Boolean'];
  externalForeignKey: Scalars['String'];
  hideFromAutotagger: Scalars['Boolean'];
  id: Scalars['Int'];
  imageUrl: Maybe<Scalars['String']>;
  name: Scalars['String'];
  productBrand: Maybe<ProductBrand>;
  productBrandId: Maybe<Scalars['Int']>;
  productCategory: Maybe<ProductCategory>;
  productCategoryId: Maybe<Scalars['Int']>;
  productCategoryName: Maybe<Scalars['String']>;
  redirectUrl: Maybe<Scalars['String']>;
  relatedProductIds: Array<Scalars['Int']>;
  relatedProducts: Array<Maybe<Product>>;
  releaseDate: Maybe<Scalars['String']>;
  retailers: Maybe<Array<ProductRetailer>>;
  slug: Scalars['String'];
  summary: Maybe<Scalars['String']>;
  upcCode: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** e.g. Apple. aka Verge::ProductBrand in Hermano. */
export type ProductBrand = {
  __typename?: 'ProductBrand';
  createdAt: Scalars['DateTime'];
  draft: Scalars['Boolean'];
  externalForeignKey: Scalars['String'];
  hideFromAutotagger: Scalars['Boolean'];
  id: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProductBrandPage = {
  __typename?: 'ProductBrandPage';
  pageNumber: Scalars['Int'];
  results: Array<ProductBrand>;
  totalCount: Scalars['Int'];
};

/** e.g. Cellphones. aka Verge::ProductCategory in Hermano. */
export type ProductCategory = {
  __typename?: 'ProductCategory';
  childCategories: Array<ProductCategory>;
  createdAt: Scalars['DateTime'];
  draft: Scalars['Boolean'];
  externalForeignKey: Scalars['String'];
  hideFromAutotagger: Scalars['Boolean'];
  id: Scalars['Int'];
  name: Scalars['String'];
  parentCategory: Maybe<ProductCategory>;
  parentCategoryId: Maybe<Scalars['Int']>;
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProductCategoryPage = {
  __typename?: 'ProductCategoryPage';
  pageNumber: Scalars['Int'];
  results: Array<ProductCategory>;
  totalCount: Scalars['Int'];
};

export type ProductPage = {
  __typename?: 'ProductPage';
  pageNumber: Scalars['Int'];
  results: Array<Product>;
  totalCount: Scalars['Int'];
};

export type ProductRetailer = {
  __typename?: 'ProductRetailer';
  id: Scalars['Int'];
  price: Maybe<Scalars['String']>;
  storeName: Maybe<Scalars['String']>;
  url: Maybe<Scalars['URL']>;
};

export type ProjectSource = {
  __typename?: 'ProjectSource';
  builds: Array<Maybe<Build>>;
  lastModified: Scalars['DateTime'];
  type: Scalars['String'];
  uuid: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** @deprecated stitching use only */
  _contentApiCommunities: Array<Maybe<Community>>;
  /**
   * entities service for batching data lookups based on stub models
   * @deprecated stitching only
   */
  _entities: Array<Maybe<_Entity>>;
  /** @deprecated stitching use only */
  _entryCustomPages: Array<Maybe<EntryCustomPage>>;
  /** @deprecated stitching use only */
  _sbnEntries: Array<Maybe<Entry>>;
  /** @deprecated stitching use only */
  _sbnEntryPollOptions: Array<Maybe<EntryPollOption>>;
  /** @deprecated stitching use only */
  _sbnEntryPolls: Array<Maybe<EntryPoll>>;
  /**
   * Gets partial User objects to be merged into the universal (Tower) User type
   * @deprecated stitching use only
   */
  _volumeUsers: Array<Maybe<User>>;
  /** Fetch single Advertiser by id */
  advertiser: Maybe<Advertiser>;
  /** Fetch multiple Advertisers by id */
  advertisers: Array<Maybe<Advertiser>>;
  /** Retrieves an AnalyticsMetric */
  analyticsMetric: Maybe<AnalyticsMetric>;
  /** Retrieves an AnalyticsRef by id */
  analyticsRef: Maybe<AnalyticsRef>;
  /** Retrieve an AnalyticsResource by identifier */
  analyticsResource: Maybe<AnalyticsResource>;
  /** @deprecated See `AnthemStory` type description */
  anthemStory: Maybe<AnthemStory>;
  /** Retrieve an Asset by unique identifier. Exactly one argument is required. */
  asset: Maybe<Asset>;
  /** Retrieve many Assets by unique identifiers. Exactly one argument is required. */
  assets: Array<Maybe<Asset>>;
  /**
   * Retrieve an AuthorProfile by unique identifier.
   * Exactly one argument is required.
   */
  authorProfile: Maybe<AuthorProfile>;
  /**
   * Retrieve many AuthorProfiles by unique identifiers.
   * Exactly one argument is required.
   */
  authorProfiles: Array<Maybe<AuthorProfile>>;
  build: Maybe<Build>;
  /** Retrieve a BuildPage by a unique identifier */
  buildPage: Maybe<BuildPage>;
  /**
   * Info for a custom story page from a particular build
   * Retrieve many BuildPages by unique identifiers
   */
  buildPages: Array<Maybe<BuildPage>>;
  /** Fetch single Building by id */
  building: Maybe<Building>;
  /** Fetch multiple Buildings by id */
  buildings: Array<Maybe<Building>>;
  /** Fetch single Campaign by id */
  campaign: Maybe<Campaign>;
  /** Fetch multiple Campaigns by id */
  campaigns: Array<Maybe<Campaign>>;
  cellData: Maybe<CellData>;
  cliVersion: Scalars['String'];
  /**
   * Retrieve many Communities by unique identifiers.
   * All Communities are returned if no arguments are provided. Missing results return as `null`.
   */
  communities: Array<Maybe<Community>>;
  /**
   * Retrieve a Community by unique identifier.
   * Exactly one argument is required.
   */
  community: Maybe<Community>;
  complexityScore: Maybe<Scalars['Int']>;
  /** The currently logged-in User (null if logged out). */
  currentUser: Maybe<User>;
  debug: Maybe<Scalars['String']>;
  entity: Maybe<Entity>;
  /** Retrieve many Entry records by unique identifiers. Exactly one list argument is required. Missing results return `null`. */
  entries: Array<Maybe<Entry>>;
  /** Retrieve Entries associated with a given Hermano record. */
  entriesForHermanoID: Array<Maybe<Scalars['ID']>>;
  /** Retrieve an Entry by unique identifier. Exactly one argument is required. */
  entry: Maybe<Entry>;
  /** Retrieve an EntryDraft by unique identifier. Exactly one argument is required. */
  entryDraft: Maybe<EntryDraft>;
  /** Retrieve many EntryDraft records by unique identifiers. Exactly one list argument is required. Missing results return `null`. */
  entryDrafts: Array<Maybe<EntryDraft>>;
  /** @deprecated stitching use only */
  entryFrontend: Maybe<EntryFrontend>;
  /** @deprecated stitching use only */
  entryFrontends: Array<Maybe<EntryFrontend>>;
  /** Retrieve many EntryGallery records by unique identifiers. Exactly one list argument is required. Missing results return `null`. */
  entryGalleries: Array<Maybe<EntryGallery>>;
  /** Retrieve an EntryGallery by unique identifier. Exactly one argument is required. */
  entryGallery: Maybe<EntryGallery>;
  /**
   * Retrieve an EntryGroup by unique identifier.
   * Exactly one argument is required.
   */
  entryGroup: Maybe<EntryGroup>;
  /**
   * Retrieve many EntryGroups by unique identifiers.
   * Exactly one list argument is required. Missing results return as `null`.
   */
  entryGroups: Array<Maybe<EntryGroup>>;
  entryRevision: Maybe<EntryRevision>;
  /** Retrieve an EntrySidebar by unique identifier. Exactly one argument is required. */
  entrySidebar: Maybe<EntrySidebar>;
  /** Retrieve many EntrySidebar records by unique identifiers. Exactly one list argument is required. Missing results return `null`. */
  entrySidebars: Array<Maybe<EntrySidebar>>;
  /** Finds an EntryVideo. */
  entryVideo: Maybe<EntryVideo>;
  /** Finds many EntryVideos. */
  entryVideos: Array<Maybe<EntryVideo>>;
  /** The types of errors this API can return */
  errorTypes: Array<Error>;
  /** Get a single feed by its ID */
  feed: Maybe<Feed>;
  heartbeat: Maybe<Scalars['String']>;
  /** Retrieve a list of SBN's Hermano types. */
  hermanoTypes: Array<Maybe<Scalars['String']>>;
  /**
   * Retrieve a HubPage by unique identifier.
   * Exactly one argument is required.
   */
  hubPage: Maybe<HubPage>;
  /**
   * Retrieve many HubPages by unique identifiers.
   * Exactly one list argument is required. Missing results return as `null`.
   */
  hubPages: Array<Maybe<HubPage>>;
  /**
   * Retrieve a link set by unique identifiers.
   * Exactly one argument is required. Missing results return as `null`.
   */
  linkSet: Maybe<LinkSet>;
  /**
   * Retrieve many link sets by unique identifiers.
   * Exactly one list argument is required. Missing results return as `null`.
   */
  linkSets: Array<Maybe<LinkSet>>;
  /** Fetch single LiveCoverageEvent by id */
  liveCoverageEvent: Maybe<LiveCoverageEvent>;
  /** Fetch multiple LiveCoverageEvents by id */
  liveCoverageEvents: Array<Maybe<LiveCoverageEvent>>;
  /** Fetch single Locale by id */
  locale: Maybe<Locale>;
  /** Fetch multiple Locales by id */
  locales: Array<Maybe<Locale>>;
  /** Returns a monetized link generated via the provided non-monetized link. Exactly one list argument is required. Links unable to be monetized are returned as `null` as well as valid links if rewrite is set to `false`. */
  matchLink: Maybe<Scalars['String']>;
  /** Returns many monetized links generated via the provided list of non-monetized links. Exactly one list argument is required. Links unable to be monetized are returned as `null` as well as valid links if rewrite is set to `false`. */
  matchLinks: Array<Maybe<Scalars['String']>>;
  /** Find a video for a given provider by its Migration UUID */
  migratedVideoProject: Maybe<VideoProject>;
  /** Fetch single MmaEvent by id */
  mmaEvent: Maybe<MmaEvent>;
  /** Fetch multiple MmaEvents by id */
  mmaEvents: Array<Maybe<MmaEvent>>;
  /** Fetch single MmaFight by id */
  mmaFight: Maybe<MmaFight>;
  /** Fetch single MmaFighter by id */
  mmaFighter: Maybe<MmaFighter>;
  /** Fetch multiple MmaFighters by id */
  mmaFighters: Array<Maybe<MmaFighter>>;
  /** Fetch multiple MmaFights by id */
  mmaFights: Array<Maybe<MmaFight>>;
  /** Fetch single MmaPromotion by id */
  mmaPromotion: Maybe<MmaPromotion>;
  /** Fetch multiple MmaPromotions by id */
  mmaPromotions: Array<Maybe<MmaPromotion>>;
  /** Fetch single MmaWeightClass by id */
  mmaWeightClass: Maybe<MmaWeightClass>;
  /** Fetch multiple MmaWeightClasses by id */
  mmaWeightClasses: Array<Maybe<MmaWeightClass>>;
  /** Fetch single Neighborhood by id */
  neighborhood: Maybe<Neighborhood>;
  /** Fetch multiple Neighborhoods by id */
  neighborhoods: Array<Maybe<Neighborhood>>;
  /**
   * Retrieve a Network by unique identifier.
   * Exactly one argument is required.
   */
  network: Maybe<Network>;
  /**
   * Retrieve many Networks by unique identifiers.
   * All Networks are returned if no arguments are provided. Missing results return as `null`.
   */
  networks: Array<Maybe<Network>>;
  /** Fetch single OpentableVenue by id */
  opentableVenue: Maybe<OpentableVenue>;
  /** Fetch multiple OpentableVenues by id */
  opentableVenues: Array<Maybe<OpentableVenue>>;
  /** Retrieve a Organization by ID or slug */
  organization: Maybe<Organization>;
  /** Retrieve many Organizations by ID or slug (or all Organizations if no arguments passed) */
  organizations: Array<Maybe<Organization>>;
  /** Fetch single Place by id */
  place: Maybe<Place>;
  /** Fetch multiple Places by id */
  places: Array<Maybe<Place>>;
  /** Fetch single Product by id */
  product: Maybe<Product>;
  /** Fetch single ProductBrand by id */
  productBrand: Maybe<ProductBrand>;
  /** Fetch multiple ProductBrands by id */
  productBrands: Array<Maybe<ProductBrand>>;
  /** Fetch multiple ProductCategories by id */
  productCategories: Array<Maybe<ProductCategory>>;
  /** Fetch single ProductCategory by id */
  productCategory: Maybe<ProductCategory>;
  /** Fetch multiple Products by id */
  products: Array<Maybe<Product>>;
  projectSource: Maybe<ProjectSource>;
  /** Retrieve a redirect by ID. */
  redirect: Maybe<Redirect>;
  /** Retrieve many redirects by ID */
  redirects: Array<Maybe<Redirect>>;
  registeredQueries: Array<RegisteredQuery>;
  registeredQuery: Maybe<RegisteredQuery>;
  /** Search Advertisers, returning paginated results */
  searchAdvertisers: Maybe<AdvertiserPage>;
  /** Retrieve Asset records using attribute filters and/or text search. */
  searchAssets: Maybe<AssetPage>;
  /** Search Buildings, returning paginated results */
  searchBuildings: Maybe<BuildingPage>;
  /** Search Campaigns, returning paginated results */
  searchCampaigns: Maybe<CampaignPage>;
  /** Retrieve Communities using attribute filters and/or full-text search. */
  searchCommunities: CommunityPage;
  /** Retrieve EntryGroups by keyword search */
  searchEntryGroups: EntryGroupPage;
  /** Search LiveCoverageEvents, returning paginated results */
  searchLiveCoverageEvents: Maybe<LiveCoverageEventPage>;
  /** Search Locales, returning paginated results */
  searchLocales: Maybe<LocalePage>;
  /** Search MmaEvents, returning paginated results */
  searchMmaEvents: Maybe<MmaEventPage>;
  /** Search MmaFighters, returning paginated results */
  searchMmaFighters: Maybe<MmaFighterPage>;
  /** Search MmaFights, returning paginated results */
  searchMmaFights: Maybe<MmaFightPage>;
  /** Search MmaPromotions, returning paginated results */
  searchMmaPromotions: Maybe<MmaPromotionPage>;
  /** Search MmaWeightClasses, returning paginated results */
  searchMmaWeightClasses: Maybe<MmaWeightClassPage>;
  /** Search Neighborhoods, returning paginated results */
  searchNeighborhoods: Maybe<NeighborhoodPage>;
  /** Search OpentableVenues, returning paginated results */
  searchOpentableVenues: Maybe<OpentableVenuePage>;
  /** Search Places, returning paginated results */
  searchPlaces: Maybe<PlacePage>;
  /** Search ProductBrands, returning paginated results */
  searchProductBrands: Maybe<ProductBrandPage>;
  /** Search ProductCategories, returning paginated results */
  searchProductCategories: Maybe<ProductCategoryPage>;
  /** Search Products, returning paginated results */
  searchProducts: Maybe<ProductPage>;
  /** Retrieve redirects using attribute filters */
  searchRedirects: RedirectPage;
  /** Search ShoppingDeals, returning paginated results */
  searchShoppingDeals: Maybe<ShoppingDealPage>;
  /** Search SportConferences, returning paginated results */
  searchSportConferences: Maybe<SportConferencePage>;
  /** Search SportDivisions, returning paginated results */
  searchSportDivisions: Maybe<SportDivisionPage>;
  /** Search SportEvents, returning paginated results */
  searchSportEvents: Maybe<SportEventPage>;
  /** Search SportLeagues, returning paginated results */
  searchSportLeagues: Maybe<SportLeaguePage>;
  /** Search SportPlayers, returning paginated results */
  searchSportPlayers: Maybe<SportPlayerPage>;
  /** Search SportTeams, returning paginated results */
  searchSportTeams: Maybe<SportTeamPage>;
  /** Search SportTickets, returning paginated results */
  searchSportTickets: Maybe<SportTicketPage>;
  /** Search Sports, returning paginated results */
  searchSports: Maybe<SportPage>;
  /** Search TicketEvents, returning paginated results */
  searchTicketEvents: Maybe<TicketEventPage>;
  /** Retrieve users using filters for organization, community/network membership, role, status, and full-text search */
  searchUsers: UserPage;
  /** Search Venues, returning paginated results */
  searchVenues: Maybe<VenuePage>;
  /** Search VideoGameFranchises, returning paginated results */
  searchVideoGameFranchises: Maybe<VideoGameFranchisePage>;
  /** Search VideoGamePlatformGroups, returning paginated results */
  searchVideoGamePlatformGroups: Maybe<VideoGamePlatformGroupPage>;
  /** Search VideoGamePlatforms, returning paginated results */
  searchVideoGamePlatforms: Maybe<VideoGamePlatformPage>;
  /** Search VideoGames, returning paginated results */
  searchVideoGames: Maybe<VideoGamePage>;
  /** Search video projects, returning paginated results */
  searchVideoProjects: VideoProjectPage;
  /** Search video tags, returning an array of tags sorted by match score */
  searchVideoTags: Array<Maybe<VideoTag>>;
  /** Fetch single ShoppingDeal by id */
  shoppingDeal: Maybe<ShoppingDeal>;
  /** Fetch multiple ShoppingDeals by id */
  shoppingDeals: Array<Maybe<ShoppingDeal>>;
  /** Download the source.zip of a project */
  sourceDownload: Maybe<FileLocation>;
  /** Fetch single Sport by id */
  sport: Maybe<Sport>;
  /** Fetch single SportConference by id */
  sportConference: Maybe<SportConference>;
  /** Fetch multiple SportConferences by id */
  sportConferences: Array<Maybe<SportConference>>;
  /** Fetch single SportDivision by id */
  sportDivision: Maybe<SportDivision>;
  /** Fetch multiple SportDivisions by id */
  sportDivisions: Array<Maybe<SportDivision>>;
  /** Fetch single SportEvent by id */
  sportEvent: Maybe<SportEvent>;
  /** Fetch multiple SportEvents by id */
  sportEvents: Array<Maybe<SportEvent>>;
  /** Fetch single SportLeague by id */
  sportLeague: Maybe<SportLeague>;
  /** Fetch multiple SportLeagues by id */
  sportLeagues: Array<Maybe<SportLeague>>;
  /** Fetch single SportPlayer by id */
  sportPlayer: Maybe<SportPlayer>;
  /** Fetch multiple SportPlayers by id */
  sportPlayers: Array<Maybe<SportPlayer>>;
  /** Fetch single SportTeam by id */
  sportTeam: Maybe<SportTeam>;
  /** Fetch multiple SportTeams by id */
  sportTeams: Array<Maybe<SportTeam>>;
  /** Fetch single SportTicket by id */
  sportTicket: Maybe<SportTicket>;
  /** Fetch multiple SportTickets by id */
  sportTickets: Array<Maybe<SportTicket>>;
  /** Fetch multiple Sports by id */
  sports: Array<Maybe<Sport>>;
  /** Get all syndication partners assigned to a brand, network, or publisher */
  syndicationPartners: Array<Maybe<SyndicationPartner>>;
  /** Fetch single TicketEvent by id */
  ticketEvent: Maybe<TicketEvent>;
  /** Fetch multiple TicketEvents by id */
  ticketEvents: Array<Maybe<TicketEvent>>;
  /**
   * Retrieve a User by unique identifier.
   * Exactly one argument is required.
   */
  user: Maybe<User>;
  /**
   * Retrieve many Users by unique identifiers.
   * Exactly one list argument is required.
   */
  users: Array<Maybe<User>>;
  /** Fetch single Venue by id */
  venue: Maybe<Venue>;
  /** Fetch multiple Venues by id */
  venues: Array<Maybe<Venue>>;
  /** Gets brand configuration settings for any one scoped reference */
  videoBrandConfig: VideoBrandConfig;
  /** Find a collection of video categories for the selected provider */
  videoCategories: Array<Maybe<VideoCategory>>;
  /** Fetch single VideoGame by id */
  videoGame: Maybe<VideoGame>;
  /** Fetch single VideoGameFranchise by id */
  videoGameFranchise: Maybe<VideoGameFranchise>;
  /** Fetch multiple VideoGameFranchises by id */
  videoGameFranchises: Array<Maybe<VideoGameFranchise>>;
  /** Fetch single VideoGamePlatform by id */
  videoGamePlatform: Maybe<VideoGamePlatform>;
  /** Fetch single VideoGamePlatformGroup by id */
  videoGamePlatformGroup: Maybe<VideoGamePlatformGroup>;
  /** Fetch multiple VideoGamePlatformGroups by id */
  videoGamePlatformGroups: Array<Maybe<VideoGamePlatformGroup>>;
  /** Fetch multiple VideoGamePlatforms by id */
  videoGamePlatforms: Array<Maybe<VideoGamePlatform>>;
  /** Fetch multiple VideoGames by id */
  videoGames: Array<Maybe<VideoGame>>;
  /** Find a video by exactly one of the ID types */
  videoProject: Maybe<VideoProject>;
  /** Find a collection of videos by exactly one of the following ID types */
  videoProjects: Array<Maybe<VideoProject>>;
  /** Find a collection of video series by exactly one of the following IDs */
  videoSeries: Array<Maybe<VideoSeries>>;
  /** Find a collection of video types by exactly one of the following IDs */
  videoTypes: Array<Maybe<VideoType>>;
};


export type Query_ContentApiCommunitiesArgs = {
  ids: Array<Scalars['Int']>;
};


export type Query_EntitiesArgs = {
  representations: Array<Scalars['_EntityRepresentation']>;
};


export type Query_EntryCustomPagesArgs = {
  keys: Array<Scalars['ID']>;
};


export type Query_SbnEntriesArgs = {
  uids: Array<Scalars['ID']>;
};


export type Query_SbnEntryPollOptionsArgs = {
  uuids: Array<Scalars['String']>;
};


export type Query_SbnEntryPollsArgs = {
  ids: Array<Scalars['Int']>;
};


export type Query_VolumeUsersArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryAdvertiserArgs = {
  id: Scalars['Int'];
};


export type QueryAdvertisersArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryAnalyticsMetricArgs = {
  identifier: InputMaybe<Scalars['String']>;
};


export type QueryAnalyticsRefArgs = {
  id: Scalars['Int'];
};


export type QueryAnalyticsResourceArgs = {
  identifier: Scalars['String'];
};


export type QueryAnthemStoryArgs = {
  uuid: Scalars['String'];
};


export type QueryAssetArgs = {
  externalId: InputMaybe<Scalars['ID']>;
  id: InputMaybe<Scalars['Int']>;
  uid: InputMaybe<Scalars['ID']>;
};


export type QueryAssetsArgs = {
  externalIds: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  ids: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  uids: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type QueryAuthorProfileArgs = {
  id: InputMaybe<Scalars['Int']>;
  uid: InputMaybe<Scalars['ID']>;
  url: InputMaybe<Scalars['URL']>;
};


export type QueryAuthorProfilesArgs = {
  ids: InputMaybe<Array<Scalars['Int']>>;
  uids: InputMaybe<Array<Scalars['ID']>>;
  urls: InputMaybe<Array<Scalars['URL']>>;
};


export type QueryBuildArgs = {
  uuid: Scalars['String'];
};


export type QueryBuildPageArgs = {
  key: Scalars['String'];
};


export type QueryBuildPagesArgs = {
  keys: Array<Scalars['String']>;
};


export type QueryBuildingArgs = {
  id: Scalars['Int'];
};


export type QueryBuildingsArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryCampaignArgs = {
  id: Scalars['Int'];
};


export type QueryCampaignsArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryCellDataArgs = {
  bucket: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  slug: InputMaybe<Scalars['String']>;
};


export type QueryCommunitiesArgs = {
  domains: InputMaybe<Array<Scalars['String']>>;
  ids: InputMaybe<Array<Scalars['Int']>>;
  slugs: InputMaybe<Array<Scalars['String']>>;
  uids: InputMaybe<Array<Scalars['ID']>>;
};


export type QueryCommunityArgs = {
  domain: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  slug: InputMaybe<Scalars['String']>;
  uid: InputMaybe<Scalars['ID']>;
};


export type QueryDebugArgs = {
  mockApiRequest: InputMaybe<Scalars['Boolean']>;
};


export type QueryEntityArgs = {
  communityId: InputMaybe<Scalars['Int']>;
  path: Scalars['String'];
};


export type QueryEntriesArgs = {
  externalIds: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  ids: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  uids: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  urls: InputMaybe<Array<InputMaybe<Scalars['URL']>>>;
  uuids: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEntriesForHermanoIdArgs = {
  hermanoID: Scalars['Int'];
  hermanoType: Scalars['String'];
};


export type QueryEntryArgs = {
  externalId: InputMaybe<Scalars['ID']>;
  id: InputMaybe<Scalars['Int']>;
  uid: InputMaybe<Scalars['ID']>;
  url: InputMaybe<Scalars['URL']>;
  uuid: InputMaybe<Scalars['String']>;
};


export type QueryEntryDraftArgs = {
  externalId: InputMaybe<Scalars['ID']>;
  uid: InputMaybe<Scalars['ID']>;
  uuid: InputMaybe<Scalars['String']>;
};


export type QueryEntryDraftsArgs = {
  externalIds: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  uids: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  uuids: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEntryFrontendArgs = {
  uuid: Scalars['String'];
};


export type QueryEntryFrontendsArgs = {
  entryIds: Array<InputMaybe<Scalars['Int']>>;
};


export type QueryEntryGalleriesArgs = {
  externalIds: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  uids: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  uuids: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEntryGalleryArgs = {
  externalId: InputMaybe<Scalars['ID']>;
  uid: InputMaybe<Scalars['ID']>;
  uuid: InputMaybe<Scalars['String']>;
};


export type QueryEntryGroupArgs = {
  id: InputMaybe<Scalars['Int']>;
  uid: InputMaybe<Scalars['ID']>;
  url: InputMaybe<Scalars['String']>;
};


export type QueryEntryGroupsArgs = {
  ids: InputMaybe<Array<Scalars['Int']>>;
  uids: InputMaybe<Array<Scalars['ID']>>;
  urls: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEntryRevisionArgs = {
  externalId: InputMaybe<Scalars['ID']>;
  id: InputMaybe<Scalars['Int']>;
  uid: InputMaybe<Scalars['ID']>;
  url: InputMaybe<Scalars['URL']>;
  uuid: InputMaybe<Scalars['String']>;
};


export type QueryEntrySidebarArgs = {
  uid: InputMaybe<Scalars['ID']>;
  uuid: InputMaybe<Scalars['String']>;
};


export type QueryEntrySidebarsArgs = {
  uids: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  uuids: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEntryVideoArgs = {
  key: InputMaybe<Scalars['ID']>;
  uid: InputMaybe<Scalars['ID']>;
};


export type QueryEntryVideosArgs = {
  keys: InputMaybe<Array<Scalars['ID']>>;
  uids: InputMaybe<Array<Scalars['ID']>>;
};


export type QueryFeedArgs = {
  id: Scalars['Int'];
};


export type QueryHubPageArgs = {
  id: InputMaybe<Scalars['Int']>;
  uid: InputMaybe<Scalars['ID']>;
  url: InputMaybe<Scalars['String']>;
};


export type QueryHubPagesArgs = {
  ids: InputMaybe<Array<Scalars['Int']>>;
  uids: InputMaybe<Array<Scalars['ID']>>;
  urls: InputMaybe<Array<Scalars['String']>>;
};


export type QueryLinkSetArgs = {
  id: InputMaybe<Scalars['Int']>;
  uid: InputMaybe<Scalars['ID']>;
};


export type QueryLinkSetsArgs = {
  ids: InputMaybe<Array<Scalars['Int']>>;
  uids: InputMaybe<Array<Scalars['ID']>>;
};


export type QueryLiveCoverageEventArgs = {
  id: Scalars['Int'];
};


export type QueryLiveCoverageEventsArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryLocaleArgs = {
  id: Scalars['Int'];
};


export type QueryLocalesArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryMatchLinkArgs = {
  link: Scalars['String'];
  locale?: InputMaybe<SupportedLocales>;
  networkId?: InputMaybe<SupportedNetworks>;
  rewrite?: InputMaybe<Scalars['Boolean']>;
};


export type QueryMatchLinksArgs = {
  links: Array<Scalars['String']>;
  locale?: InputMaybe<SupportedLocales>;
  networkId?: InputMaybe<SupportedNetworks>;
  rewrite?: InputMaybe<Scalars['Boolean']>;
};


export type QueryMigratedVideoProjectArgs = {
  migrationUuid: Scalars['String'];
  providerId: Scalars['Int'];
};


export type QueryMmaEventArgs = {
  id: Scalars['Int'];
};


export type QueryMmaEventsArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryMmaFightArgs = {
  id: Scalars['Int'];
};


export type QueryMmaFighterArgs = {
  id: Scalars['Int'];
};


export type QueryMmaFightersArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryMmaFightsArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryMmaPromotionArgs = {
  id: Scalars['Int'];
};


export type QueryMmaPromotionsArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryMmaWeightClassArgs = {
  id: Scalars['Int'];
};


export type QueryMmaWeightClassesArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryNeighborhoodArgs = {
  id: Scalars['Int'];
};


export type QueryNeighborhoodsArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryNetworkArgs = {
  domain: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  slug: InputMaybe<Scalars['String']>;
  uid: InputMaybe<Scalars['ID']>;
};


export type QueryNetworksArgs = {
  domains: InputMaybe<Array<Scalars['String']>>;
  ids: InputMaybe<Array<Scalars['Int']>>;
  slugs: InputMaybe<Array<Scalars['String']>>;
  uids: InputMaybe<Array<Scalars['ID']>>;
};


export type QueryOpentableVenueArgs = {
  id: Scalars['Int'];
};


export type QueryOpentableVenuesArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryOrganizationArgs = {
  id: InputMaybe<Scalars['Int']>;
  slug: InputMaybe<Scalars['String']>;
  uid: InputMaybe<Scalars['ID']>;
};


export type QueryOrganizationsArgs = {
  ids: InputMaybe<Array<Scalars['Int']>>;
  slugs: InputMaybe<Array<Scalars['String']>>;
  uids: InputMaybe<Array<Scalars['ID']>>;
};


export type QueryPlaceArgs = {
  id: Scalars['Int'];
};


export type QueryPlacesArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryProductArgs = {
  id: Scalars['Int'];
};


export type QueryProductBrandArgs = {
  id: Scalars['Int'];
};


export type QueryProductBrandsArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryProductCategoriesArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryProductCategoryArgs = {
  id: Scalars['Int'];
};


export type QueryProductsArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryProjectSourceArgs = {
  uuid: Scalars['String'];
};


export type QueryRedirectArgs = {
  id: Scalars['Int'];
};


export type QueryRedirectsArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryRegisteredQueryArgs = {
  slug: Scalars['String'];
};


export type QuerySearchAdvertisersArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchAssetsArgs = {
  query: AssetSearchQuery;
};


export type QuerySearchBuildingsArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchCampaignsArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchCommunitiesArgs = {
  query: InputMaybe<CommunitySearchQuery>;
};


export type QuerySearchEntryGroupsArgs = {
  query: InputMaybe<EntryGroupSearchQuery>;
};


export type QuerySearchLiveCoverageEventsArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchLocalesArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchMmaEventsArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchMmaFightersArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchMmaFightsArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchMmaPromotionsArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchMmaWeightClassesArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchNeighborhoodsArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchOpentableVenuesArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchPlacesArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchProductBrandsArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchProductCategoriesArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchProductsArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchRedirectsArgs = {
  query: InputMaybe<RedirectSearchQuery>;
};


export type QuerySearchShoppingDealsArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchSportConferencesArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchSportDivisionsArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchSportEventsArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchSportLeaguesArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchSportPlayersArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchSportTeamsArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchSportTicketsArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchSportsArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchTicketEventsArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchUsersArgs = {
  query: InputMaybe<UserSearchQuery>;
};


export type QuerySearchVenuesArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchVideoGameFranchisesArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchVideoGamePlatformGroupsArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchVideoGamePlatformsArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchVideoGamesArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


export type QuerySearchVideoProjectsArgs = {
  query: VideoProjectSearchQuery;
};


export type QuerySearchVideoTagsArgs = {
  query: VideoTagSearchQuery;
};


export type QueryShoppingDealArgs = {
  id: Scalars['Int'];
};


export type QueryShoppingDealsArgs = {
  ids: Array<Scalars['Int']>;
};


export type QuerySourceDownloadArgs = {
  uuid: Scalars['String'];
};


export type QuerySportArgs = {
  id: Scalars['Int'];
};


export type QuerySportConferenceArgs = {
  id: Scalars['Int'];
};


export type QuerySportConferencesArgs = {
  ids: Array<Scalars['Int']>;
};


export type QuerySportDivisionArgs = {
  id: Scalars['Int'];
};


export type QuerySportDivisionsArgs = {
  ids: Array<Scalars['Int']>;
};


export type QuerySportEventArgs = {
  id: Scalars['Int'];
};


export type QuerySportEventsArgs = {
  ids: Array<Scalars['Int']>;
};


export type QuerySportLeagueArgs = {
  id: Scalars['Int'];
};


export type QuerySportLeaguesArgs = {
  ids: Array<Scalars['Int']>;
};


export type QuerySportPlayerArgs = {
  id: Scalars['Int'];
};


export type QuerySportPlayersArgs = {
  ids: Array<Scalars['Int']>;
};


export type QuerySportTeamArgs = {
  id: Scalars['Int'];
};


export type QuerySportTeamsArgs = {
  ids: Array<Scalars['Int']>;
};


export type QuerySportTicketArgs = {
  id: Scalars['Int'];
};


export type QuerySportTicketsArgs = {
  ids: Array<Scalars['Int']>;
};


export type QuerySportsArgs = {
  ids: Array<Scalars['Int']>;
};


export type QuerySyndicationPartnersArgs = {
  networkId: InputMaybe<Scalars['Int']>;
  providerId: InputMaybe<Scalars['Int']>;
  publisherId: InputMaybe<Scalars['Int']>;
};


export type QueryTicketEventArgs = {
  id: Scalars['Int'];
};


export type QueryTicketEventsArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryUserArgs = {
  email: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['Int']>;
  uid: InputMaybe<Scalars['ID']>;
  username: InputMaybe<Scalars['String']>;
};


export type QueryUsersArgs = {
  emails: InputMaybe<Array<Scalars['String']>>;
  ids: InputMaybe<Array<Scalars['Int']>>;
  uids: InputMaybe<Array<Scalars['ID']>>;
  usernames: InputMaybe<Array<Scalars['String']>>;
};


export type QueryVenueArgs = {
  id: Scalars['Int'];
};


export type QueryVenuesArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryVideoBrandConfigArgs = {
  networkId: InputMaybe<Scalars['Int']>;
  providerId: InputMaybe<Scalars['Int']>;
  publisherId: InputMaybe<Scalars['Int']>;
};


export type QueryVideoCategoriesArgs = {
  providerId: Scalars['Int'];
};


export type QueryVideoGameArgs = {
  id: Scalars['Int'];
};


export type QueryVideoGameFranchiseArgs = {
  id: Scalars['Int'];
};


export type QueryVideoGameFranchisesArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryVideoGamePlatformArgs = {
  id: Scalars['Int'];
};


export type QueryVideoGamePlatformGroupArgs = {
  id: Scalars['Int'];
};


export type QueryVideoGamePlatformGroupsArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryVideoGamePlatformsArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryVideoGamesArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryVideoProjectArgs = {
  id: InputMaybe<Scalars['Int']>;
  platformId: InputMaybe<Scalars['Int']>;
  uuid: InputMaybe<Scalars['String']>;
};


export type QueryVideoProjectsArgs = {
  ids: InputMaybe<Array<Scalars['Int']>>;
  platformIds: InputMaybe<Array<Scalars['Int']>>;
  uuids: InputMaybe<Array<Scalars['String']>>;
};


export type QueryVideoSeriesArgs = {
  networkId: InputMaybe<Scalars['Int']>;
  providerId: InputMaybe<Scalars['Int']>;
};


export type QueryVideoTypesArgs = {
  networkId: InputMaybe<Scalars['Int']>;
  providerId: InputMaybe<Scalars['Int']>;
};

export type Redirect = {
  __typename?: 'Redirect';
  destination: Scalars['String'];
  host: Scalars['String'];
  id: Scalars['Int'];
  path: Scalars['String'];
  status: Scalars['Int'];
};

export type RedirectCreateInput = {
  /** The community who's domain will be used to set the host value of the redirect */
  community: CommunityUniqueKeyInput;
  /**
   * This is the url or path you want to redirect to.
   * If you want to redirect to something on the same domain use just a path: `/this-is-a-path`.
   * If you want to redirect to a different domain, you must include the domain: `otherdomain.com/this-is-domain-and-path`.
   * It cannot end in a slash (ex: /foo/).
   */
  destination: Scalars['String'];
  /** This is the source path where to redirect from.  It must begin with a slash (/) */
  path: Scalars['String'];
  /**
   * The HTTP status code to use for the redirect.
   *
   * The following values are supported:
   * - 301 - Permanent. Use with GET or HEAD requests
   * - 302 - Temporary. Use with GET or HEAD requests
   * - 307 - Temporary. Use with POST, PATCH, PUT, or DELETE requests
   * - 308 - Permanent. Use with POST, PATCH, PUT, or DELETE requests
   */
  status: InputMaybe<Scalars['Int']>;
};

export type RedirectCreateResult = {
  __typename?: 'RedirectCreateResult';
  redirect: Redirect;
};

export type RedirectCreatedEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: RedirectEventSubjectInput;
};

export type RedirectDeleteResult = {
  __typename?: 'RedirectDeleteResult';
  redirect: Redirect;
};

export type RedirectDestroyedEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: RedirectEventSubjectInput;
};

export type RedirectEventSubjectInput = {
  communityUid: Scalars['ID'];
  destination: Scalars['String'];
  networkUid: Scalars['ID'];
  organizationUid: Scalars['ID'];
  path: Scalars['String'];
  status: Scalars['Int'];
  uid: Scalars['ID'];
};

export type RedirectImportInput = {
  /**
   * The CSV data as a string.
   *
   * CSV must include three columns with the headers *source*, *destination*, and *status*. The header names are
   * case sensitive so take care to use all-lowercase letters. The source and destination fields must be valid URIs -
   * an absolute URL with the scheme, host, and path defined or a relative URL with just the path.
   * The source column should have the URIs you want to redirect and the destination column should have the
   * URIs you want the "old" URLs redirected to. The status column should have the redirect status code (if you are in doubt
   * about what to select, you probably want 301.)
   *
   * Redirects that exist and have the same source, destination, and status (if specified) will not be updated. Redirects with the same source,
   * but a different destination and/or status will be updated. And if no redirect is found matching the host & source, a new one will be created.
   */
  csv: Scalars['String'];
};

export type RedirectImportResult = {
  __typename?: 'RedirectImportResult';
  /** The import job was queued successfully */
  importQueued: Maybe<Scalars['Boolean']>;
  /** The email address the results of the import will be sent to */
  recipientEmail: Maybe<Scalars['String']>;
};

/**
 * One portion of results from a paginated Redirect query. i.e. The return type of the `Query.searchRedirects` field.
 *
 * At most `perPage` results are included, according to the corresponding input parameter (see [`RedirectSearchQuery.perPage`](/docs/reference/input_object/RedirectSearchQuery.html)).
 *
 * The first result has the offset `perPage * (pageNumber - 1)` in the full result set.
 */
export type RedirectPage = {
  __typename?: 'RedirectPage';
  /** The page number of current redirect page. */
  pageNumber: Scalars['Int'];
  /** The limit on results per page. */
  perPage: Scalars['Int'];
  /** A list of Redirect results in this page. */
  results: Array<Maybe<Redirect>>;
  /** The total count of redirects in the result set. */
  totalCount: Scalars['Int'];
};

/** Describes the desired conditions, pagination, and sort order for a redirect search. */
export type RedirectSearchQuery = {
  /** Filter redirects by community */
  communityId: InputMaybe<Scalars['Int']>;
  /** Filter redirects by destination */
  destination: InputMaybe<Scalars['String']>;
  /** Filter redirects by network */
  networkId: InputMaybe<Scalars['Int']>;
  /** Specify a dimension and direction to order results in, e.g. "id desc". */
  orderBy: InputMaybe<Scalars['String']>;
  /** The target page number of this entry search. */
  pageNumber: InputMaybe<Scalars['Int']>;
  /** Filter redirects by path */
  path: InputMaybe<Scalars['String']>;
  /** The desired records per page of results, maximum of 100. */
  perPage: InputMaybe<Scalars['Int']>;
  /** Filter redirects by status */
  status: InputMaybe<Scalars['Int']>;
};

export type RedirectUniqueKeyInput = {
  id: Scalars['Int'];
};

export type RedirectUpdateInput = {
  /** The community who's domain will be used to set the host value of the redirect */
  community: InputMaybe<CommunityUniqueKeyInput>;
  /**
   * This is the url or path you want to redirect to.
   * If you want to redirect to something on the same domain use just a path: `/this-is-a-path`.
   * If you want to redirect to a different domain, you must include the domain: `otherdomain.com/this-is-domain-and-path`.
   * It cannot end in a slash (ex: /foo/).
   */
  destination: InputMaybe<Scalars['String']>;
  /** This is the source path where to redirect from.  It must begin with a slash (/) */
  path: InputMaybe<Scalars['String']>;
  /**
   * The HTTP status code to use for the redirect.
   *
   * The following values are supported:
   * - 301 - Permanent. Use with GET or HEAD requests
   * - 302 - Temporary. Use with GET or HEAD requests
   * - 307 - Temporary. Use with POST, PATCH, PUT, or DELETE requests
   * - 308 - Permanent. Use with POST, PATCH, PUT, or DELETE requests
   */
  status: InputMaybe<Scalars['Int']>;
};

export type RedirectUpdateResult = {
  __typename?: 'RedirectUpdateResult';
  redirect: Redirect;
};

export type RedirectUpdatedEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: RedirectUpdatedEventSubjectInput;
};

export type RedirectUpdatedEventSubjectInput = {
  communityUid: Scalars['ID'];
  destination: Scalars['String'];
  networkUid: Scalars['ID'];
  oldDestination: InputMaybe<Scalars['String']>;
  oldPath: InputMaybe<Scalars['String']>;
  organizationUid: Scalars['ID'];
  path: Scalars['String'];
  status: Scalars['Int'];
  uid: Scalars['ID'];
};

export type RegisteredQuery = {
  __typename?: 'RegisteredQuery';
  query: Scalars['String'];
  slug: Scalars['String'];
  url: Scalars['URL'];
};

export type RegisteredQueryCreateInput = {
  overwrite: InputMaybe<Scalars['Boolean']>;
  query: Scalars['String'];
  slug: InputMaybe<Scalars['String']>;
};

export type RegisteredQueryCreateResult = {
  __typename?: 'RegisteredQueryCreateResult';
  registeredQuery: RegisteredQuery;
};

export type RegisteredQueryRemoveInput = {
  slug: Scalars['String'];
};

export type RegisteredQueryRemoveResult = {
  __typename?: 'RegisteredQueryRemoveResult';
  success: Scalars['Boolean'];
};

/**
 * Represents a single line of text with inline formatting.
 * Hard line breaks (Return key) produce separate `RichText` objects,
 * while soft line breaks (Shift + Return) are inlined as `\n` characters.
 */
export type RichText = {
  __typename?: 'RichText';
  /**
   * Provides the text rendered with inline HTML tags,
   * including `a`, `br`, `em`, `small`, `strike`, `strong`, `sub`, and `sup`.
   * Editorial comments (`mark` formats) are omitted.
   * This inline html format is stable, structurally optimized,
   * and suitable for use in production apps.
   */
  html: Scalars['String'];
  /**
   * A [Quill Delta](https://quilljs.com/docs/delta/) of rich text formatting operations.
   * Each operation is guaranteed to use the `insert` property, with optional `attributes`.
   * For more information about possible attributes, see [`RichTextOp`](/docs/reference/scalar/RichTextOp.html).
   */
  ops: Array<Scalars['RichTextOp']>;
  /**
   * Provides the plain text string without any formatting.
   * Editorial comments (`mark` formats) are omitted.
   */
  plaintext: Scalars['String'];
};

/**
 * Modify a [`RichText`](/docs/reference/object/RichText.html) value by specifying an operation to perform.
 * Exactly one field must be specified.
 */
export type RichTextInput = {
  /**
   * Add formatted text to the end of the current value.
   * If the current value is `null`, acts as `assign`.
   */
  append: InputMaybe<RichTextValueInput>;
  /** Overwrite the existing value. */
  assign: InputMaybe<RichTextValueInput>;
  /** Overwrite the existing value only if it is `null` or empty (`""`). */
  assignIfBlank: InputMaybe<RichTextValueInput>;
  /**
   * Apply a character-level patch to the current value using the ["Quill Delta"](https://quilljs.com/docs/delta/) format.
   * If the current value is `null`, an error is returned.
   * If the provided patch does not apply cleanly to the current value, an error is returned.
   */
  patch: InputMaybe<Array<Scalars['RichTextOp']>>;
  /**
   * Add formatted text to the beginning of the current value.
   * If the current value is `null`, acts as `assign`.
   */
  prepend: InputMaybe<RichTextValueInput>;
};

/**
 * Specify a value to assign, append, or prepend to a [`RichText`](/docs/reference/object/RichText.html) field.
 * Exactly one field must be specified.
 */
export type RichTextValueInput = {
  /**
   * Inline HTML markup.
   * All tags except the following will be stripped: `<b>`, `<strong>`, `<i>`, `<em>`, `<a>`, `<mark>`, `<small>`, `<strike>`, `<sub>`, `<sup>`.
   */
  html: InputMaybe<Scalars['String']>;
  /**
   * An array of ops that together form a ["Quill Delta"](https://quilljs.com/docs/delta/).
   * Each op must use `insert` property, not `retain` or `delete`.
   */
  ops: InputMaybe<Array<Scalars['RichTextOp']>>;
  /**
   * An unformatted string.
   * HTML tags will be escaped.
   */
  plaintext: InputMaybe<Scalars['String']>;
};

export type Role = {
  __typename?: 'Role';
  name: RoleName;
  scopeId: Scalars['Int'];
  scopeType: RoleScopeType;
  user: User;
};

export enum RoleName {
  AbleToIpBan = 'ABLE_TO_IP_BAN',
  AssetManager = 'ASSET_MANAGER',
  Author = 'AUTHOR',
  BetaTester = 'BETA_TESTER',
  BypassTwoFactorAuthentication = 'BYPASS_TWO_FACTOR_AUTHENTICATION',
  CampaignsAdmin = 'CAMPAIGNS_ADMIN',
  ChorusManager = 'CHORUS_MANAGER',
  CommunityPostAuthor = 'COMMUNITY_POST_AUTHOR',
  Editor = 'EDITOR',
  EditorialAppsAdmin = 'EDITORIAL_APPS_ADMIN',
  Employee = 'EMPLOYEE',
  ExternalApiClient = 'EXTERNAL_API_CLIENT',
  ExternalDeveloper = 'EXTERNAL_DEVELOPER',
  Freelance = 'FREELANCE',
  GrowthAndAnalytics = 'GROWTH_AND_ANALYTICS',
  HeadlessAdmin = 'HEADLESS_ADMIN',
  InternalMember = 'INTERNAL_MEMBER',
  Manager = 'MANAGER',
  Member = 'MEMBER',
  Moderator = 'MODERATOR',
  NetworkAdmin = 'NETWORK_ADMIN',
  NetworkEditor = 'NETWORK_EDITOR',
  NetworkOps = 'NETWORK_OPS',
  PteEditor = 'PTE_EDITOR',
  PublicAudience = 'PUBLIC_AUDIENCE',
  SupergroupAuthor = 'SUPERGROUP_AUTHOR',
  Trusted = 'TRUSTED',
  TrustedAuthor = 'TRUSTED_AUTHOR'
}

/**
 * IGNORE – documented in SBN.
 * Matches the SBN structure of the same name
 * Used to send universal role scopes into Volume
 */
export enum RoleScopeType {
  Community = 'COMMUNITY',
  Global = 'GLOBAL',
  Network = 'NETWORK',
  Organization = 'ORGANIZATION'
}

export type SendVideoFileForCaptioningInput = {
  id: Scalars['Int'];
  jobNumber: InputMaybe<Scalars['String']>;
};

/** aka Racked::Deal in Hermano. */
export type ShoppingDeal = {
  __typename?: 'ShoppingDeal';
  address: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description: Maybe<Scalars['String']>;
  draft: Scalars['Boolean'];
  endsAt: Maybe<Scalars['DateTime']>;
  externalForeignKey: Scalars['String'];
  featured: Scalars['Boolean'];
  hideFromAutotagger: Scalars['Boolean'];
  id: Scalars['Int'];
  lat: Maybe<Scalars['Float']>;
  lng: Maybe<Scalars['Float']>;
  locale: Maybe<Locale>;
  localeId: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
  startsAt: Maybe<Scalars['DateTime']>;
  state: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  url: Maybe<Scalars['String']>;
  zip: Maybe<Scalars['String']>;
};

export type ShoppingDealPage = {
  __typename?: 'ShoppingDealPage';
  pageNumber: Scalars['Int'];
  results: Array<ShoppingDeal>;
  totalCount: Scalars['Int'];
};

/** A social link that appears on user and author profiles. */
export type SocialLink = {
  __typename?: 'SocialLink';
  /** The label of this social link. */
  label: Maybe<Scalars['String']>;
  /** The social link type. */
  type: SocialLinkType;
  /** The HTTP URL of this social link. */
  url: Scalars['String'];
};

/** The types of SocialLinks to query by. */
export enum SocialLinkType {
  Email = 'EMAIL',
  Facebook = 'FACEBOOK',
  Instagram = 'INSTAGRAM',
  Profile = 'PROFILE',
  Rss = 'RSS',
  Snapchat = 'SNAPCHAT',
  Twitter = 'TWITTER',
  Website = 'WEBSITE'
}

/** aka SbnPte::Sport in Hermano. */
export type Sport = {
  __typename?: 'Sport';
  createdAt: Scalars['DateTime'];
  externalForeignKey: Scalars['String'];
  id: Scalars['Int'];
  leagues: Array<SportLeague>;
  name: Scalars['String'];
  slug: Scalars['String'];
  ticketsUrl: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** aka SbnPte::Conference in Hermano. */
export type SportConference = {
  __typename?: 'SportConference';
  createdAt: Scalars['DateTime'];
  displayName: Scalars['String'];
  divisions: Array<SportDivision>;
  externalForeignKey: Scalars['String'];
  id: Scalars['Int'];
  league: Maybe<SportLeague>;
  leagueId: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  teams: Array<SportTeam>;
  updatedAt: Scalars['DateTime'];
};

export type SportConferencePage = {
  __typename?: 'SportConferencePage';
  pageNumber: Scalars['Int'];
  results: Array<SportConference>;
  totalCount: Scalars['Int'];
};

/** aka SbnPte::Division in Hermano. */
export type SportDivision = {
  __typename?: 'SportDivision';
  conference: Maybe<SportConference>;
  conferenceId: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  displayName: Scalars['String'];
  externalForeignKey: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
  teams: Array<SportTeam>;
  updatedAt: Scalars['DateTime'];
};

export type SportDivisionPage = {
  __typename?: 'SportDivisionPage';
  pageNumber: Scalars['Int'];
  results: Array<SportDivision>;
  totalCount: Scalars['Int'];
};

/** aka SbnPte::Event in Hermano. */
export type SportEvent = {
  __typename?: 'SportEvent';
  awayTeam: SportTeam;
  awayTeamId: Scalars['Int'];
  awayTeamScore: Maybe<Scalars['Int']>;
  /** e.g. { type: 'American Football', cols: ['1', '2', '3', '4', 'Total'], home: ['0', '7', '7', '0', '14'], away: ['0', '0', '14', '7', '21'] } */
  boxScore: Maybe<Scalars['JSON']>;
  createdAt: Scalars['DateTime'];
  eventTime: Maybe<Scalars['DateTime']>;
  externalForeignKey: Scalars['String'];
  homeTeam: SportTeam;
  homeTeamId: Scalars['Int'];
  homeTeamScore: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  league: SportLeague;
  leagueId: Scalars['Int'];
  leagueSlug: Scalars['String'];
  location: Maybe<Scalars['String']>;
  name: Scalars['String'];
  period: Maybe<Scalars['String']>;
  season: Maybe<Scalars['Int']>;
  /** Possible values: 'regular', 'post', 'pre' */
  seasonType: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  sportsNetworkId: Maybe<Scalars['Int']>;
  statsllcId: Maybe<Scalars['Int']>;
  /** Possible values: 'pre-event', 'mid-event', 'post-event', 'canceled', 'postponed', 'intermission' */
  status: Maybe<Scalars['String']>;
  stubhubEventId: Maybe<Scalars['Int']>;
  stubhubEventTime: Maybe<Scalars['DateTime']>;
  stubhubMinTicketPrice: Maybe<Scalars['Float']>;
  stubhubTicketsAvailable: Maybe<Scalars['Int']>;
  tbd: Scalars['Boolean'];
  timeRemaining: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type SportEventPage = {
  __typename?: 'SportEventPage';
  pageNumber: Scalars['Int'];
  results: Array<SportEvent>;
  totalCount: Scalars['Int'];
};

/** aka SbnPte::League in Hermano. */
export type SportLeague = {
  __typename?: 'SportLeague';
  abbreviation: Maybe<Scalars['String']>;
  conferences: Array<SportConference>;
  createdAt: Scalars['DateTime'];
  externalForeignKey: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  normalNumPeriods: Maybe<Scalars['Int']>;
  searchEvents: Maybe<SportEventPage>;
  searchPlayers: Maybe<SportPlayerPage>;
  searchTeams: Maybe<SportTeamPage>;
  slug: Scalars['String'];
  sport: Maybe<Sport>;
  sportId: Maybe<Scalars['Int']>;
  ticketsUrl: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** aka SbnPte::League in Hermano. */
export type SportLeagueSearchEventsArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


/** aka SbnPte::League in Hermano. */
export type SportLeagueSearchPlayersArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


/** aka SbnPte::League in Hermano. */
export type SportLeagueSearchTeamsArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};

export type SportLeaguePage = {
  __typename?: 'SportLeaguePage';
  pageNumber: Scalars['Int'];
  results: Array<SportLeague>;
  totalCount: Scalars['Int'];
};

export type SportPage = {
  __typename?: 'SportPage';
  pageNumber: Scalars['Int'];
  results: Array<Sport>;
  totalCount: Scalars['Int'];
};

/** aka SbnPte::Player in Hermano. */
export type SportPlayer = {
  __typename?: 'SportPlayer';
  createdAt: Scalars['DateTime'];
  /** Formatted as yyyy-mm-dd */
  dateOfBirth: Maybe<Scalars['String']>;
  /** e.g. JR or 2017 */
  experience: Maybe<Scalars['String']>;
  externalForeignKey: Scalars['String'];
  firstName: Maybe<Scalars['String']>;
  /** e.g. 6'3" */
  height: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  jerseyNumber: Maybe<Scalars['Int']>;
  lastName: Maybe<Scalars['String']>;
  league: SportLeague;
  leagueId: Scalars['Int'];
  leagueSlug: Scalars['String'];
  /**
   * Format varies by sport
   *
   * e.g. { batting_hand: "R", throwing_hand: "R" }
   */
  moreInfo: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  /** e.g. 3B or WR */
  position: Maybe<Scalars['String']>;
  secondaryTeamIds: Array<Scalars['Int']>;
  /** e.g. 'National Team' */
  secondaryTeamLabels: Array<Scalars['String']>;
  secondaryTeams: Array<Maybe<SportTeam>>;
  slug: Maybe<Scalars['String']>;
  sportsNetworkId: Maybe<Scalars['Int']>;
  /**
   * Format: { <seasonType>: { <year>: { sport-specific key-values } }
   *
   * e.g. { pre: { 2014: { "Batting Average": ".204", ...etc } } }
   */
  statistics: Maybe<Scalars['JSON']>;
  statsllcId: Maybe<Scalars['Int']>;
  /** Possible values: 'active', 'inactive', 'injured', 'physically-unable', 'retired' */
  status: Maybe<Scalars['String']>;
  team: SportTeam;
  teamId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  /** As measured in Lbs */
  weight: Maybe<Scalars['Int']>;
};

export type SportPlayerPage = {
  __typename?: 'SportPlayerPage';
  pageNumber: Scalars['Int'];
  results: Array<SportPlayer>;
  totalCount: Scalars['Int'];
};

/** aka SbnPte::Team in Hermano. */
export type SportTeam = {
  __typename?: 'SportTeam';
  abbreviation: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  conference: Maybe<SportConference>;
  conferenceId: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  /** @deprecated no data present */
  currentRecord: Maybe<Scalars['String']>;
  division: Maybe<SportDivision>;
  divisionId: Maybe<Scalars['Int']>;
  draft: Scalars['Boolean'];
  externalForeignKey: Scalars['String'];
  fullName: Maybe<Scalars['String']>;
  hideFromAutotagger: Scalars['Boolean'];
  id: Scalars['Int'];
  league: Maybe<SportLeague>;
  leagueId: Maybe<Scalars['Int']>;
  leagueSlug: Maybe<Scalars['String']>;
  name: Scalars['String'];
  searchAwayEvents: Maybe<SportEventPage>;
  searchHomeEvents: Maybe<SportEventPage>;
  searchPlayers: Maybe<SportPlayerPage>;
  searchSecondaryPlayers: Maybe<SportPlayerPage>;
  slug: Scalars['String'];
  sport: Maybe<Sport>;
  sportId: Maybe<Scalars['Int']>;
  sportsNetworkId: Maybe<Scalars['String']>;
  statsllcId: Maybe<Scalars['Int']>;
  stubhubPerformerId: Maybe<Scalars['Int']>;
  ticketsUrl: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** aka SbnPte::Team in Hermano. */
export type SportTeamSearchAwayEventsArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


/** aka SbnPte::Team in Hermano. */
export type SportTeamSearchHomeEventsArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


/** aka SbnPte::Team in Hermano. */
export type SportTeamSearchPlayersArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};


/** aka SbnPte::Team in Hermano. */
export type SportTeamSearchSecondaryPlayersArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};

export type SportTeamPage = {
  __typename?: 'SportTeamPage';
  pageNumber: Scalars['Int'];
  results: Array<SportTeam>;
  totalCount: Scalars['Int'];
};

/** aka SbnPte::Ticket in Hermano. */
export type SportTicket = {
  __typename?: 'SportTicket';
  affiliateUrl: Maybe<Scalars['String']>;
  awayTeam: Maybe<SportTeam>;
  awayTeamId: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  domain: Maybe<Scalars['String']>;
  externalForeignKey: Scalars['String'];
  id: Scalars['Int'];
  league: Maybe<SportLeague>;
  leagueId: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  team: Maybe<SportTeam>;
  teamId: Maybe<Scalars['Int']>;
  ticketDate: Maybe<Scalars['String']>;
  ticketmasterEventId: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
  url: Maybe<Scalars['String']>;
};

export type SportTicketPage = {
  __typename?: 'SportTicketPage';
  pageNumber: Scalars['Int'];
  results: Array<SportTicket>;
  totalCount: Scalars['Int'];
};

export enum Status {
  Active = 'ACTIVE',
  Banned = 'BANNED',
  Deactivated = 'DEACTIVATED',
  Messaged = 'MESSAGED',
  PermissionsSuspended = 'PERMISSIONS_SUSPENDED',
  Provisional = 'PROVISIONAL',
  Warned = 'WARNED'
}

export enum StoryPlatform {
  Amp = 'AMP',
  Html = 'HTML'
}

export type SupportRequest = {
  __typename?: 'SupportRequest';
  /** Additional key/value attributes */
  additionalAttributes: Maybe<Array<SupportRequestAttribute>>;
  /** Email address */
  email: Scalars['String'];
  /** Detailed explanation for the request */
  explanation: Scalars['String'];
  /** Full name */
  name: Scalars['String'];
  /** The main reason for the request */
  summary: Scalars['String'];
};

/** Key value attributes */
export type SupportRequestAttribute = {
  __typename?: 'SupportRequestAttribute';
  key: Scalars['String'];
  value: Scalars['String'];
};

/** Input for support request attributes */
export type SupportRequestAttributeInput = {
  key: Scalars['String'];
  value: Scalars['String'];
};

/** Input for Personal Data support request */
export type SupportRequestCcpaInput = {
  /** Additional key value data for the request */
  additionalAttributes: InputMaybe<Array<SupportRequestAttributeInput>>;
  /** Email address */
  email: Scalars['String'];
  /** Detailed explanation for the request */
  explanation: Scalars['String'];
  /** Full name */
  name: Scalars['String'];
  /** The main reason for the request */
  summary: SupportRequestPersonalDataSummary;
};

export type SupportRequestCreateResult = {
  __typename?: 'SupportRequestCreateResult';
  supportRequest: SupportRequest;
};

/** Input for GDPR support request */
export type SupportRequestGdprInput = {
  /** Additional key value data for the request */
  additionalAttributes: InputMaybe<Array<SupportRequestAttributeInput>>;
  /** Email address */
  email: Scalars['String'];
  /** Detailed explanation for the request */
  explanation: Scalars['String'];
  /** Full name */
  name: Scalars['String'];
  /** The main reason for the request */
  summary: SupportRequestGdprSummary;
};

/** Options for GDPR summary, same as SupportRequest::GDPR_SUMMARY_OPTIONS */
export enum SupportRequestGdprSummary {
  /** Delete my personal information */
  Erase = 'ERASE',
  /** What personal information do you have about me? */
  Export = 'EXPORT',
  /** Other (explain below) */
  Other = 'OTHER'
}

/** Input for Personal Data support request */
export type SupportRequestPersonalDataInput = {
  /** Additional key value data for the request */
  additionalAttributes: InputMaybe<Array<SupportRequestAttributeInput>>;
  /** Email address */
  email: Scalars['String'];
  /** Detailed explanation for the request */
  explanation: Scalars['String'];
  /** Full name */
  name: Scalars['String'];
  /** The main reason for the request */
  summary: SupportRequestPersonalDataSummary;
};

/** Options for Personal Data summary, same as SupportRequest::PERSONAL_DATA_SUMMARY_OPTIONS */
export enum SupportRequestPersonalDataSummary {
  /** Close my account */
  Close = 'CLOSE',
  /** Opt out of the sale of my info */
  DoNotSell = 'DO_NOT_SELL',
  /** Delete my personal information */
  Erase = 'ERASE',
  /** What personal information do you have about me? */
  Export = 'EXPORT'
}

/** Supported locales are US and UK. Defaults to US */
export enum SupportedLocales {
  /** Indicates the locale is the UK */
  Uk = 'UK',
  /** Indicates the locale is the US */
  Us = 'US'
}

/** Supported networks are VERGE_US, NYMAG_US, and NYMAG_UK. Defaults to VERGE_US */
export enum SupportedNetworks {
  /** Indicates the network is UK based NY Mag */
  NymagUk = 'NYMAG_UK',
  /** Indicates the network is US based NY Mag */
  NymagUs = 'NYMAG_US',
  /** Indicates the network is US based The Verge */
  VergeUs = 'VERGE_US'
}

export type SyndicationPartner = {
  __typename?: 'SyndicationPartner';
  createdAt: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  templateKey: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
};

export enum SyndicationStatus {
  Expired = 'EXPIRED',
  Published = 'PUBLISHED',
  Scheduled = 'SCHEDULED'
}

/** Crop for Thumbor images. Two coordinates to mark where a crop should be. */
export type ThumborCrop = {
  bottomRight: Coordinate;
  topLeft: Coordinate;
};

/** aka Geo::Event in Hermano. */
export type TicketEvent = {
  __typename?: 'TicketEvent';
  createdAt: Scalars['DateTime'];
  date: Scalars['DateTime'];
  externalForeignKey: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  place: Maybe<Place>;
  placeId: Maybe<Scalars['Int']>;
  stubhubEventId: Maybe<Scalars['Int']>;
  stubhubMinTicketPrice: Maybe<Scalars['Float']>;
  stubhubTicketAvailable: Maybe<Scalars['Int']>;
  timeZone: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type TicketEventPage = {
  __typename?: 'TicketEventPage';
  pageNumber: Scalars['Int'];
  results: Array<TicketEvent>;
  totalCount: Scalars['Int'];
};

/** A Metric's value over time */
export type TimeseriesMetric = {
  __typename?: 'TimeseriesMetric';
  /** Hourly timestamp */
  timestamp: Maybe<Scalars['String']>;
  /** Metric value during specified hour */
  value: Maybe<Scalars['Int']>;
};

export type UpdateVideoAssetInput = {
  description: InputMaybe<Scalars['String']>;
  enableAds: InputMaybe<Scalars['Boolean']>;
  enableRelatedVideos: InputMaybe<Scalars['Boolean']>;
  feedExpirationDate: InputMaybe<Scalars['DateTime']>;
  feedId: InputMaybe<Scalars['Int']>;
  feedPublishDate: InputMaybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  imageFileId: InputMaybe<Scalars['Int']>;
  title: InputMaybe<Scalars['String']>;
  videoFileId: InputMaybe<Scalars['Int']>;
};

export type UpdateVideoProjectFileInput = {
  deleted: InputMaybe<Scalars['Boolean']>;
  fileUrl: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  size: InputMaybe<Scalars['BigInt']>;
  videoProjectId: InputMaybe<Scalars['Int']>;
};

export type UpdateVideoProjectInput = {
  categoryId: InputMaybe<Scalars['Int']>;
  chorusPlayerAssetId: InputMaybe<Scalars['Int']>;
  credits: InputMaybe<Array<InputMaybe<VideoCreditInput>>>;
  description: InputMaybe<Scalars['String']>;
  enableSyndication: InputMaybe<Scalars['Boolean']>;
  episodeNumber: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  keyname: InputMaybe<Scalars['String']>;
  knotchUnitId: InputMaybe<Scalars['String']>;
  migrationUuid: InputMaybe<Scalars['String']>;
  notes: InputMaybe<Scalars['String']>;
  operativeLineItem: InputMaybe<Scalars['String']>;
  operativeOrder: InputMaybe<Scalars['String']>;
  parentalRating: InputMaybe<VideoParentalRating>;
  providerId: InputMaybe<Scalars['Int']>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  revenueTypeId: InputMaybe<Scalars['Int']>;
  seasonNumber: InputMaybe<Scalars['Int']>;
  sequence: InputMaybe<Scalars['Int']>;
  seriesId: InputMaybe<Scalars['Int']>;
  simplereachPublisherId: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
  videoTags: InputMaybe<Array<InputMaybe<VideoTagInput>>>;
  videoTypeId: InputMaybe<Scalars['Int']>;
};

export type UpdateVideoProjectRightsInput = {
  broadDist: InputMaybe<Scalars['Boolean']>;
  cannotSyndicate: InputMaybe<Scalars['Boolean']>;
  complexTakedown: InputMaybe<Scalars['Boolean']>;
  cueSheetUrl: InputMaybe<Scalars['String']>;
  ownedOperated: InputMaybe<Scalars['Boolean']>;
  selfTakedown: InputMaybe<Scalars['Boolean']>;
  sensitive: InputMaybe<Scalars['Boolean']>;
  sensitiveDetails: InputMaybe<Scalars['String']>;
  videoProjectId: Scalars['Int'];
  videoProjectThumbnailId: InputMaybe<Scalars['Int']>;
  videoProjectVideoFileId: InputMaybe<Scalars['Int']>;
};

/** A Chorus user. */
export type User = {
  __typename?: 'User';
  activity: Array<UserActivityLog>;
  /** The author profile of this user. */
  authorProfile: Maybe<AuthorProfile>;
  /** Specifies if this User is permitted to access Chorus Video in the specified Chorus scope. */
  canAccessChorusVideo: Maybe<Scalars['Boolean']>;
  /** Specifies the ID of this User's record in Chorus Video. */
  chorusVideoId: Maybe<Scalars['Int']>;
  communityMembership: Maybe<CommunityMembership>;
  communityMemberships: Array<CommunityMembership>;
  createdOn: Scalars['DateTime'];
  /** The email address of this user. */
  email: Maybe<Scalars['String']>;
  /** The email address or email address associated with this user's third-party login. */
  emailOrLoginIdentityEmail: Maybe<Scalars['String']>;
  emailVerified: Scalars['Boolean'];
  /** The first name of this user. */
  firstName: Maybe<Scalars['String']>;
  forumMemberships: Array<ForumMembership>;
  /** The first name and last name of this user. */
  fullName: Maybe<Scalars['String']>;
  /** This user's full name or, if the full name does not exist, their username. */
  fullOrUserName: Scalars['String'];
  hasApiAccess: Scalars['Boolean'];
  /** An internal identifier for this user. */
  id: Scalars['Int'];
  /** user's last login to Chorus */
  lastLoginAt: Maybe<Scalars['DateTime']>;
  /** The last name of this user. */
  lastName: Maybe<Scalars['String']>;
  memberProfile: Maybe<MemberProfile>;
  /**
   * The user's membership in the given community
   * @deprecated Use communityMembership instead.
   */
  membership: Maybe<CommunityMembership>;
  /**
   * The user's community memberships in the given network (or across all networks if networkId is null)
   * @deprecated Use communityMemberships instead.
   */
  memberships: Array<CommunityMembership>;
  networkMembership: Maybe<NetworkMembership>;
  networkMemberships: Array<NetworkMembership>;
  networkRoles: Array<NetworkRole>;
  /** Return the Organization to which the User belongs */
  organization: Maybe<Organization>;
  roles: Array<Maybe<Role>>;
  status: Status;
  /** The canonical identifier for user's IANA time zone, e.g., 'America/New_York'. */
  timeZone: Maybe<Scalars['TimeZone']>;
  twitterUsername: Maybe<Scalars['String']>;
  /** A unique identifier for this user. */
  uid: Scalars['ID'];
  /** The user's public profile username. */
  username: Scalars['String'];
  /** A version number that is incremented any time the User is modified. Useful for including in cache keys. */
  version: Scalars['Int'];
};


/** A Chorus user. */
export type UserActivityArgs = {
  communityId: Scalars['Int'];
  pageNumber?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


/** A Chorus user. */
export type UserAuthorProfileArgs = {
  communityId: Scalars['Int'];
};


/** A Chorus user. */
export type UserCanAccessChorusVideoArgs = {
  scopeId: Scalars['Int'];
  scopeType: RoleScopeType;
};


/** A Chorus user. */
export type UserCommunityMembershipArgs = {
  communityId: Scalars['Int'];
};


/** A Chorus user. */
export type UserCommunityMembershipsArgs = {
  networkId: InputMaybe<Scalars['Int']>;
};


/** A Chorus user. */
export type UserForumMembershipsArgs = {
  communityId: Scalars['Int'];
};


/** A Chorus user. */
export type UserMemberProfileArgs = {
  communityId: Scalars['Int'];
};


/** A Chorus user. */
export type UserMembershipArgs = {
  communityId: Scalars['Int'];
};


/** A Chorus user. */
export type UserMembershipsArgs = {
  networkId: InputMaybe<Scalars['Int']>;
};


/** A Chorus user. */
export type UserNetworkMembershipArgs = {
  networkId: Scalars['Int'];
};

/** A Chorus user */
export type UserActivityLog = {
  __typename?: 'UserActivityLog';
  activityType: Scalars['String'];
  contentBody: Maybe<Scalars['String']>;
  contentCreatedOn: Scalars['DateTime'];
  contentEntryTitle: Maybe<Scalars['String']>;
  contentTitle: Maybe<Scalars['String']>;
  contentUrl: Maybe<Scalars['String']>;
};

export type UserDestroyedEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: UserEventSubjectInput;
};

export type UserEventSubjectInput = {
  communityUid: Scalars['ID'];
  networkUid: Scalars['ID'];
  organizationUid: Scalars['ID'];
  uid: Scalars['ID'];
  userId: Scalars['ID'];
};

export type UserPage = {
  __typename?: 'UserPage';
  pageNumber: Scalars['Int'];
  perPage: Scalars['Int'];
  results: Array<Maybe<User>>;
  totalCount: Scalars['Int'];
};

/**
 * Common interface for concrete user profile types
 * (currently AuthorProfile and MemberProfile)
 */
export type UserProfile = {
  /** User's bio -- usually around a pragraph */
  bio: Maybe<Scalars['String']>;
  /** The community this user profile belongs to. */
  community: Community;
  /** URL to user's profile image */
  imageUrl: Maybe<Scalars['URL']>;
  /**
   * The user's name for public display. Could be username or
   * full name or something else, depending on community settings
   * and the concrete implementation of this interface.
   */
  name: Scalars['String'];
  /** User's slug -- vanity portion of the URL */
  slug: Maybe<Scalars['String']>;
  /** Social links for the given user; will vary based on profile type */
  socialLinks: Array<SocialLink>;
  /** User's title -- usually just a few words */
  title: Maybe<Scalars['String']>;
  /** The URL where this user profile may be viewed. */
  url: Scalars['URL'];
  /** The user behind this user profile. */
  user: User;
};

export type UserSearchQuery = {
  /** Matching users must have a membership in at least one of the provided community ids */
  communityIds: InputMaybe<Array<Scalars['Int']>>;
  /**
   * In lieu of a matching community membership (see the `communityIds` and `roles` fields),
   * users must have one of these network roles
   */
  fallbackNetworkRoles: InputMaybe<Array<NetworkRole>>;
  /** Matching users must have provided organization id, defaults to -1 */
  organizationId: InputMaybe<Scalars['Int']>;
  pageNumber: InputMaybe<Scalars['Int']>;
  perPage: InputMaybe<Scalars['Int']>;
  /**
   * When true, `text` matches only exact phrases, allowing prefix matching on
   * the last term in `text`. Can be useful for autocomplete inputs.
   */
  prefix: InputMaybe<Scalars['Boolean']>;
  /** Matching users must have a community membership with one of the given roles */
  roles: InputMaybe<Array<RoleName>>;
  /** Matching users must be one of the provided statuses */
  statuses: InputMaybe<Array<Status>>;
  /** Search keywords to match against, matching phrases boost relevance score. */
  text: InputMaybe<Scalars['String']>;
};

/**
 * Identify an existing [`User`](/docs/reference/object/User.html) by a unique key.
 * Exactly one field must be specified.
 */
export type UserUniqueKeyInput = {
  /** An email address. */
  email: InputMaybe<Scalars['String']>;
  /** An internal numeric identifier. */
  id: InputMaybe<Scalars['Int']>;
  /** A unique identifier set by Chorus. */
  uid: InputMaybe<Scalars['ID']>;
  /** A username. */
  username: InputMaybe<Scalars['String']>;
};

export type UserUpdatedEventInput = {
  occurredAt: Scalars['DateTime'];
  subject: UserEventSubjectInput;
};

/**
 * Represents a restaurant or other establishment, primarily used by Eater.
 * aka Geo::Venue in Hermano.
 */
export type Venue = PlaceDetail & {
  __typename?: 'Venue';
  address: Maybe<Scalars['String']>;
  category: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  closed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  crossstreet: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  draft: Scalars['Boolean'];
  externalForeignKey: Scalars['String'];
  foursquareId: Maybe<Scalars['String']>;
  foursquareTipId: Maybe<Scalars['String']>;
  googlePlaceId: Maybe<Scalars['String']>;
  hideFromAutotagger: Scalars['Boolean'];
  id: Scalars['Int'];
  imageUrls: Array<Scalars['String']>;
  lat: Maybe<Scalars['Float']>;
  lng: Maybe<Scalars['Float']>;
  locale: Locale;
  localeId: Scalars['Int'];
  name: Scalars['String'];
  network: Scalars['String'];
  opentableId: Maybe<Scalars['Int']>;
  opentableVenue: Maybe<OpentableVenue>;
  phone: Maybe<Scalars['String']>;
  place: Place;
  placeId: Scalars['Int'];
  priceTier: Maybe<Scalars['Int']>;
  slug: Scalars['String'];
  state: Maybe<Scalars['String']>;
  stubhubUpcomingEventCount: Maybe<Scalars['Int']>;
  stubhubVenueId: Maybe<Scalars['Int']>;
  twitter: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  url: Maybe<Scalars['String']>;
  zip: Maybe<Scalars['String']>;
};

export type VenuePage = {
  __typename?: 'VenuePage';
  pageNumber: Scalars['Int'];
  results: Array<Venue>;
  totalCount: Scalars['Int'];
};

export type VideoAccount = {
  __typename?: 'VideoAccount';
  code: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
};

export type VideoAsset = {
  __typename?: 'VideoAsset';
  accountId: Scalars['Int'];
  channelName: Maybe<Scalars['String']>;
  cmsId: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  duration: Maybe<Scalars['Int']>;
  embedTag: Maybe<Scalars['String']>;
  enableAds: Maybe<Scalars['Boolean']>;
  enableRelatedVideos: Maybe<Scalars['Boolean']>;
  feed: Maybe<Feed>;
  feedExpirationDate: Maybe<Scalars['DateTime']>;
  feedPublishDate: Maybe<Scalars['DateTime']>;
  hidden: Scalars['Boolean'];
  id: Scalars['Int'];
  imageFileId: Maybe<Scalars['Int']>;
  isPrimary: Scalars['Boolean'];
  isRefreshable: Scalars['Boolean'];
  livestream: Scalars['Boolean'];
  permalink: Maybe<Scalars['String']>;
  platformId: Maybe<Scalars['String']>;
  previewStatus: Maybe<Scalars['String']>;
  providerId: Maybe<Scalars['Int']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  refreshedAt: Maybe<Scalars['DateTime']>;
  status: Scalars['String'];
  statusMessage: Maybe<Scalars['String']>;
  syndicationStatus: Maybe<SyndicationStatus>;
  title: Maybe<Scalars['String']>;
  type: VideoAssetType;
  videoFileId: Maybe<Scalars['Int']>;
  videoProjectId: Maybe<Scalars['Int']>;
};

export enum VideoAssetInputType {
  AppleNewsAsset = 'APPLE_NEWS_ASSET',
  ChorusAsset = 'CHORUS_ASSET',
  FacebookAsset = 'FACEBOOK_ASSET',
  FeedAsset = 'FEED_ASSET',
  YoutubeAsset = 'YOUTUBE_ASSET'
}

export enum VideoAssetType {
  AppleNewsAsset = 'APPLE_NEWS_ASSET',
  BrightcoveAsset = 'BRIGHTCOVE_ASSET',
  ChorusAsset = 'CHORUS_ASSET',
  FacebookAsset = 'FACEBOOK_ASSET',
  FeedAsset = 'FEED_ASSET',
  OoyalaAsset = 'OOYALA_ASSET',
  YoutubeAsset = 'YOUTUBE_ASSET'
}

export type VideoBrandConfig = {
  __typename?: 'VideoBrandConfig';
  customPlayerSkin: Scalars['String'];
  enablesAdvancedMetadata: Scalars['Boolean'];
  enablesAppleNews: Scalars['Boolean'];
  enablesCaptioning: Scalars['Boolean'];
  enablesCaptioningJobNumber: Scalars['Boolean'];
  enablesChorusPlayer: Scalars['Boolean'];
  enablesFacebook: Scalars['Boolean'];
  enablesGoogleAnalytics: Scalars['Boolean'];
  enablesHeadless: Scalars['Boolean'];
  enablesKnotch: Scalars['Boolean'];
  enablesRights: Scalars['Boolean'];
  enablesSimpleReach: Scalars['Boolean'];
  enablesSyndication: Scalars['Boolean'];
  enablesTranscoding: Scalars['Boolean'];
  enablesYouTube: Scalars['Boolean'];
  manualTranscoding: Scalars['Boolean'];
  namespace: Scalars['String'];
};

export type VideoBrightcoveInfo = {
  __typename?: 'VideoBrightcoveInfo';
  autoNoAdsUrl: Maybe<Scalars['String']>;
  autoUrl: Maybe<Scalars['String']>;
  hlsNoAdsUrl: Maybe<Scalars['String']>;
  hlsUrl: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  mp4NoAdsUrl: Maybe<Scalars['String']>;
  mp4Url: Maybe<Scalars['String']>;
};

export type VideoCategory = {
  __typename?: 'VideoCategory';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type VideoCredit = {
  __typename?: 'VideoCredit';
  id: Scalars['Int'];
  name: Scalars['String'];
  role: Scalars['String'];
};

export type VideoCreditInput = {
  /** The ID generated for the Video Credit. */
  id: InputMaybe<Scalars['Int']>;
  /** The name of the person being credited. */
  name: Scalars['String'];
  /** The role of the credit. */
  role: Scalars['String'];
};

/** aka Polygon::Game in Hermano. */
export type VideoGame = {
  __typename?: 'VideoGame';
  createdAt: Scalars['DateTime'];
  developer: Maybe<Scalars['String']>;
  externalForeignKey: Scalars['String'];
  franchises: Array<Maybe<VideoGameFranchise>>;
  hideFromAutotagger: Scalars['Boolean'];
  id: Scalars['Int'];
  imageUrl: Maybe<Scalars['String']>;
  name: Scalars['String'];
  platforms: Array<Maybe<VideoGamePlatform>>;
  publisher: Maybe<Scalars['String']>;
  releaseDate: Maybe<Scalars['DateTime']>;
  /** e.g. 'March 2018' */
  releaseDisplayDate: Maybe<Scalars['String']>;
  reviewDate: Maybe<Scalars['DateTime']>;
  reviewScore: Maybe<Scalars['Float']>;
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

/** aka Polygon::Franchise in Hermano. */
export type VideoGameFranchise = {
  __typename?: 'VideoGameFranchise';
  createdAt: Scalars['DateTime'];
  externalForeignKey: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  searchGames: Maybe<VideoGamePage>;
  updatedAt: Scalars['DateTime'];
};


/** aka Polygon::Franchise in Hermano. */
export type VideoGameFranchiseSearchGamesArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};

export type VideoGameFranchisePage = {
  __typename?: 'VideoGameFranchisePage';
  pageNumber: Scalars['Int'];
  results: Array<VideoGameFranchise>;
  totalCount: Scalars['Int'];
};

export type VideoGamePage = {
  __typename?: 'VideoGamePage';
  pageNumber: Scalars['Int'];
  results: Array<VideoGame>;
  totalCount: Scalars['Int'];
};

/** aka Polygon::Platform in Hermano. */
export type VideoGamePlatform = {
  __typename?: 'VideoGamePlatform';
  createdAt: Scalars['DateTime'];
  externalForeignKey: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  platformGroup: Maybe<VideoGamePlatformGroup>;
  platformGroupId: Maybe<Scalars['Int']>;
  searchGames: Maybe<VideoGamePage>;
  shortName: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** aka Polygon::Platform in Hermano. */
export type VideoGamePlatformSearchGamesArgs = {
  query: InputMaybe<HermanoResourceSearchQuery>;
};

/** aka Polygon::PlatformGroup in Hermano. */
export type VideoGamePlatformGroup = {
  __typename?: 'VideoGamePlatformGroup';
  createdAt: Scalars['DateTime'];
  externalForeignKey: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  platforms: Array<VideoGamePlatform>;
  updatedAt: Scalars['DateTime'];
};

export type VideoGamePlatformGroupPage = {
  __typename?: 'VideoGamePlatformGroupPage';
  pageNumber: Scalars['Int'];
  results: Array<VideoGamePlatformGroup>;
  totalCount: Scalars['Int'];
};

export type VideoGamePlatformPage = {
  __typename?: 'VideoGamePlatformPage';
  pageNumber: Scalars['Int'];
  results: Array<VideoGamePlatform>;
  totalCount: Scalars['Int'];
};

export type VideoNetwork = {
  __typename?: 'VideoNetwork';
  brandConfig: VideoBrandConfig;
  createdAt: Maybe<Scalars['DateTime']>;
  domain: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Maybe<Scalars['String']>;
  providers: Array<Maybe<VideoProvider>>;
  publisher: VideoPublisher;
  syncedAt: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
};

export enum VideoParentalRating {
  Tv_14 = 'TV_14',
  TvG = 'TV_G',
  TvMa = 'TV_MA',
  TvPg = 'TV_PG',
  TvY = 'TV_Y',
  TvY_7 = 'TV_Y_7',
  TvY_7Fv = 'TV_Y_7_FV'
}

export type VideoProject = {
  __typename?: 'VideoProject';
  airtableId: Maybe<Scalars['String']>;
  brandConfig: VideoBrandConfig;
  brightcoveInfo: Maybe<VideoBrightcoveInfo>;
  category: Maybe<VideoCategory>;
  categoryId: Maybe<Scalars['Int']>;
  chorusPlayerAssetId: Maybe<Scalars['Int']>;
  createdAt: Maybe<Scalars['DateTime']>;
  createdBy: Maybe<Scalars['String']>;
  credits: Maybe<Array<Maybe<VideoCredit>>>;
  description: Maybe<Scalars['String']>;
  enableSyndication: Maybe<Scalars['Boolean']>;
  episodeNumber: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  isMetadataComplete: Scalars['Boolean'];
  jobCode: Maybe<Scalars['String']>;
  keyname: Maybe<Scalars['String']>;
  knotchUnitId: Maybe<Scalars['String']>;
  /** ManualFeeds the video could be syndicated to */
  manualFeeds: Maybe<Array<Maybe<Feed>>>;
  migrationFeedGuid: Maybe<Scalars['String']>;
  /** UUID from a previous CMS, used in migrations */
  migrationUuid: Maybe<Scalars['String']>;
  network: VideoNetwork;
  networkId: Maybe<Scalars['Int']>;
  notes: Maybe<Scalars['String']>;
  operativeLineItem: Maybe<Scalars['String']>;
  operativeOrder: Maybe<Scalars['String']>;
  parentalRating: VideoParentalRating;
  provider: VideoProvider;
  providerId: Maybe<Scalars['Int']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  publisher: VideoPublisher;
  publisherId: Maybe<Scalars['Int']>;
  revenueTypeId: Maybe<Scalars['Int']>;
  rights: Maybe<VideoProjectRights>;
  seasonNumber: Maybe<Scalars['Int']>;
  sequence: Maybe<Scalars['Int']>;
  series: Maybe<VideoSeries>;
  seriesId: Maybe<Scalars['Int']>;
  simplereachPublisherId: Maybe<Scalars['String']>;
  thumbnailUrl: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Maybe<Scalars['DateTime']>;
  updatedBy: Maybe<Scalars['String']>;
  uuid: Scalars['String'];
  videoAccounts: Maybe<Array<Maybe<VideoAccount>>>;
  videoAssets: Maybe<Array<Maybe<VideoAsset>>>;
  videoProjectFiles: Maybe<Array<Maybe<VideoProjectFile>>>;
  videoTags: Maybe<Array<Maybe<VideoTag>>>;
  videoType: VideoType;
  videoTypeId: Maybe<Scalars['Int']>;
};

export type VideoProjectFile = {
  __typename?: 'VideoProjectFile';
  aspectRatio: Maybe<Scalars['String']>;
  captioningJob: Maybe<VideoProjectFileJob>;
  children: Maybe<Array<Maybe<VideoProjectFile>>>;
  contentType: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  createdBy: Maybe<Scalars['String']>;
  deletedAt: Maybe<Scalars['DateTime']>;
  fileName: Maybe<Scalars['String']>;
  fileUrl: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isTranscoded: Maybe<Scalars['Boolean']>;
  md5: Maybe<Scalars['String']>;
  parent: Maybe<VideoProjectFile>;
  parentId: Maybe<Scalars['Int']>;
  publicUrl: Maybe<Scalars['String']>;
  siblings: Maybe<Array<Maybe<VideoProjectFile>>>;
  size: Maybe<Scalars['BigInt']>;
  source: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  statusMessage: Maybe<Scalars['String']>;
  thumbnailUrl: Maybe<Scalars['String']>;
  token: Maybe<Scalars['String']>;
  transcodingJob: Maybe<VideoProjectFileJob>;
  type: VideoProjectFileType;
  updatedAt: Maybe<Scalars['DateTime']>;
  updatedBy: Maybe<Scalars['String']>;
  videoProjectId: Maybe<Scalars['Int']>;
};

export type VideoProjectFileJob = {
  __typename?: 'VideoProjectFileJob';
  accountId: Scalars['Int'];
  allowRetry: Scalars['Boolean'];
  id: Scalars['Int'];
  orderNumber: Maybe<Scalars['String']>;
  remoteId: Maybe<Scalars['String']>;
  status: Scalars['String'];
  statusMessage: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export enum VideoProjectFileType {
  CaptionedHlsPlaylistUpload = 'CAPTIONED_HLS_PLAYLIST_UPLOAD',
  CaptionUpload = 'CAPTION_UPLOAD',
  HlsPlaylistUpload = 'HLS_PLAYLIST_UPLOAD',
  ImageUpload = 'IMAGE_UPLOAD',
  TranscodedMp4Upload = 'TRANSCODED_MP4_UPLOAD',
  VideoUpload = 'VIDEO_UPLOAD'
}

export type VideoProjectPage = {
  __typename?: 'VideoProjectPage';
  pageNumber: Scalars['Int'];
  results: Array<Maybe<VideoProject>>;
  totalCount: Scalars['Int'];
};

export type VideoProjectRights = {
  __typename?: 'VideoProjectRights';
  broadDist: Maybe<Scalars['Boolean']>;
  cannotSyndicate: Maybe<Scalars['Boolean']>;
  complexTakedown: Maybe<Scalars['Boolean']>;
  createdAt: Maybe<Scalars['DateTime']>;
  cueSheetUrl: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  ownedOperated: Maybe<Scalars['Boolean']>;
  selfTakedown: Maybe<Scalars['Boolean']>;
  sensitive: Maybe<Scalars['Boolean']>;
  sensitiveDetails: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  videoProjectId: Scalars['Int'];
  videoProjectThumbnail: Maybe<VideoProjectFile>;
  videoProjectVideoFile: Maybe<VideoProjectFile>;
};

/**
 * A single "WHERE" condition used in the context
 * of a VideoProjectSearchQuery.
 */
export type VideoProjectSearchCondition = {
  /**
   * Field can be any of the provided values. Only applicable with
   * field 'primary_assets', for the values 'AppleNews', 'Ooyala', 'Youtube',
   * 'Brightcove', and 'Facebook'
   */
  anyOf: InputMaybe<Array<InputMaybe<Scalars['Any']>>>;
  /** Field must be equal to the given value */
  equal: InputMaybe<Scalars['Any']>;
  /**
   * Name of the field this condition applies to
   * Fields are defined in VideoQuery::ALLOWED_PARAMS
   */
  field: InputMaybe<Scalars['String']>;
};

/**
 * The query format for searching/filtering video projects.
 * Based on Volume's VideoQuery object.
 *
 * If the `keywords` and `whereAll` params are used together,
 * they both apply, using AND semantics.
 */
export type VideoProjectSearchQuery = {
  /** Results must match the keywords */
  keywords: InputMaybe<Scalars['String']>;
  /**
   * Name of field to order results by. for example:
   * * name
   * * name,asc
   * * name,desc
   *
   * ('asc' ordering is default)
   */
  orderBy: InputMaybe<Scalars['String']>;
  pageNumber: InputMaybe<Scalars['Int']>;
  perPage: InputMaybe<Scalars['Int']>;
  /** Results must meet ALL of the given conditions */
  whereAll: InputMaybe<Array<VideoProjectSearchCondition>>;
};

export type VideoProvider = {
  __typename?: 'VideoProvider';
  accounts: Array<Maybe<VideoAccount>>;
  brandConfig: VideoBrandConfig;
  chorusCommunityId: Scalars['Int'];
  code: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  network: VideoNetwork;
  publisher: VideoPublisher;
};

export type VideoPublisher = {
  __typename?: 'VideoPublisher';
  brandConfig: VideoBrandConfig;
  createdAt: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  name: Maybe<Scalars['String']>;
  networks: Array<Maybe<VideoNetwork>>;
  updatedAt: Maybe<Scalars['DateTime']>;
};

export type VideoSeries = {
  __typename?: 'VideoSeries';
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
};

export type VideoTag = {
  __typename?: 'VideoTag';
  id: Scalars['Int'];
  name: Scalars['String'];
  publisherId: Scalars['Int'];
};

export type VideoTagInput = {
  id: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type VideoTagSearchQuery = {
  keyword: Scalars['String'];
  networkId: InputMaybe<Scalars['Int']>;
  providerId: InputMaybe<Scalars['Int']>;
  publisherId: InputMaybe<Scalars['Int']>;
};

export type VideoType = {
  __typename?: 'VideoType';
  code: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  nextInSequence: Maybe<Scalars['Int']>;
};

/** A collection of possible types resolved by the `_entities` service */
export type _Entity = AutoTaggingScope | Community | Entry | EntryDraft;

export type CreateSyndicationPartnerInput = {
  name: InputMaybe<Scalars['String']>;
  templateKey: InputMaybe<Scalars['String']>;
};

export type UpdateSyndicationPartnerInput = {
  id: Scalars['Int'];
  name: InputMaybe<Scalars['String']>;
  templateKey: InputMaybe<Scalars['String']>;
};

export type IngestEntryQueryVariables = Exact<{
  url: Scalars['URL'];
}>;


export type IngestEntryQuery = { __typename?: 'Query', entry: { __typename?: 'Entry', uuid: string, title: string, dek: { __typename?: 'RichText', plaintext: string } | null, leadComponent: { __typename: 'EntryLeadEmbed' } | { __typename: 'EntryLeadGallery' } | { __typename: 'EntryLeadHTML' } | { __typename: 'EntryLeadImage', image: { __typename?: 'EntryImage', url: any } | null, caption: { __typename?: 'RichText', plaintext: string } | null } | { __typename: 'EntryLeadVideo' } | null, body: { __typename?: 'EntryBody', components: Array<{ __typename: 'EntryBodyActionbox' } | { __typename: 'EntryBodyBlockquote' } | { __typename: 'EntryBodyEmbed', embed: { __typename?: 'EntryEmbed', url: any, provider: { __typename?: 'EntryEmbedSource', name: string | null, url: any | null }, author: { __typename?: 'EntryEmbedSource', name: string | null, url: any | null } }, placement: { __typename?: 'EntryBodyComponentPlacement', id: string | null } } | { __typename: 'EntryBodyGallery' } | { __typename: 'EntryBodyHTML' } | { __typename: 'EntryBodyHeading' } | { __typename: 'EntryBodyHorizontalRule' } | { __typename: 'EntryBodyImage', image: { __typename?: 'EntryImage', url: any, caption: { __typename?: 'RichText', plaintext: string } | null }, placement: { __typename?: 'EntryBodyComponentPlacement', id: string | null } } | { __typename: 'EntryBodyImageComparison' } | { __typename: 'EntryBodyImageGroup' } | { __typename: 'EntryBodyJSON' } | { __typename: 'EntryBodyList' } | { __typename: 'EntryBodyNewsletter' } | { __typename: 'EntryBodyParagraph', dropcap: boolean, lead: boolean, endmark: boolean, format: { __typename?: 'EntryBodyFormat', plaintext: string | null }, placement: { __typename?: 'EntryBodyComponentPlacement', id: string | null } } | { __typename: 'EntryBodyPoll' } | { __typename: 'EntryBodyProduct' } | { __typename: 'EntryBodyPullquote', placement: { __typename?: 'EntryBodyComponentPlacement', id: string | null }, quote: { __typename?: 'RichText', plaintext: string } } | { __typename: 'EntryBodyPymEmbed' } | { __typename: 'EntryBodyRatingcard' } | { __typename: 'EntryBodyRelatedList' } | { __typename: 'EntryBodyScorecard' } | { __typename: 'EntryBodySidebar', sidebar: { __typename?: 'EntrySidebar', uuid: string, title: string } | null } | { __typename: 'EntryBodyTable' } | { __typename: 'EntryBodyVideo' }> } } | null };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Advertiser: ResolverTypeWrapper<Advertiser>;
  AdvertiserPage: ResolverTypeWrapper<AdvertiserPage>;
  AnalyticsMetric: ResolverTypeWrapper<AnalyticsMetric>;
  AnalyticsRef: ResolverTypeWrapper<AnalyticsRef>;
  AnalyticsResource: ResolverTypeWrapper<AnalyticsResource>;
  AnalyticsTag: ResolverTypeWrapper<AnalyticsTag>;
  AnthemStory: ResolverTypeWrapper<AnthemStory>;
  Any: ResolverTypeWrapper<Scalars['Any']>;
  Asset: ResolverTypeWrapper<Asset>;
  AssetCreateInput: AssetCreateInput;
  AssetCreateResult: ResolverTypeWrapper<AssetCreateResult>;
  AssetFileInput: AssetFileInput;
  AssetIPTCMetadata: ResolverTypeWrapper<AssetIptcMetadata>;
  AssetPage: ResolverTypeWrapper<AssetPage>;
  AssetSearchQuery: AssetSearchQuery;
  AssetSortType: AssetSortType;
  AssetSource: AssetSource;
  AssetType: AssetType;
  AssetUniqueKeyInput: AssetUniqueKeyInput;
  AssetUpdateInput: AssetUpdateInput;
  AssetUpdateResult: ResolverTypeWrapper<AssetUpdateResult>;
  AssetUpsertByExternalIdInput: AssetUpsertByExternalIdInput;
  AssetUpsertByExternalIdResult: ResolverTypeWrapper<AssetUpsertByExternalIdResult>;
  AuthorProfile: ResolverTypeWrapper<AuthorProfile>;
  AuthorProfileCreatedEventInput: AuthorProfileCreatedEventInput;
  AuthorProfileDestroyedEventInput: AuthorProfileDestroyedEventInput;
  AuthorProfileEventSubjectInput: AuthorProfileEventSubjectInput;
  AuthorProfileUpdatedEventInput: AuthorProfileUpdatedEventInput;
  AutoTagType: AutoTagType;
  AutoTaggingScope: ResolverTypeWrapper<AutoTaggingScope>;
  BasicImage: ResolverTypeWrapper<BasicImage>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BucketedDeltaMetric: ResolverTypeWrapper<BucketedDeltaMetric>;
  Build: ResolverTypeWrapper<Build>;
  BuildInput: BuildInput;
  BuildPage: ResolverTypeWrapper<BuildPage>;
  Building: ResolverTypeWrapper<Building>;
  BuildingPage: ResolverTypeWrapper<BuildingPage>;
  BulkCreateVideoAssetsInput: BulkCreateVideoAssetsInput;
  BulkRemoveVideoAssetsInput: BulkRemoveVideoAssetsInput;
  Campaign: ResolverTypeWrapper<Campaign>;
  CampaignPage: ResolverTypeWrapper<CampaignPage>;
  CellData: ResolverTypeWrapper<CellData>;
  Community: ResolverTypeWrapper<Community>;
  CommunityMembership: ResolverTypeWrapper<CommunityMembership>;
  CommunityNavigationUpdatedEventInput: CommunityNavigationUpdatedEventInput;
  CommunityNavigationUpdatedEventSubjectInput: CommunityNavigationUpdatedEventSubjectInput;
  CommunityPage: ResolverTypeWrapper<CommunityPage>;
  CommunitySearchCondition: CommunitySearchCondition;
  CommunitySearchQuery: CommunitySearchQuery;
  CommunityUniqueKeyInput: CommunityUniqueKeyInput;
  Coordinate: Coordinate;
  CopyInput: CopyInput;
  CreateVideoAssetInput: CreateVideoAssetInput;
  CreateVideoProjectFileInput: CreateVideoProjectFileInput;
  CreateVideoProjectInput: CreateVideoProjectInput;
  CreateVideoProjectRightsInput: CreateVideoProjectRightsInput;
  CustomerMigration_AuthorProfileInput: CustomerMigration_AuthorProfileInput;
  CustomerMigration_CreateLegacySlugInput: CustomerMigration_CreateLegacySlugInput;
  CustomerMigration_CreateRedirectInput: CustomerMigration_CreateRedirectInput;
  CustomerMigration_CreateSiteGroupInput: CustomerMigration_CreateSiteGroupInput;
  CustomerMigration_CreateSuperGroupInput: CustomerMigration_CreateSuperGroupInput;
  CustomerMigration_CreateUserInput: CustomerMigration_CreateUserInput;
  CustomerMigration_UpdateSiteGroupInput: CustomerMigration_UpdateSiteGroupInput;
  CustomerMigration_UpdateUserInput: CustomerMigration_UpdateUserInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Entity: ResolversTypes['AuthorProfile'] | ResolversTypes['Entry'] | ResolversTypes['EntryGroup'] | ResolversTypes['Redirect'];
  Entry: ResolverTypeWrapper<Omit<Entry, 'leadArt' | 'leadComponent' | 'quickAttachment' | 'railComponents'> & { leadArt: Maybe<ResolversTypes['EntryLeadArt']>, leadComponent: Maybe<ResolversTypes['EntryLeadComponent']>, quickAttachment: Maybe<ResolversTypes['EntryQuickAttachment']>, railComponents: Array<Maybe<ResolversTypes['EntryRailComponent']>> }>;
  EntryBody: ResolverTypeWrapper<EntryBody>;
  EntryBodyActionbox: ResolverTypeWrapper<EntryBodyActionbox>;
  EntryBodyBlockquote: ResolverTypeWrapper<EntryBodyBlockquote>;
  EntryBodyComponent: ResolversTypes['EntryBodyActionbox'] | ResolversTypes['EntryBodyBlockquote'] | ResolversTypes['EntryBodyEmbed'] | ResolversTypes['EntryBodyGallery'] | ResolversTypes['EntryBodyHTML'] | ResolversTypes['EntryBodyHeading'] | ResolversTypes['EntryBodyHorizontalRule'] | ResolversTypes['EntryBodyImage'] | ResolversTypes['EntryBodyImageComparison'] | ResolversTypes['EntryBodyImageGroup'] | ResolversTypes['EntryBodyJSON'] | ResolversTypes['EntryBodyList'] | ResolversTypes['EntryBodyNewsletter'] | ResolversTypes['EntryBodyParagraph'] | ResolversTypes['EntryBodyPoll'] | ResolversTypes['EntryBodyProduct'] | ResolversTypes['EntryBodyPullquote'] | ResolversTypes['EntryBodyPymEmbed'] | ResolversTypes['EntryBodyRatingcard'] | ResolversTypes['EntryBodyRelatedList'] | ResolversTypes['EntryBodyScorecard'] | ResolversTypes['EntryBodySidebar'] | ResolversTypes['EntryBodyTable'] | ResolversTypes['EntryBodyVideo'];
  EntryBodyComponentAlignment: EntryBodyComponentAlignment;
  EntryBodyComponentCreateInput: EntryBodyComponentCreateInput;
  EntryBodyComponentGroupLayout: EntryBodyComponentGroupLayout;
  EntryBodyComponentListInput: EntryBodyComponentListInput;
  EntryBodyComponentListPatchInput: EntryBodyComponentListPatchInput;
  EntryBodyComponentPlacement: ResolverTypeWrapper<EntryBodyComponentPlacement>;
  EntryBodyComponentPlacementInput: EntryBodyComponentPlacementInput;
  EntryBodyComponentUpdateInput: EntryBodyComponentUpdateInput;
  EntryBodyCreateInput: EntryBodyCreateInput;
  EntryBodyEmbed: ResolverTypeWrapper<EntryBodyEmbed>;
  EntryBodyEmbedCreateInput: EntryBodyEmbedCreateInput;
  EntryBodyEmbedUpdateInput: EntryBodyEmbedUpdateInput;
  EntryBodyFormat: ResolverTypeWrapper<EntryBodyFormat>;
  EntryBodyGallery: ResolverTypeWrapper<EntryBodyGallery>;
  EntryBodyGalleryCreateInput: EntryBodyGalleryCreateInput;
  EntryBodyGalleryUpdateInput: EntryBodyGalleryUpdateInput;
  EntryBodyHTML: ResolverTypeWrapper<EntryBodyHtml>;
  EntryBodyHTMLCreateInput: EntryBodyHtmlCreateInput;
  EntryBodyHTMLUpdateInput: EntryBodyHtmlUpdateInput;
  EntryBodyHeading: ResolverTypeWrapper<EntryBodyHeading>;
  EntryBodyHeadingCreateInput: EntryBodyHeadingCreateInput;
  EntryBodyHeadingUpdateInput: EntryBodyHeadingUpdateInput;
  EntryBodyHorizontalRule: ResolverTypeWrapper<EntryBodyHorizontalRule>;
  EntryBodyImage: ResolverTypeWrapper<EntryBodyImage>;
  EntryBodyImageComparison: ResolverTypeWrapper<EntryBodyImageComparison>;
  EntryBodyImageCreateInput: EntryBodyImageCreateInput;
  EntryBodyImageGroup: ResolverTypeWrapper<EntryBodyImageGroup>;
  EntryBodyImageUpdateInput: EntryBodyImageUpdateInput;
  EntryBodyJSON: ResolverTypeWrapper<EntryBodyJson>;
  EntryBodyList: ResolverTypeWrapper<EntryBodyList>;
  EntryBodyListCreateInput: EntryBodyListCreateInput;
  EntryBodyListItem: ResolverTypeWrapper<EntryBodyListItem>;
  EntryBodyListItemCreateInput: EntryBodyListItemCreateInput;
  EntryBodyListItemListInput: EntryBodyListItemListInput;
  EntryBodyListItemListPatchInput: EntryBodyListItemListPatchInput;
  EntryBodyListItemUpdateInput: EntryBodyListItemUpdateInput;
  EntryBodyListUpdateInput: EntryBodyListUpdateInput;
  EntryBodyNewsletter: ResolverTypeWrapper<EntryBodyNewsletter>;
  EntryBodyParagraph: ResolverTypeWrapper<EntryBodyParagraph>;
  EntryBodyParagraphCreateInput: EntryBodyParagraphCreateInput;
  EntryBodyParagraphUpdateInput: EntryBodyParagraphUpdateInput;
  EntryBodyPoll: ResolverTypeWrapper<EntryBodyPoll>;
  EntryBodyProduct: ResolverTypeWrapper<EntryBodyProduct>;
  EntryBodyPullquote: ResolverTypeWrapper<EntryBodyPullquote>;
  EntryBodyPullquoteCreateInput: EntryBodyPullquoteCreateInput;
  EntryBodyPullquoteUpdateInput: EntryBodyPullquoteUpdateInput;
  EntryBodyPymEmbed: ResolverTypeWrapper<EntryBodyPymEmbed>;
  EntryBodyRatingcard: ResolverTypeWrapper<EntryBodyRatingcard>;
  EntryBodyRelatedList: ResolverTypeWrapper<EntryBodyRelatedList>;
  EntryBodyRelatedListCreateInput: EntryBodyRelatedListCreateInput;
  EntryBodyRelatedListItem: ResolverTypeWrapper<EntryBodyRelatedListItem>;
  EntryBodyRelatedListItemCreateInput: EntryBodyRelatedListItemCreateInput;
  EntryBodyRelatedListItemListInput: EntryBodyRelatedListItemListInput;
  EntryBodyRelatedListItemListPatchInput: EntryBodyRelatedListItemListPatchInput;
  EntryBodyRelatedListItemUpdateInput: EntryBodyRelatedListItemUpdateInput;
  EntryBodyRelatedListUpdateInput: EntryBodyRelatedListUpdateInput;
  EntryBodyScorecard: ResolverTypeWrapper<EntryBodyScorecard>;
  EntryBodySecondLevelComponent: ResolversTypes['EntryBodyBlockquote'] | ResolversTypes['EntryBodyEmbed'] | ResolversTypes['EntryBodyHTML'] | ResolversTypes['EntryBodyHeading'] | ResolversTypes['EntryBodyHorizontalRule'] | ResolversTypes['EntryBodyImage'] | ResolversTypes['EntryBodyJSON'] | ResolversTypes['EntryBodyList'] | ResolversTypes['EntryBodyParagraph'] | ResolversTypes['EntryBodyPullquote'] | ResolversTypes['EntryBodyRatingcard'] | ResolversTypes['EntryBodyVideo'];
  EntryBodySecondLevelComponentCreateInput: EntryBodySecondLevelComponentCreateInput;
  EntryBodySecondLevelComponentListInput: EntryBodySecondLevelComponentListInput;
  EntryBodySecondLevelComponentListPatchInput: EntryBodySecondLevelComponentListPatchInput;
  EntryBodySidebar: ResolverTypeWrapper<EntryBodySidebar>;
  EntryBodySidebarCreateInput: EntryBodySidebarCreateInput;
  EntryBodySidebarUpdateInput: EntryBodySidebarUpdateInput;
  EntryBodyTable: ResolverTypeWrapper<EntryBodyTable>;
  EntryBodyUpdateInput: EntryBodyUpdateInput;
  EntryBodyVideo: ResolverTypeWrapper<EntryBodyVideo>;
  EntryBodyVideoCreateInput: EntryBodyVideoCreateInput;
  EntryConnection: ResolverTypeWrapper<EntryConnection>;
  EntryCreateInput: EntryCreateInput;
  EntryCreateResult: ResolverTypeWrapper<EntryCreateResult>;
  EntryCustomFieldFlagInput: EntryCustomFieldFlagInput;
  EntryCustomFieldTextInput: EntryCustomFieldTextInput;
  EntryCustomPage: ResolverTypeWrapper<EntryCustomPage>;
  EntryCustomPageBody: ResolverTypeWrapper<EntryCustomPageBody>;
  EntryCustomPageComponent: ResolversTypes['EntryCustomPageBody'] | ResolversTypes['EntryCustomPageEmbed'] | ResolversTypes['EntryCustomPageImage'] | ResolversTypes['EntryCustomPageVideo'];
  EntryCustomPageEmbed: ResolverTypeWrapper<EntryCustomPageEmbed>;
  EntryCustomPageImage: ResolverTypeWrapper<EntryCustomPageImage>;
  EntryCustomPageVideo: ResolverTypeWrapper<EntryCustomPageVideo>;
  EntryDraft: ResolverTypeWrapper<Omit<EntryDraft, 'leadArt' | 'leadComponent' | 'quickAttachment'> & { leadArt: Maybe<ResolversTypes['EntryLeadArt']>, leadComponent: Maybe<ResolversTypes['EntryLeadComponent']>, quickAttachment: Maybe<ResolversTypes['EntryQuickAttachment']> }>;
  EntryDraftCreateInput: EntryDraftCreateInput;
  EntryDraftCreateResult: ResolverTypeWrapper<EntryDraftCreateResult>;
  EntryDraftEditorialStatus: EntryDraftEditorialStatus;
  EntryDraftEventSubjectInput: EntryDraftEventSubjectInput;
  EntryDraftPublishInput: EntryDraftPublishInput;
  EntryDraftPublishResult: ResolverTypeWrapper<EntryDraftPublishResult>;
  EntryDraftPublishStatus: EntryDraftPublishStatus;
  EntryDraftSentToPrintEventInput: EntryDraftSentToPrintEventInput;
  EntryDraftUniqueKeyInput: EntryDraftUniqueKeyInput;
  EntryDraftUpdateInput: EntryDraftUpdateInput;
  EntryDraftUpdateResult: ResolverTypeWrapper<EntryDraftUpdateResult>;
  EntryDraftUpsertByExternalIdInput: EntryDraftUpsertByExternalIdInput;
  EntryDraftUpsertByExternalIdResult: ResolverTypeWrapper<EntryDraftUpsertByExternalIdResult>;
  EntryEdge: ResolverTypeWrapper<EntryEdge>;
  EntryEmbed: ResolverTypeWrapper<EntryEmbed>;
  EntryEmbedInput: EntryEmbedInput;
  EntryEmbedSource: ResolverTypeWrapper<EntryEmbedSource>;
  EntryEventSubjectInput: EntryEventSubjectInput;
  EntryExpiredEventInput: EntryExpiredEventInput;
  EntryExternalLink: ResolverTypeWrapper<EntryExternalLink>;
  EntryFrontend: ResolverTypeWrapper<EntryFrontend>;
  EntryGallery: ResolverTypeWrapper<EntryGallery>;
  EntryGalleryAssociationCreateInput: EntryGalleryAssociationCreateInput;
  EntryGalleryAssociationUpdateInput: EntryGalleryAssociationUpdateInput;
  EntryGalleryUniqueKeyInput: EntryGalleryUniqueKeyInput;
  EntryGroup: ResolverTypeWrapper<Omit<EntryGroup, 'railComponents'> & { railComponents: Array<Maybe<ResolversTypes['EntryGroupRailComponent']>> }>;
  EntryGroupCreatedEventInput: EntryGroupCreatedEventInput;
  EntryGroupDestroyedEventInput: EntryGroupDestroyedEventInput;
  EntryGroupEntryAddedEventDataInput: EntryGroupEntryAddedEventDataInput;
  EntryGroupEntryAddedEventInput: EntryGroupEntryAddedEventInput;
  EntryGroupEntryRemovedEventDataInput: EntryGroupEntryRemovedEventDataInput;
  EntryGroupEntryRemovedEventInput: EntryGroupEntryRemovedEventInput;
  EntryGroupEventSubjectInput: EntryGroupEventSubjectInput;
  EntryGroupImage: ResolverTypeWrapper<EntryGroupImage>;
  EntryGroupMembershipCollectionInput: EntryGroupMembershipCollectionInput;
  EntryGroupMembershipInput: EntryGroupMembershipInput;
  EntryGroupPage: ResolverTypeWrapper<EntryGroupPage>;
  EntryGroupRailComponent: ResolversTypes['EntryGroupRailGroupWithImages'] | ResolversTypes['EntryGroupRailGroupWithText'] | ResolversTypes['EntryGroupRailNewsletter'];
  EntryGroupRailGroupWithImages: ResolverTypeWrapper<EntryGroupRailGroupWithImages>;
  EntryGroupRailGroupWithImagesLayout: EntryGroupRailGroupWithImagesLayout;
  EntryGroupRailGroupWithText: ResolverTypeWrapper<EntryGroupRailGroupWithText>;
  EntryGroupRailGroupWithTextLayout: EntryGroupRailGroupWithTextLayout;
  EntryGroupRailNewsletter: ResolverTypeWrapper<EntryGroupRailNewsletter>;
  EntryGroupSearchQuery: EntryGroupSearchQuery;
  EntryGroupUniqueKeyInput: EntryGroupUniqueKeyInput;
  EntryGroupUpdatedEventInput: EntryGroupUpdatedEventInput;
  EntryImage: ResolverTypeWrapper<EntryImage>;
  EntryImageAssetAssociationCreateInput: EntryImageAssetAssociationCreateInput;
  EntryImageAssetAssociationUpdateInput: EntryImageAssetAssociationUpdateInput;
  EntryImageComparison: ResolverTypeWrapper<EntryImageComparison>;
  EntryImageCreateInput: EntryImageCreateInput;
  EntryImageCrop: ResolverTypeWrapper<EntryImageCrop>;
  EntryImageCropInput: EntryImageCropInput;
  EntryImageFocus: ResolverTypeWrapper<EntryImageFocus>;
  EntryImageFocusInput: EntryImageFocusInput;
  EntryImageInput: EntryImageInput;
  EntryImageUpdateInput: EntryImageUpdateInput;
  EntryImageVariantFormat: EntryImageVariantFormat;
  EntryLayoutTemplate: EntryLayoutTemplate;
  EntryLeadArt: ResolversTypes['EntryEmbed'] | ResolversTypes['EntryGallery'] | ResolversTypes['EntryImage'] | ResolversTypes['EntryVideo'];
  EntryLeadComponent: ResolversTypes['EntryLeadEmbed'] | ResolversTypes['EntryLeadGallery'] | ResolversTypes['EntryLeadHTML'] | ResolversTypes['EntryLeadImage'] | ResolversTypes['EntryLeadVideo'];
  EntryLeadEmbed: ResolverTypeWrapper<EntryLeadEmbed>;
  EntryLeadGallery: ResolverTypeWrapper<EntryLeadGallery>;
  EntryLeadHTML: ResolverTypeWrapper<EntryLeadHtml>;
  EntryLeadImage: ResolverTypeWrapper<EntryLeadImage>;
  EntryLeadVideo: ResolverTypeWrapper<EntryLeadVideo>;
  EntryOrderField: EntryOrderField;
  EntryOrderInput: EntryOrderInput;
  EntryPackageCover: ResolverTypeWrapper<Omit<EntryPackageCover, 'items'> & { items: Maybe<Array<Maybe<ResolversTypes['EntryPackageCoverItem']>>> }>;
  EntryPackageCoverEntry: ResolverTypeWrapper<EntryPackageCoverEntry>;
  EntryPackageCoverEntryLayout: EntryPackageCoverEntryLayout;
  EntryPackageCoverItem: ResolversTypes['EntryPackageCoverEntry'] | ResolversTypes['EntryPackageCoverPullquote'] | ResolversTypes['EntryPackageCoverVideo'];
  EntryPackageCoverPullquote: ResolverTypeWrapper<EntryPackageCoverPullquote>;
  EntryPackageCoverVideo: ResolverTypeWrapper<EntryPackageCoverVideo>;
  EntryPackageEntry: ResolverTypeWrapper<EntryPackageEntry>;
  EntryPackageToc: ResolverTypeWrapper<EntryPackageToc>;
  EntryPackageTocLayout: EntryPackageTocLayout;
  EntryPackageTocSection: ResolverTypeWrapper<EntryPackageTocSection>;
  EntryPage: ResolverTypeWrapper<EntryPage>;
  EntryPoll: ResolverTypeWrapper<EntryPoll>;
  EntryPollOption: ResolverTypeWrapper<EntryPollOption>;
  EntryProduct: ResolverTypeWrapper<EntryProduct>;
  EntryProductRetailer: ResolverTypeWrapper<EntryProductRetailer>;
  EntryPublishStatus: EntryPublishStatus;
  EntryPublishedEventInput: EntryPublishedEventInput;
  EntryQuickAttachment: ResolversTypes['EntryEmbed'] | ResolversTypes['EntryExternalLink'] | ResolversTypes['EntryImage'] | ResolversTypes['EntryRelatedEntry'] | ResolversTypes['EntryVideo'];
  EntryRailComponent: ResolversTypes['EntryRailGroupWithImages'] | ResolversTypes['EntryRailGroupWithText'] | ResolversTypes['EntryRailNewsletter'];
  EntryRailGroupWithImages: ResolverTypeWrapper<EntryRailGroupWithImages>;
  EntryRailGroupWithImagesLayout: EntryRailGroupWithImagesLayout;
  EntryRailGroupWithText: ResolverTypeWrapper<EntryRailGroupWithText>;
  EntryRailGroupWithTextLayout: EntryRailGroupWithTextLayout;
  EntryRailNewsletter: ResolverTypeWrapper<EntryRailNewsletter>;
  EntryRelatedEntry: ResolverTypeWrapper<EntryRelatedEntry>;
  EntryRevision: ResolversTypes['Entry'] | ResolversTypes['EntryDraft'];
  EntryScorecard: ResolverTypeWrapper<EntryScorecard>;
  EntrySidebar: ResolverTypeWrapper<EntrySidebar>;
  EntrySidebarAssociationCreateInput: EntrySidebarAssociationCreateInput;
  EntrySidebarAssociationUpdateInput: EntrySidebarAssociationUpdateInput;
  EntrySidebarBodyCreateInput: EntrySidebarBodyCreateInput;
  EntrySidebarBodyUpdateInput: EntrySidebarBodyUpdateInput;
  EntrySidebarCreateInput: EntrySidebarCreateInput;
  EntrySidebarCreateResult: ResolverTypeWrapper<EntrySidebarCreateResult>;
  EntrySidebarUniqueKeyInput: EntrySidebarUniqueKeyInput;
  EntrySidebarUpdateInput: EntrySidebarUpdateInput;
  EntrySidebarUpdateResult: ResolverTypeWrapper<EntrySidebarUpdateResult>;
  EntryStream: ResolverTypeWrapper<EntryStream>;
  EntryTable: ResolverTypeWrapper<EntryTable>;
  EntryTableSort: ResolverTypeWrapper<EntryTableSort>;
  EntryTweet: ResolverTypeWrapper<EntryTweet>;
  EntryType: EntryType;
  EntryUniqueKeyInput: EntryUniqueKeyInput;
  EntryUnpublishedEventInput: EntryUnpublishedEventInput;
  EntryUpdateInput: EntryUpdateInput;
  EntryUpdateResult: ResolverTypeWrapper<EntryUpdateResult>;
  EntryUpsertByExternalIdInput: EntryUpsertByExternalIdInput;
  EntryUpsertByExternalIdResult: ResolverTypeWrapper<EntryUpsertByExternalIdResult>;
  EntryUserAssociationListInput: EntryUserAssociationListInput;
  EntryUserAssociationListPatchInput: EntryUserAssociationListPatchInput;
  EntryVideo: ResolverTypeWrapper<EntryVideo>;
  EntryVideoAssociationCreateInput: EntryVideoAssociationCreateInput;
  EntryVideoImage: ResolverTypeWrapper<EntryVideoImage>;
  EntryVideoPlayer: ResolverTypeWrapper<EntryVideoPlayer>;
  EntryVideoType: EntryVideoType;
  EntryVideoUniqueKeyInput: EntryVideoUniqueKeyInput;
  Error: Error;
  EventResult: ResolverTypeWrapper<EventResult>;
  ExternalIdCollectionInput: ExternalIdCollectionInput;
  Feed: ResolverTypeWrapper<Feed>;
  FileLocation: ResolverTypeWrapper<FileLocation>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Forum: ResolverTypeWrapper<Forum>;
  ForumMembership: ResolverTypeWrapper<ForumMembership>;
  GoogleAmpLogo: ResolverTypeWrapper<GoogleAmpLogo>;
  HermanoResourceSearchCondition: HermanoResourceSearchCondition;
  HermanoResourceSearchQuery: HermanoResourceSearchQuery;
  HubPage: ResolverTypeWrapper<HubPage>;
  HubPageBreakingNewsBanner: ResolverTypeWrapper<HubPageBreakingNewsBanner>;
  HubPageCreatedEventInput: HubPageCreatedEventInput;
  HubPageDestroyedEventInput: HubPageDestroyedEventInput;
  HubPageEventSubjectInput: HubPageEventSubjectInput;
  HubPagePage: ResolverTypeWrapper<HubPagePage>;
  HubPagePlaceable: ResolversTypes['Entry'] | ResolversTypes['EntryGroup'];
  HubPagePlaceableExcludeType: HubPagePlaceableExcludeType;
  HubPagePlacement: ResolverTypeWrapper<HubPagePlacement>;
  HubPagePlacementsUpdatedEventInput: HubPagePlacementsUpdatedEventInput;
  HubPageTemplateUpdatedEventInput: HubPageTemplateUpdatedEventInput;
  HubPageUpdatedEventInput: HubPageUpdatedEventInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  LegacySlug: ResolverTypeWrapper<LegacySlug>;
  LegacySlugFormat: LegacySlugFormat;
  LinkSet: ResolverTypeWrapper<LinkSet>;
  LinkSetCreatedEventInput: LinkSetCreatedEventInput;
  LinkSetDestroyedEventInput: LinkSetDestroyedEventInput;
  LinkSetEventSubjectInput: LinkSetEventSubjectInput;
  LinkSetLink: ResolverTypeWrapper<LinkSetLink>;
  LinkSetLinkCreatedEventInput: LinkSetLinkCreatedEventInput;
  LinkSetLinkDestroyedEventInput: LinkSetLinkDestroyedEventInput;
  LinkSetLinkUpdatedEventInput: LinkSetLinkUpdatedEventInput;
  LinkSetPage: ResolverTypeWrapper<LinkSetPage>;
  LinkSetPopulateMode: LinkSetPopulateMode;
  LinkSetUpdatedEventInput: LinkSetUpdatedEventInput;
  LiveCoverageEvent: ResolverTypeWrapper<LiveCoverageEvent>;
  LiveCoverageEventPage: ResolverTypeWrapper<LiveCoverageEventPage>;
  Locale: ResolverTypeWrapper<Locale>;
  LocalePage: ResolverTypeWrapper<LocalePage>;
  MapCard: ResolverTypeWrapper<MapCard>;
  MemberProfile: ResolverTypeWrapper<MemberProfile>;
  MmaEvent: ResolverTypeWrapper<MmaEvent>;
  MmaEventPage: ResolverTypeWrapper<MmaEventPage>;
  MmaFight: ResolverTypeWrapper<MmaFight>;
  MmaFightPage: ResolverTypeWrapper<MmaFightPage>;
  MmaFighter: ResolverTypeWrapper<MmaFighter>;
  MmaFighterPage: ResolverTypeWrapper<MmaFighterPage>;
  MmaPromotion: ResolverTypeWrapper<MmaPromotion>;
  MmaPromotionPage: ResolverTypeWrapper<MmaPromotionPage>;
  MmaWeightClass: ResolverTypeWrapper<MmaWeightClass>;
  MmaWeightClassPage: ResolverTypeWrapper<MmaWeightClassPage>;
  ModifyVideoProjectFileTreeInput: ModifyVideoProjectFileTreeInput;
  Mutation: ResolverTypeWrapper<{}>;
  Neighborhood: ResolverTypeWrapper<Neighborhood>;
  NeighborhoodPage: ResolverTypeWrapper<NeighborhoodPage>;
  Network: ResolverTypeWrapper<Network>;
  NetworkMembership: ResolverTypeWrapper<NetworkMembership>;
  NetworkRole: NetworkRole;
  Newsletter: ResolverTypeWrapper<Newsletter>;
  OpentableVenue: ResolverTypeWrapper<OpentableVenue>;
  OpentableVenuePage: ResolverTypeWrapper<OpentableVenuePage>;
  OrderDirection: OrderDirection;
  Organization: ResolverTypeWrapper<Organization>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Place: ResolverTypeWrapper<Place>;
  PlaceDetail: ResolversTypes['Building'] | ResolversTypes['Venue'];
  PlacePage: ResolverTypeWrapper<PlacePage>;
  PlainTextInput: PlainTextInput;
  PointMetricFacebook: ResolverTypeWrapper<PointMetricFacebook>;
  PointMetricReddit: ResolverTypeWrapper<PointMetricReddit>;
  PointMetricTwitter: ResolverTypeWrapper<PointMetricTwitter>;
  Product: ResolverTypeWrapper<Product>;
  ProductBrand: ResolverTypeWrapper<ProductBrand>;
  ProductBrandPage: ResolverTypeWrapper<ProductBrandPage>;
  ProductCategory: ResolverTypeWrapper<ProductCategory>;
  ProductCategoryPage: ResolverTypeWrapper<ProductCategoryPage>;
  ProductPage: ResolverTypeWrapper<ProductPage>;
  ProductRetailer: ResolverTypeWrapper<ProductRetailer>;
  ProjectSource: ResolverTypeWrapper<ProjectSource>;
  Query: ResolverTypeWrapper<{}>;
  Redirect: ResolverTypeWrapper<Redirect>;
  RedirectCreateInput: RedirectCreateInput;
  RedirectCreateResult: ResolverTypeWrapper<RedirectCreateResult>;
  RedirectCreatedEventInput: RedirectCreatedEventInput;
  RedirectDeleteResult: ResolverTypeWrapper<RedirectDeleteResult>;
  RedirectDestroyedEventInput: RedirectDestroyedEventInput;
  RedirectEventSubjectInput: RedirectEventSubjectInput;
  RedirectImportInput: RedirectImportInput;
  RedirectImportResult: ResolverTypeWrapper<RedirectImportResult>;
  RedirectPage: ResolverTypeWrapper<RedirectPage>;
  RedirectSearchQuery: RedirectSearchQuery;
  RedirectUniqueKeyInput: RedirectUniqueKeyInput;
  RedirectUpdateInput: RedirectUpdateInput;
  RedirectUpdateResult: ResolverTypeWrapper<RedirectUpdateResult>;
  RedirectUpdatedEventInput: RedirectUpdatedEventInput;
  RedirectUpdatedEventSubjectInput: RedirectUpdatedEventSubjectInput;
  RegisteredQuery: ResolverTypeWrapper<RegisteredQuery>;
  RegisteredQueryCreateInput: RegisteredQueryCreateInput;
  RegisteredQueryCreateResult: ResolverTypeWrapper<RegisteredQueryCreateResult>;
  RegisteredQueryRemoveInput: RegisteredQueryRemoveInput;
  RegisteredQueryRemoveResult: ResolverTypeWrapper<RegisteredQueryRemoveResult>;
  RichText: ResolverTypeWrapper<RichText>;
  RichTextInput: RichTextInput;
  RichTextOp: ResolverTypeWrapper<Scalars['RichTextOp']>;
  RichTextValueInput: RichTextValueInput;
  Role: ResolverTypeWrapper<Role>;
  RoleName: RoleName;
  RoleScopeType: RoleScopeType;
  SendVideoFileForCaptioningInput: SendVideoFileForCaptioningInput;
  ShoppingDeal: ResolverTypeWrapper<ShoppingDeal>;
  ShoppingDealPage: ResolverTypeWrapper<ShoppingDealPage>;
  SocialLink: ResolverTypeWrapper<SocialLink>;
  SocialLinkType: SocialLinkType;
  Sport: ResolverTypeWrapper<Sport>;
  SportConference: ResolverTypeWrapper<SportConference>;
  SportConferencePage: ResolverTypeWrapper<SportConferencePage>;
  SportDivision: ResolverTypeWrapper<SportDivision>;
  SportDivisionPage: ResolverTypeWrapper<SportDivisionPage>;
  SportEvent: ResolverTypeWrapper<SportEvent>;
  SportEventPage: ResolverTypeWrapper<SportEventPage>;
  SportLeague: ResolverTypeWrapper<SportLeague>;
  SportLeaguePage: ResolverTypeWrapper<SportLeaguePage>;
  SportPage: ResolverTypeWrapper<SportPage>;
  SportPlayer: ResolverTypeWrapper<SportPlayer>;
  SportPlayerPage: ResolverTypeWrapper<SportPlayerPage>;
  SportTeam: ResolverTypeWrapper<SportTeam>;
  SportTeamPage: ResolverTypeWrapper<SportTeamPage>;
  SportTicket: ResolverTypeWrapper<SportTicket>;
  SportTicketPage: ResolverTypeWrapper<SportTicketPage>;
  Status: Status;
  StoryPlatform: StoryPlatform;
  String: ResolverTypeWrapper<Scalars['String']>;
  SupportRequest: ResolverTypeWrapper<SupportRequest>;
  SupportRequestAttribute: ResolverTypeWrapper<SupportRequestAttribute>;
  SupportRequestAttributeInput: SupportRequestAttributeInput;
  SupportRequestCCPAInput: SupportRequestCcpaInput;
  SupportRequestCreateResult: ResolverTypeWrapper<SupportRequestCreateResult>;
  SupportRequestGDPRInput: SupportRequestGdprInput;
  SupportRequestGDPRSummary: SupportRequestGdprSummary;
  SupportRequestPersonalDataInput: SupportRequestPersonalDataInput;
  SupportRequestPersonalDataSummary: SupportRequestPersonalDataSummary;
  SupportedLocales: SupportedLocales;
  SupportedNetworks: SupportedNetworks;
  SyndicationPartner: ResolverTypeWrapper<SyndicationPartner>;
  SyndicationStatus: SyndicationStatus;
  ThumborCrop: ThumborCrop;
  TicketEvent: ResolverTypeWrapper<TicketEvent>;
  TicketEventPage: ResolverTypeWrapper<TicketEventPage>;
  TimeZone: ResolverTypeWrapper<Scalars['TimeZone']>;
  TimeseriesMetric: ResolverTypeWrapper<TimeseriesMetric>;
  URL: ResolverTypeWrapper<Scalars['URL']>;
  UpdateVideoAssetInput: UpdateVideoAssetInput;
  UpdateVideoProjectFileInput: UpdateVideoProjectFileInput;
  UpdateVideoProjectInput: UpdateVideoProjectInput;
  UpdateVideoProjectRightsInput: UpdateVideoProjectRightsInput;
  User: ResolverTypeWrapper<User>;
  UserActivityLog: ResolverTypeWrapper<UserActivityLog>;
  UserDestroyedEventInput: UserDestroyedEventInput;
  UserEventSubjectInput: UserEventSubjectInput;
  UserPage: ResolverTypeWrapper<UserPage>;
  UserProfile: ResolversTypes['AuthorProfile'] | ResolversTypes['MemberProfile'];
  UserSearchQuery: UserSearchQuery;
  UserUniqueKeyInput: UserUniqueKeyInput;
  UserUpdatedEventInput: UserUpdatedEventInput;
  Venue: ResolverTypeWrapper<Venue>;
  VenuePage: ResolverTypeWrapper<VenuePage>;
  VideoAccount: ResolverTypeWrapper<VideoAccount>;
  VideoAsset: ResolverTypeWrapper<VideoAsset>;
  VideoAssetInputType: VideoAssetInputType;
  VideoAssetType: VideoAssetType;
  VideoBrandConfig: ResolverTypeWrapper<VideoBrandConfig>;
  VideoBrightcoveInfo: ResolverTypeWrapper<VideoBrightcoveInfo>;
  VideoCategory: ResolverTypeWrapper<VideoCategory>;
  VideoCredit: ResolverTypeWrapper<VideoCredit>;
  VideoCreditInput: VideoCreditInput;
  VideoGame: ResolverTypeWrapper<VideoGame>;
  VideoGameFranchise: ResolverTypeWrapper<VideoGameFranchise>;
  VideoGameFranchisePage: ResolverTypeWrapper<VideoGameFranchisePage>;
  VideoGamePage: ResolverTypeWrapper<VideoGamePage>;
  VideoGamePlatform: ResolverTypeWrapper<VideoGamePlatform>;
  VideoGamePlatformGroup: ResolverTypeWrapper<VideoGamePlatformGroup>;
  VideoGamePlatformGroupPage: ResolverTypeWrapper<VideoGamePlatformGroupPage>;
  VideoGamePlatformPage: ResolverTypeWrapper<VideoGamePlatformPage>;
  VideoNetwork: ResolverTypeWrapper<VideoNetwork>;
  VideoParentalRating: VideoParentalRating;
  VideoProject: ResolverTypeWrapper<VideoProject>;
  VideoProjectFile: ResolverTypeWrapper<VideoProjectFile>;
  VideoProjectFileJob: ResolverTypeWrapper<VideoProjectFileJob>;
  VideoProjectFileType: VideoProjectFileType;
  VideoProjectPage: ResolverTypeWrapper<VideoProjectPage>;
  VideoProjectRights: ResolverTypeWrapper<VideoProjectRights>;
  VideoProjectSearchCondition: VideoProjectSearchCondition;
  VideoProjectSearchQuery: VideoProjectSearchQuery;
  VideoProvider: ResolverTypeWrapper<VideoProvider>;
  VideoPublisher: ResolverTypeWrapper<VideoPublisher>;
  VideoSeries: ResolverTypeWrapper<VideoSeries>;
  VideoTag: ResolverTypeWrapper<VideoTag>;
  VideoTagInput: VideoTagInput;
  VideoTagSearchQuery: VideoTagSearchQuery;
  VideoType: ResolverTypeWrapper<VideoType>;
  _Entity: ResolversTypes['AutoTaggingScope'] | ResolversTypes['Community'] | ResolversTypes['Entry'] | ResolversTypes['EntryDraft'];
  _EntityRepresentation: ResolverTypeWrapper<Scalars['_EntityRepresentation']>;
  createSyndicationPartnerInput: CreateSyndicationPartnerInput;
  updateSyndicationPartnerInput: UpdateSyndicationPartnerInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Advertiser: Advertiser;
  AdvertiserPage: AdvertiserPage;
  AnalyticsMetric: AnalyticsMetric;
  AnalyticsRef: AnalyticsRef;
  AnalyticsResource: AnalyticsResource;
  AnalyticsTag: AnalyticsTag;
  AnthemStory: AnthemStory;
  Any: Scalars['Any'];
  Asset: Asset;
  AssetCreateInput: AssetCreateInput;
  AssetCreateResult: AssetCreateResult;
  AssetFileInput: AssetFileInput;
  AssetIPTCMetadata: AssetIptcMetadata;
  AssetPage: AssetPage;
  AssetSearchQuery: AssetSearchQuery;
  AssetUniqueKeyInput: AssetUniqueKeyInput;
  AssetUpdateInput: AssetUpdateInput;
  AssetUpdateResult: AssetUpdateResult;
  AssetUpsertByExternalIdInput: AssetUpsertByExternalIdInput;
  AssetUpsertByExternalIdResult: AssetUpsertByExternalIdResult;
  AuthorProfile: AuthorProfile;
  AuthorProfileCreatedEventInput: AuthorProfileCreatedEventInput;
  AuthorProfileDestroyedEventInput: AuthorProfileDestroyedEventInput;
  AuthorProfileEventSubjectInput: AuthorProfileEventSubjectInput;
  AuthorProfileUpdatedEventInput: AuthorProfileUpdatedEventInput;
  AutoTaggingScope: AutoTaggingScope;
  BasicImage: BasicImage;
  BigInt: Scalars['BigInt'];
  Boolean: Scalars['Boolean'];
  BucketedDeltaMetric: BucketedDeltaMetric;
  Build: Build;
  BuildInput: BuildInput;
  BuildPage: BuildPage;
  Building: Building;
  BuildingPage: BuildingPage;
  BulkCreateVideoAssetsInput: BulkCreateVideoAssetsInput;
  BulkRemoveVideoAssetsInput: BulkRemoveVideoAssetsInput;
  Campaign: Campaign;
  CampaignPage: CampaignPage;
  CellData: CellData;
  Community: Community;
  CommunityMembership: CommunityMembership;
  CommunityNavigationUpdatedEventInput: CommunityNavigationUpdatedEventInput;
  CommunityNavigationUpdatedEventSubjectInput: CommunityNavigationUpdatedEventSubjectInput;
  CommunityPage: CommunityPage;
  CommunitySearchCondition: CommunitySearchCondition;
  CommunitySearchQuery: CommunitySearchQuery;
  CommunityUniqueKeyInput: CommunityUniqueKeyInput;
  Coordinate: Coordinate;
  CopyInput: CopyInput;
  CreateVideoAssetInput: CreateVideoAssetInput;
  CreateVideoProjectFileInput: CreateVideoProjectFileInput;
  CreateVideoProjectInput: CreateVideoProjectInput;
  CreateVideoProjectRightsInput: CreateVideoProjectRightsInput;
  CustomerMigration_AuthorProfileInput: CustomerMigration_AuthorProfileInput;
  CustomerMigration_CreateLegacySlugInput: CustomerMigration_CreateLegacySlugInput;
  CustomerMigration_CreateRedirectInput: CustomerMigration_CreateRedirectInput;
  CustomerMigration_CreateSiteGroupInput: CustomerMigration_CreateSiteGroupInput;
  CustomerMigration_CreateSuperGroupInput: CustomerMigration_CreateSuperGroupInput;
  CustomerMigration_CreateUserInput: CustomerMigration_CreateUserInput;
  CustomerMigration_UpdateSiteGroupInput: CustomerMigration_UpdateSiteGroupInput;
  CustomerMigration_UpdateUserInput: CustomerMigration_UpdateUserInput;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Entity: ResolversParentTypes['AuthorProfile'] | ResolversParentTypes['Entry'] | ResolversParentTypes['EntryGroup'] | ResolversParentTypes['Redirect'];
  Entry: Omit<Entry, 'leadArt' | 'leadComponent' | 'quickAttachment' | 'railComponents'> & { leadArt: Maybe<ResolversParentTypes['EntryLeadArt']>, leadComponent: Maybe<ResolversParentTypes['EntryLeadComponent']>, quickAttachment: Maybe<ResolversParentTypes['EntryQuickAttachment']>, railComponents: Array<Maybe<ResolversParentTypes['EntryRailComponent']>> };
  EntryBody: EntryBody;
  EntryBodyActionbox: EntryBodyActionbox;
  EntryBodyBlockquote: EntryBodyBlockquote;
  EntryBodyComponent: ResolversParentTypes['EntryBodyActionbox'] | ResolversParentTypes['EntryBodyBlockquote'] | ResolversParentTypes['EntryBodyEmbed'] | ResolversParentTypes['EntryBodyGallery'] | ResolversParentTypes['EntryBodyHTML'] | ResolversParentTypes['EntryBodyHeading'] | ResolversParentTypes['EntryBodyHorizontalRule'] | ResolversParentTypes['EntryBodyImage'] | ResolversParentTypes['EntryBodyImageComparison'] | ResolversParentTypes['EntryBodyImageGroup'] | ResolversParentTypes['EntryBodyJSON'] | ResolversParentTypes['EntryBodyList'] | ResolversParentTypes['EntryBodyNewsletter'] | ResolversParentTypes['EntryBodyParagraph'] | ResolversParentTypes['EntryBodyPoll'] | ResolversParentTypes['EntryBodyProduct'] | ResolversParentTypes['EntryBodyPullquote'] | ResolversParentTypes['EntryBodyPymEmbed'] | ResolversParentTypes['EntryBodyRatingcard'] | ResolversParentTypes['EntryBodyRelatedList'] | ResolversParentTypes['EntryBodyScorecard'] | ResolversParentTypes['EntryBodySidebar'] | ResolversParentTypes['EntryBodyTable'] | ResolversParentTypes['EntryBodyVideo'];
  EntryBodyComponentCreateInput: EntryBodyComponentCreateInput;
  EntryBodyComponentListInput: EntryBodyComponentListInput;
  EntryBodyComponentListPatchInput: EntryBodyComponentListPatchInput;
  EntryBodyComponentPlacement: EntryBodyComponentPlacement;
  EntryBodyComponentPlacementInput: EntryBodyComponentPlacementInput;
  EntryBodyComponentUpdateInput: EntryBodyComponentUpdateInput;
  EntryBodyCreateInput: EntryBodyCreateInput;
  EntryBodyEmbed: EntryBodyEmbed;
  EntryBodyEmbedCreateInput: EntryBodyEmbedCreateInput;
  EntryBodyEmbedUpdateInput: EntryBodyEmbedUpdateInput;
  EntryBodyFormat: EntryBodyFormat;
  EntryBodyGallery: EntryBodyGallery;
  EntryBodyGalleryCreateInput: EntryBodyGalleryCreateInput;
  EntryBodyGalleryUpdateInput: EntryBodyGalleryUpdateInput;
  EntryBodyHTML: EntryBodyHtml;
  EntryBodyHTMLCreateInput: EntryBodyHtmlCreateInput;
  EntryBodyHTMLUpdateInput: EntryBodyHtmlUpdateInput;
  EntryBodyHeading: EntryBodyHeading;
  EntryBodyHeadingCreateInput: EntryBodyHeadingCreateInput;
  EntryBodyHeadingUpdateInput: EntryBodyHeadingUpdateInput;
  EntryBodyHorizontalRule: EntryBodyHorizontalRule;
  EntryBodyImage: EntryBodyImage;
  EntryBodyImageComparison: EntryBodyImageComparison;
  EntryBodyImageCreateInput: EntryBodyImageCreateInput;
  EntryBodyImageGroup: EntryBodyImageGroup;
  EntryBodyImageUpdateInput: EntryBodyImageUpdateInput;
  EntryBodyJSON: EntryBodyJson;
  EntryBodyList: EntryBodyList;
  EntryBodyListCreateInput: EntryBodyListCreateInput;
  EntryBodyListItem: EntryBodyListItem;
  EntryBodyListItemCreateInput: EntryBodyListItemCreateInput;
  EntryBodyListItemListInput: EntryBodyListItemListInput;
  EntryBodyListItemListPatchInput: EntryBodyListItemListPatchInput;
  EntryBodyListItemUpdateInput: EntryBodyListItemUpdateInput;
  EntryBodyListUpdateInput: EntryBodyListUpdateInput;
  EntryBodyNewsletter: EntryBodyNewsletter;
  EntryBodyParagraph: EntryBodyParagraph;
  EntryBodyParagraphCreateInput: EntryBodyParagraphCreateInput;
  EntryBodyParagraphUpdateInput: EntryBodyParagraphUpdateInput;
  EntryBodyPoll: EntryBodyPoll;
  EntryBodyProduct: EntryBodyProduct;
  EntryBodyPullquote: EntryBodyPullquote;
  EntryBodyPullquoteCreateInput: EntryBodyPullquoteCreateInput;
  EntryBodyPullquoteUpdateInput: EntryBodyPullquoteUpdateInput;
  EntryBodyPymEmbed: EntryBodyPymEmbed;
  EntryBodyRatingcard: EntryBodyRatingcard;
  EntryBodyRelatedList: EntryBodyRelatedList;
  EntryBodyRelatedListCreateInput: EntryBodyRelatedListCreateInput;
  EntryBodyRelatedListItem: EntryBodyRelatedListItem;
  EntryBodyRelatedListItemCreateInput: EntryBodyRelatedListItemCreateInput;
  EntryBodyRelatedListItemListInput: EntryBodyRelatedListItemListInput;
  EntryBodyRelatedListItemListPatchInput: EntryBodyRelatedListItemListPatchInput;
  EntryBodyRelatedListItemUpdateInput: EntryBodyRelatedListItemUpdateInput;
  EntryBodyRelatedListUpdateInput: EntryBodyRelatedListUpdateInput;
  EntryBodyScorecard: EntryBodyScorecard;
  EntryBodySecondLevelComponent: ResolversParentTypes['EntryBodyBlockquote'] | ResolversParentTypes['EntryBodyEmbed'] | ResolversParentTypes['EntryBodyHTML'] | ResolversParentTypes['EntryBodyHeading'] | ResolversParentTypes['EntryBodyHorizontalRule'] | ResolversParentTypes['EntryBodyImage'] | ResolversParentTypes['EntryBodyJSON'] | ResolversParentTypes['EntryBodyList'] | ResolversParentTypes['EntryBodyParagraph'] | ResolversParentTypes['EntryBodyPullquote'] | ResolversParentTypes['EntryBodyRatingcard'] | ResolversParentTypes['EntryBodyVideo'];
  EntryBodySecondLevelComponentCreateInput: EntryBodySecondLevelComponentCreateInput;
  EntryBodySecondLevelComponentListInput: EntryBodySecondLevelComponentListInput;
  EntryBodySecondLevelComponentListPatchInput: EntryBodySecondLevelComponentListPatchInput;
  EntryBodySidebar: EntryBodySidebar;
  EntryBodySidebarCreateInput: EntryBodySidebarCreateInput;
  EntryBodySidebarUpdateInput: EntryBodySidebarUpdateInput;
  EntryBodyTable: EntryBodyTable;
  EntryBodyUpdateInput: EntryBodyUpdateInput;
  EntryBodyVideo: EntryBodyVideo;
  EntryBodyVideoCreateInput: EntryBodyVideoCreateInput;
  EntryConnection: EntryConnection;
  EntryCreateInput: EntryCreateInput;
  EntryCreateResult: EntryCreateResult;
  EntryCustomFieldFlagInput: EntryCustomFieldFlagInput;
  EntryCustomFieldTextInput: EntryCustomFieldTextInput;
  EntryCustomPage: EntryCustomPage;
  EntryCustomPageBody: EntryCustomPageBody;
  EntryCustomPageComponent: ResolversParentTypes['EntryCustomPageBody'] | ResolversParentTypes['EntryCustomPageEmbed'] | ResolversParentTypes['EntryCustomPageImage'] | ResolversParentTypes['EntryCustomPageVideo'];
  EntryCustomPageEmbed: EntryCustomPageEmbed;
  EntryCustomPageImage: EntryCustomPageImage;
  EntryCustomPageVideo: EntryCustomPageVideo;
  EntryDraft: Omit<EntryDraft, 'leadArt' | 'leadComponent' | 'quickAttachment'> & { leadArt: Maybe<ResolversParentTypes['EntryLeadArt']>, leadComponent: Maybe<ResolversParentTypes['EntryLeadComponent']>, quickAttachment: Maybe<ResolversParentTypes['EntryQuickAttachment']> };
  EntryDraftCreateInput: EntryDraftCreateInput;
  EntryDraftCreateResult: EntryDraftCreateResult;
  EntryDraftEventSubjectInput: EntryDraftEventSubjectInput;
  EntryDraftPublishInput: EntryDraftPublishInput;
  EntryDraftPublishResult: EntryDraftPublishResult;
  EntryDraftSentToPrintEventInput: EntryDraftSentToPrintEventInput;
  EntryDraftUniqueKeyInput: EntryDraftUniqueKeyInput;
  EntryDraftUpdateInput: EntryDraftUpdateInput;
  EntryDraftUpdateResult: EntryDraftUpdateResult;
  EntryDraftUpsertByExternalIdInput: EntryDraftUpsertByExternalIdInput;
  EntryDraftUpsertByExternalIdResult: EntryDraftUpsertByExternalIdResult;
  EntryEdge: EntryEdge;
  EntryEmbed: EntryEmbed;
  EntryEmbedInput: EntryEmbedInput;
  EntryEmbedSource: EntryEmbedSource;
  EntryEventSubjectInput: EntryEventSubjectInput;
  EntryExpiredEventInput: EntryExpiredEventInput;
  EntryExternalLink: EntryExternalLink;
  EntryFrontend: EntryFrontend;
  EntryGallery: EntryGallery;
  EntryGalleryAssociationCreateInput: EntryGalleryAssociationCreateInput;
  EntryGalleryAssociationUpdateInput: EntryGalleryAssociationUpdateInput;
  EntryGalleryUniqueKeyInput: EntryGalleryUniqueKeyInput;
  EntryGroup: Omit<EntryGroup, 'railComponents'> & { railComponents: Array<Maybe<ResolversParentTypes['EntryGroupRailComponent']>> };
  EntryGroupCreatedEventInput: EntryGroupCreatedEventInput;
  EntryGroupDestroyedEventInput: EntryGroupDestroyedEventInput;
  EntryGroupEntryAddedEventDataInput: EntryGroupEntryAddedEventDataInput;
  EntryGroupEntryAddedEventInput: EntryGroupEntryAddedEventInput;
  EntryGroupEntryRemovedEventDataInput: EntryGroupEntryRemovedEventDataInput;
  EntryGroupEntryRemovedEventInput: EntryGroupEntryRemovedEventInput;
  EntryGroupEventSubjectInput: EntryGroupEventSubjectInput;
  EntryGroupImage: EntryGroupImage;
  EntryGroupMembershipCollectionInput: EntryGroupMembershipCollectionInput;
  EntryGroupMembershipInput: EntryGroupMembershipInput;
  EntryGroupPage: EntryGroupPage;
  EntryGroupRailComponent: ResolversParentTypes['EntryGroupRailGroupWithImages'] | ResolversParentTypes['EntryGroupRailGroupWithText'] | ResolversParentTypes['EntryGroupRailNewsletter'];
  EntryGroupRailGroupWithImages: EntryGroupRailGroupWithImages;
  EntryGroupRailGroupWithText: EntryGroupRailGroupWithText;
  EntryGroupRailNewsletter: EntryGroupRailNewsletter;
  EntryGroupSearchQuery: EntryGroupSearchQuery;
  EntryGroupUniqueKeyInput: EntryGroupUniqueKeyInput;
  EntryGroupUpdatedEventInput: EntryGroupUpdatedEventInput;
  EntryImage: EntryImage;
  EntryImageAssetAssociationCreateInput: EntryImageAssetAssociationCreateInput;
  EntryImageAssetAssociationUpdateInput: EntryImageAssetAssociationUpdateInput;
  EntryImageComparison: EntryImageComparison;
  EntryImageCreateInput: EntryImageCreateInput;
  EntryImageCrop: EntryImageCrop;
  EntryImageCropInput: EntryImageCropInput;
  EntryImageFocus: EntryImageFocus;
  EntryImageFocusInput: EntryImageFocusInput;
  EntryImageInput: EntryImageInput;
  EntryImageUpdateInput: EntryImageUpdateInput;
  EntryLeadArt: ResolversParentTypes['EntryEmbed'] | ResolversParentTypes['EntryGallery'] | ResolversParentTypes['EntryImage'] | ResolversParentTypes['EntryVideo'];
  EntryLeadComponent: ResolversParentTypes['EntryLeadEmbed'] | ResolversParentTypes['EntryLeadGallery'] | ResolversParentTypes['EntryLeadHTML'] | ResolversParentTypes['EntryLeadImage'] | ResolversParentTypes['EntryLeadVideo'];
  EntryLeadEmbed: EntryLeadEmbed;
  EntryLeadGallery: EntryLeadGallery;
  EntryLeadHTML: EntryLeadHtml;
  EntryLeadImage: EntryLeadImage;
  EntryLeadVideo: EntryLeadVideo;
  EntryOrderInput: EntryOrderInput;
  EntryPackageCover: Omit<EntryPackageCover, 'items'> & { items: Maybe<Array<Maybe<ResolversParentTypes['EntryPackageCoverItem']>>> };
  EntryPackageCoverEntry: EntryPackageCoverEntry;
  EntryPackageCoverItem: ResolversParentTypes['EntryPackageCoverEntry'] | ResolversParentTypes['EntryPackageCoverPullquote'] | ResolversParentTypes['EntryPackageCoverVideo'];
  EntryPackageCoverPullquote: EntryPackageCoverPullquote;
  EntryPackageCoverVideo: EntryPackageCoverVideo;
  EntryPackageEntry: EntryPackageEntry;
  EntryPackageToc: EntryPackageToc;
  EntryPackageTocSection: EntryPackageTocSection;
  EntryPage: EntryPage;
  EntryPoll: EntryPoll;
  EntryPollOption: EntryPollOption;
  EntryProduct: EntryProduct;
  EntryProductRetailer: EntryProductRetailer;
  EntryPublishedEventInput: EntryPublishedEventInput;
  EntryQuickAttachment: ResolversParentTypes['EntryEmbed'] | ResolversParentTypes['EntryExternalLink'] | ResolversParentTypes['EntryImage'] | ResolversParentTypes['EntryRelatedEntry'] | ResolversParentTypes['EntryVideo'];
  EntryRailComponent: ResolversParentTypes['EntryRailGroupWithImages'] | ResolversParentTypes['EntryRailGroupWithText'] | ResolversParentTypes['EntryRailNewsletter'];
  EntryRailGroupWithImages: EntryRailGroupWithImages;
  EntryRailGroupWithText: EntryRailGroupWithText;
  EntryRailNewsletter: EntryRailNewsletter;
  EntryRelatedEntry: EntryRelatedEntry;
  EntryRevision: ResolversParentTypes['Entry'] | ResolversParentTypes['EntryDraft'];
  EntryScorecard: EntryScorecard;
  EntrySidebar: EntrySidebar;
  EntrySidebarAssociationCreateInput: EntrySidebarAssociationCreateInput;
  EntrySidebarAssociationUpdateInput: EntrySidebarAssociationUpdateInput;
  EntrySidebarBodyCreateInput: EntrySidebarBodyCreateInput;
  EntrySidebarBodyUpdateInput: EntrySidebarBodyUpdateInput;
  EntrySidebarCreateInput: EntrySidebarCreateInput;
  EntrySidebarCreateResult: EntrySidebarCreateResult;
  EntrySidebarUniqueKeyInput: EntrySidebarUniqueKeyInput;
  EntrySidebarUpdateInput: EntrySidebarUpdateInput;
  EntrySidebarUpdateResult: EntrySidebarUpdateResult;
  EntryStream: EntryStream;
  EntryTable: EntryTable;
  EntryTableSort: EntryTableSort;
  EntryTweet: EntryTweet;
  EntryUniqueKeyInput: EntryUniqueKeyInput;
  EntryUnpublishedEventInput: EntryUnpublishedEventInput;
  EntryUpdateInput: EntryUpdateInput;
  EntryUpdateResult: EntryUpdateResult;
  EntryUpsertByExternalIdInput: EntryUpsertByExternalIdInput;
  EntryUpsertByExternalIdResult: EntryUpsertByExternalIdResult;
  EntryUserAssociationListInput: EntryUserAssociationListInput;
  EntryUserAssociationListPatchInput: EntryUserAssociationListPatchInput;
  EntryVideo: EntryVideo;
  EntryVideoAssociationCreateInput: EntryVideoAssociationCreateInput;
  EntryVideoImage: EntryVideoImage;
  EntryVideoPlayer: EntryVideoPlayer;
  EntryVideoUniqueKeyInput: EntryVideoUniqueKeyInput;
  EventResult: EventResult;
  ExternalIdCollectionInput: ExternalIdCollectionInput;
  Feed: Feed;
  FileLocation: FileLocation;
  Float: Scalars['Float'];
  Forum: Forum;
  ForumMembership: ForumMembership;
  GoogleAmpLogo: GoogleAmpLogo;
  HermanoResourceSearchCondition: HermanoResourceSearchCondition;
  HermanoResourceSearchQuery: HermanoResourceSearchQuery;
  HubPage: HubPage;
  HubPageBreakingNewsBanner: HubPageBreakingNewsBanner;
  HubPageCreatedEventInput: HubPageCreatedEventInput;
  HubPageDestroyedEventInput: HubPageDestroyedEventInput;
  HubPageEventSubjectInput: HubPageEventSubjectInput;
  HubPagePage: HubPagePage;
  HubPagePlaceable: ResolversParentTypes['Entry'] | ResolversParentTypes['EntryGroup'];
  HubPagePlacement: HubPagePlacement;
  HubPagePlacementsUpdatedEventInput: HubPagePlacementsUpdatedEventInput;
  HubPageTemplateUpdatedEventInput: HubPageTemplateUpdatedEventInput;
  HubPageUpdatedEventInput: HubPageUpdatedEventInput;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  LegacySlug: LegacySlug;
  LinkSet: LinkSet;
  LinkSetCreatedEventInput: LinkSetCreatedEventInput;
  LinkSetDestroyedEventInput: LinkSetDestroyedEventInput;
  LinkSetEventSubjectInput: LinkSetEventSubjectInput;
  LinkSetLink: LinkSetLink;
  LinkSetLinkCreatedEventInput: LinkSetLinkCreatedEventInput;
  LinkSetLinkDestroyedEventInput: LinkSetLinkDestroyedEventInput;
  LinkSetLinkUpdatedEventInput: LinkSetLinkUpdatedEventInput;
  LinkSetPage: LinkSetPage;
  LinkSetUpdatedEventInput: LinkSetUpdatedEventInput;
  LiveCoverageEvent: LiveCoverageEvent;
  LiveCoverageEventPage: LiveCoverageEventPage;
  Locale: Locale;
  LocalePage: LocalePage;
  MapCard: MapCard;
  MemberProfile: MemberProfile;
  MmaEvent: MmaEvent;
  MmaEventPage: MmaEventPage;
  MmaFight: MmaFight;
  MmaFightPage: MmaFightPage;
  MmaFighter: MmaFighter;
  MmaFighterPage: MmaFighterPage;
  MmaPromotion: MmaPromotion;
  MmaPromotionPage: MmaPromotionPage;
  MmaWeightClass: MmaWeightClass;
  MmaWeightClassPage: MmaWeightClassPage;
  ModifyVideoProjectFileTreeInput: ModifyVideoProjectFileTreeInput;
  Mutation: {};
  Neighborhood: Neighborhood;
  NeighborhoodPage: NeighborhoodPage;
  Network: Network;
  NetworkMembership: NetworkMembership;
  Newsletter: Newsletter;
  OpentableVenue: OpentableVenue;
  OpentableVenuePage: OpentableVenuePage;
  Organization: Organization;
  PageInfo: PageInfo;
  Place: Place;
  PlaceDetail: ResolversParentTypes['Building'] | ResolversParentTypes['Venue'];
  PlacePage: PlacePage;
  PlainTextInput: PlainTextInput;
  PointMetricFacebook: PointMetricFacebook;
  PointMetricReddit: PointMetricReddit;
  PointMetricTwitter: PointMetricTwitter;
  Product: Product;
  ProductBrand: ProductBrand;
  ProductBrandPage: ProductBrandPage;
  ProductCategory: ProductCategory;
  ProductCategoryPage: ProductCategoryPage;
  ProductPage: ProductPage;
  ProductRetailer: ProductRetailer;
  ProjectSource: ProjectSource;
  Query: {};
  Redirect: Redirect;
  RedirectCreateInput: RedirectCreateInput;
  RedirectCreateResult: RedirectCreateResult;
  RedirectCreatedEventInput: RedirectCreatedEventInput;
  RedirectDeleteResult: RedirectDeleteResult;
  RedirectDestroyedEventInput: RedirectDestroyedEventInput;
  RedirectEventSubjectInput: RedirectEventSubjectInput;
  RedirectImportInput: RedirectImportInput;
  RedirectImportResult: RedirectImportResult;
  RedirectPage: RedirectPage;
  RedirectSearchQuery: RedirectSearchQuery;
  RedirectUniqueKeyInput: RedirectUniqueKeyInput;
  RedirectUpdateInput: RedirectUpdateInput;
  RedirectUpdateResult: RedirectUpdateResult;
  RedirectUpdatedEventInput: RedirectUpdatedEventInput;
  RedirectUpdatedEventSubjectInput: RedirectUpdatedEventSubjectInput;
  RegisteredQuery: RegisteredQuery;
  RegisteredQueryCreateInput: RegisteredQueryCreateInput;
  RegisteredQueryCreateResult: RegisteredQueryCreateResult;
  RegisteredQueryRemoveInput: RegisteredQueryRemoveInput;
  RegisteredQueryRemoveResult: RegisteredQueryRemoveResult;
  RichText: RichText;
  RichTextInput: RichTextInput;
  RichTextOp: Scalars['RichTextOp'];
  RichTextValueInput: RichTextValueInput;
  Role: Role;
  SendVideoFileForCaptioningInput: SendVideoFileForCaptioningInput;
  ShoppingDeal: ShoppingDeal;
  ShoppingDealPage: ShoppingDealPage;
  SocialLink: SocialLink;
  Sport: Sport;
  SportConference: SportConference;
  SportConferencePage: SportConferencePage;
  SportDivision: SportDivision;
  SportDivisionPage: SportDivisionPage;
  SportEvent: SportEvent;
  SportEventPage: SportEventPage;
  SportLeague: SportLeague;
  SportLeaguePage: SportLeaguePage;
  SportPage: SportPage;
  SportPlayer: SportPlayer;
  SportPlayerPage: SportPlayerPage;
  SportTeam: SportTeam;
  SportTeamPage: SportTeamPage;
  SportTicket: SportTicket;
  SportTicketPage: SportTicketPage;
  String: Scalars['String'];
  SupportRequest: SupportRequest;
  SupportRequestAttribute: SupportRequestAttribute;
  SupportRequestAttributeInput: SupportRequestAttributeInput;
  SupportRequestCCPAInput: SupportRequestCcpaInput;
  SupportRequestCreateResult: SupportRequestCreateResult;
  SupportRequestGDPRInput: SupportRequestGdprInput;
  SupportRequestPersonalDataInput: SupportRequestPersonalDataInput;
  SyndicationPartner: SyndicationPartner;
  ThumborCrop: ThumborCrop;
  TicketEvent: TicketEvent;
  TicketEventPage: TicketEventPage;
  TimeZone: Scalars['TimeZone'];
  TimeseriesMetric: TimeseriesMetric;
  URL: Scalars['URL'];
  UpdateVideoAssetInput: UpdateVideoAssetInput;
  UpdateVideoProjectFileInput: UpdateVideoProjectFileInput;
  UpdateVideoProjectInput: UpdateVideoProjectInput;
  UpdateVideoProjectRightsInput: UpdateVideoProjectRightsInput;
  User: User;
  UserActivityLog: UserActivityLog;
  UserDestroyedEventInput: UserDestroyedEventInput;
  UserEventSubjectInput: UserEventSubjectInput;
  UserPage: UserPage;
  UserProfile: ResolversParentTypes['AuthorProfile'] | ResolversParentTypes['MemberProfile'];
  UserSearchQuery: UserSearchQuery;
  UserUniqueKeyInput: UserUniqueKeyInput;
  UserUpdatedEventInput: UserUpdatedEventInput;
  Venue: Venue;
  VenuePage: VenuePage;
  VideoAccount: VideoAccount;
  VideoAsset: VideoAsset;
  VideoBrandConfig: VideoBrandConfig;
  VideoBrightcoveInfo: VideoBrightcoveInfo;
  VideoCategory: VideoCategory;
  VideoCredit: VideoCredit;
  VideoCreditInput: VideoCreditInput;
  VideoGame: VideoGame;
  VideoGameFranchise: VideoGameFranchise;
  VideoGameFranchisePage: VideoGameFranchisePage;
  VideoGamePage: VideoGamePage;
  VideoGamePlatform: VideoGamePlatform;
  VideoGamePlatformGroup: VideoGamePlatformGroup;
  VideoGamePlatformGroupPage: VideoGamePlatformGroupPage;
  VideoGamePlatformPage: VideoGamePlatformPage;
  VideoNetwork: VideoNetwork;
  VideoProject: VideoProject;
  VideoProjectFile: VideoProjectFile;
  VideoProjectFileJob: VideoProjectFileJob;
  VideoProjectPage: VideoProjectPage;
  VideoProjectRights: VideoProjectRights;
  VideoProjectSearchCondition: VideoProjectSearchCondition;
  VideoProjectSearchQuery: VideoProjectSearchQuery;
  VideoProvider: VideoProvider;
  VideoPublisher: VideoPublisher;
  VideoSeries: VideoSeries;
  VideoTag: VideoTag;
  VideoTagInput: VideoTagInput;
  VideoTagSearchQuery: VideoTagSearchQuery;
  VideoType: VideoType;
  _Entity: ResolversParentTypes['AutoTaggingScope'] | ResolversParentTypes['Community'] | ResolversParentTypes['Entry'] | ResolversParentTypes['EntryDraft'];
  _EntityRepresentation: Scalars['_EntityRepresentation'];
  createSyndicationPartnerInput: CreateSyndicationPartnerInput;
  updateSyndicationPartnerInput: UpdateSyndicationPartnerInput;
};

export type AdvertiserResolvers<ContextType = any, ParentType extends ResolversParentTypes['Advertiser'] = ResolversParentTypes['Advertiser']> = {
  campaigns: Resolver<Array<ResolversTypes['Campaign']>, ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdvertiserPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdvertiserPage'] = ResolversParentTypes['AdvertiserPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['Advertiser']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnalyticsMetricResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnalyticsMetric'] = ResolversParentTypes['AnalyticsMetric']> = {
  analyticsMetricNames: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType, Partial<AnalyticsMetricAnalyticsMetricNamesArgs>>;
  bucketedDeltaMetric: Resolver<Maybe<Array<Maybe<ResolversTypes['BucketedDeltaMetric']>>>, ParentType, ContextType, Partial<AnalyticsMetricBucketedDeltaMetricArgs>>;
  identifier: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pointMetricFacebook: Resolver<Maybe<Array<Maybe<ResolversTypes['PointMetricFacebook']>>>, ParentType, ContextType, Partial<AnalyticsMetricPointMetricFacebookArgs>>;
  pointMetricReddit: Resolver<Maybe<Array<Maybe<ResolversTypes['PointMetricReddit']>>>, ParentType, ContextType, Partial<AnalyticsMetricPointMetricRedditArgs>>;
  pointMetricTwitter: Resolver<Maybe<Array<Maybe<ResolversTypes['PointMetricTwitter']>>>, ParentType, ContextType, Partial<AnalyticsMetricPointMetricTwitterArgs>>;
  timeseriesMetric: Resolver<Maybe<Array<Maybe<ResolversTypes['TimeseriesMetric']>>>, ParentType, ContextType, Partial<AnalyticsMetricTimeseriesMetricArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnalyticsRefResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnalyticsRef'] = ResolversParentTypes['AnalyticsRef']> = {
  account: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  analyticsResource: Resolver<Maybe<ResolversTypes['AnalyticsResource']>, ParentType, ContextType>;
  analytics_resource_id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  body: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bucketedDeltaMetric: Resolver<Maybe<Array<Maybe<ResolversTypes['BucketedDeltaMetric']>>>, ParentType, ContextType, Partial<AnalyticsRefBucketedDeltaMetricArgs>>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  platform: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timeseriesMetric: Resolver<Maybe<Array<Maybe<ResolversTypes['TimeseriesMetric']>>>, ParentType, ContextType, Partial<AnalyticsRefTimeseriesMetricArgs>>;
  title: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnalyticsResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnalyticsResource'] = ResolversParentTypes['AnalyticsResource']> = {
  analyticsRefs: Resolver<Maybe<Array<Maybe<ResolversTypes['AnalyticsRef']>>>, ParentType, ContextType, Partial<AnalyticsResourceAnalyticsRefsArgs>>;
  analyticsTags: Resolver<Maybe<Array<Maybe<ResolversTypes['AnalyticsTag']>>>, ParentType, ContextType>;
  createdAt: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  identifier: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastRelevantAt: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  network: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pointMetricFacebook: Resolver<Maybe<Array<Maybe<ResolversTypes['PointMetricFacebook']>>>, ParentType, ContextType, Partial<AnalyticsResourcePointMetricFacebookArgs>>;
  pointMetricReddit: Resolver<Maybe<Array<Maybe<ResolversTypes['PointMetricReddit']>>>, ParentType, ContextType, Partial<AnalyticsResourcePointMetricRedditArgs>>;
  pointMetricTwitter: Resolver<Maybe<Array<Maybe<ResolversTypes['PointMetricTwitter']>>>, ParentType, ContextType, Partial<AnalyticsResourcePointMetricTwitterArgs>>;
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnalyticsTagResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnalyticsTag'] = ResolversParentTypes['AnalyticsTag']> = {
  identifier: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnthemStoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnthemStory'] = ResolversParentTypes['AnthemStory']> = {
  previewHtml: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AnthemStoryPreviewHtmlArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface AnyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Any'], any> {
  name: 'Any';
}

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = {
  caption: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  community: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType>;
  communityId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  contentType: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  credit: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  deleted: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  externalIds: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  fileName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  iptc: Resolver<Array<Maybe<ResolversTypes['AssetIPTCMetadata']>>, ParentType, ContextType>;
  network: Resolver<Maybe<ResolversTypes['Network']>, ParentType, ContextType>;
  networkId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  previewUrl: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  searchText: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  source: Resolver<ResolversTypes['AssetSource'], ParentType, ContextType>;
  sourceCaption: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourceId: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  thumbnailUrl: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  title: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type: Resolver<ResolversTypes['AssetType'], ParentType, ContextType>;
  uid: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  url: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  usageRights: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  width: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetCreateResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetCreateResult'] = ResolversParentTypes['AssetCreateResult']> = {
  asset: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetIptcMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetIPTCMetadata'] = ResolversParentTypes['AssetIPTCMetadata']> = {
  attributeName: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  attributeValues: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetPage'] = ResolversParentTypes['AssetPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perPage: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetUpdateResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetUpdateResult'] = ResolversParentTypes['AssetUpdateResult']> = {
  asset: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetUpsertByExternalIdResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetUpsertByExternalIdResult'] = ResolversParentTypes['AssetUpsertByExternalIdResult']> = {
  asset: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  isNew: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthorProfile'] = ResolversParentTypes['AuthorProfile']> = {
  bio: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  community: Resolver<ResolversTypes['Community'], ParentType, ContextType>;
  externalIds: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  imageUrl: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  socialLinks: Resolver<Array<ResolversTypes['SocialLink']>, ParentType, ContextType>;
  title: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  url: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  urlPath: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AutoTaggingScopeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AutoTaggingScope'] = ResolversParentTypes['AutoTaggingScope']> = {
  autolinkTagTypes: Resolver<Array<ResolversTypes['AutoTagType']>, ParentType, ContextType>;
  league: Resolver<Maybe<ResolversTypes['SportLeague']>, ParentType, ContextType>;
  leagueId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  leagueRequired: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  manualTagTypes: Resolver<Array<ResolversTypes['AutoTagType']>, ParentType, ContextType>;
  structuredTagTypes: Resolver<Array<ResolversTypes['AutoTagType']>, ParentType, ContextType>;
  team: Resolver<Maybe<ResolversTypes['SportTeam']>, ParentType, ContextType>;
  teamId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicImage'] = ResolversParentTypes['BasicImage']> = {
  url: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  variantUrl: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType, RequireFields<BasicImageVariantUrlArgs, 'format' | 'width'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type BucketedDeltaMetricResolvers<ContextType = any, ParentType extends ResolversParentTypes['BucketedDeltaMetric'] = ResolversParentTypes['BucketedDeltaMetric']> = {
  timestamp: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BuildResolvers<ContextType = any, ParentType extends ResolversParentTypes['Build'] = ResolversParentTypes['Build']> = {
  lastModified: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  log: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  statusMessage: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  uuid: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BuildPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['BuildPage'] = ResolversParentTypes['BuildPage']> = {
  expiresAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  key: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BuildingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Building'] = ResolversParentTypes['Building']> = {
  address: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  architect: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  crossstreet: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  developer: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  draft: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  floors: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  foursquareId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  foursquareTipId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  googlePlaceId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hideFromAutotagger: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  imageUrls: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  lat: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lng: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  locale: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  localeId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  management: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  network: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  place: Resolver<ResolversTypes['Place'], ParentType, ContextType>;
  placeId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stubhubUpcomingEventCount: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stubhubVenueId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  units: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  url: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BuildingPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['BuildingPage'] = ResolversParentTypes['BuildingPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['Building']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CampaignResolvers<ContextType = any, ParentType extends ResolversParentTypes['Campaign'] = ResolversParentTypes['Campaign']> = {
  advertiser: Resolver<Maybe<ResolversTypes['Advertiser']>, ParentType, ContextType>;
  advertiserId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  chorusId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CampaignPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CampaignPage'] = ResolversParentTypes['CampaignPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['Campaign']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CellDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['CellData'] = ResolversParentTypes['CellData']> = {
  bucket: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  prestoComponentData: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Community'] = ResolversParentTypes['Community']> = {
  affiliateUrls: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType, RequireFields<CommunityAffiliateUrlsArgs, 'links'>>;
  allEntries: Resolver<Maybe<ResolversTypes['EntryConnection']>, ParentType, ContextType, Partial<CommunityAllEntriesArgs>>;
  allEntryGroups: Resolver<ResolversTypes['EntryGroupPage'], ParentType, ContextType, RequireFields<CommunityAllEntryGroupsArgs, 'pageNumber' | 'perPage'>>;
  allHubPages: Resolver<ResolversTypes['HubPagePage'], ParentType, ContextType, RequireFields<CommunityAllHubPagesArgs, 'pageNumber' | 'perPage'>>;
  autoTagging: Resolver<Maybe<ResolversTypes['AutoTaggingScope']>, ParentType, ContextType>;
  commentArchiveAgeInDays: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  defaultImageSearchParams: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  defaultLinkSet: Resolver<Maybe<ResolversTypes['LinkSet']>, ParentType, ContextType>;
  domain: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entryGroup: Resolver<Maybe<ResolversTypes['EntryGroup']>, ParentType, ContextType, RequireFields<CommunityEntryGroupArgs, 'slug'>>;
  entryGroups: Resolver<Array<Maybe<ResolversTypes['EntryGroup']>>, ParentType, ContextType, RequireFields<CommunityEntryGroupsArgs, 'slugs'>>;
  faviconUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  frontPage: Resolver<Maybe<ResolversTypes['HubPage']>, ParentType, ContextType>;
  googleAmpLogo: Resolver<Maybe<ResolversTypes['GoogleAmpLogo']>, ParentType, ContextType>;
  hasSiteConfig: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<CommunityHasSiteConfigArgs, 'key' | 'type'>>;
  hubPage: Resolver<Maybe<ResolversTypes['HubPage']>, ParentType, ContextType, RequireFields<CommunityHubPageArgs, 'slug'>>;
  hubPages: Resolver<Array<Maybe<ResolversTypes['HubPage']>>, ParentType, ContextType, RequireFields<CommunityHubPagesArgs, 'slugs'>>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isPrimary: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  linkSet: Resolver<Maybe<ResolversTypes['LinkSet']>, ParentType, ContextType, RequireFields<CommunityLinkSetArgs, 'name'>>;
  linkSets: Resolver<Maybe<ResolversTypes['LinkSetPage']>, ParentType, ContextType, RequireFields<CommunityLinkSetsArgs, 'pageNumber' | 'perPage'>>;
  locale: Resolver<Maybe<ResolversTypes['Locale']>, ParentType, ContextType>;
  localeId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  network: Resolver<ResolversTypes['Network'], ParentType, ContextType>;
  newsletters: Resolver<Maybe<Array<ResolversTypes['Newsletter']>>, ParentType, ContextType>;
  overrideLinkSet: Resolver<Maybe<ResolversTypes['LinkSet']>, ParentType, ContextType>;
  placeFirstAvailableDefault: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  placeholderImageUrl: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  primaryTeam: Resolver<Maybe<ResolversTypes['SportTeam']>, ParentType, ContextType>;
  primaryTeamId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  schemaDomain: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<CommunitySchemaDomainArgs, 'withPort'>>;
  siteConfigBoolean: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<CommunitySiteConfigBooleanArgs, 'fallback' | 'key'>>;
  siteConfigInt: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<CommunitySiteConfigIntArgs, 'fallback' | 'key'>>;
  siteConfigJson: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<CommunitySiteConfigJsonArgs, 'fallback' | 'key'>>;
  siteConfigString: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<CommunitySiteConfigStringArgs, 'fallback' | 'key'>>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  teamIds: Resolver<Maybe<Array<ResolversTypes['Int']>>, ParentType, ContextType>;
  teams: Resolver<Maybe<Array<Maybe<ResolversTypes['SportTeam']>>>, ParentType, ContextType>;
  timeZone: Resolver<ResolversTypes['TimeZone'], ParentType, ContextType>;
  trendingEntries: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType, RequireFields<CommunityTrendingEntriesArgs, 'limit'>>;
  twitterScreenName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitterSendDefault: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  uid: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  url: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunityMembershipResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommunityMembership'] = ResolversParentTypes['CommunityMembership']> = {
  community: Resolver<ResolversTypes['Community'], ParentType, ContextType>;
  communityId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  joinedOn: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  recentAuthorAndContributorEntries: Resolver<ResolversTypes['EntryPage'], ParentType, ContextType, RequireFields<CommunityMembershipRecentAuthorAndContributorEntriesArgs, 'pageNumber' | 'perPage'>>;
  recentEntries: Resolver<ResolversTypes['EntryPage'], ParentType, ContextType, RequireFields<CommunityMembershipRecentEntriesArgs, 'pageNumber' | 'perPage'>>;
  roles: Resolver<Array<ResolversTypes['RoleName']>, ParentType, ContextType>;
  shortBio: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  user: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunityPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommunityPage'] = ResolversParentTypes['CommunityPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perPage: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<Maybe<ResolversTypes['Community']>>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type EntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entity'] = ResolversParentTypes['Entity']> = {
  __resolveType: TypeResolveFn<'AuthorProfile' | 'Entry' | 'EntryGroup' | 'Redirect', ParentType, ContextType>;
};

export type EntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entry'] = ResolversParentTypes['Entry']> = {
  additionalContributors: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  affiliateLinkRewritingDisabled: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  ampUrl: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  author: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  authorId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  authorProfile: Resolver<Maybe<ResolversTypes['AuthorProfile']>, ParentType, ContextType>;
  body: Resolver<ResolversTypes['EntryBody'], ParentType, ContextType>;
  buildingIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  buildings: Resolver<Maybe<Array<Maybe<ResolversTypes['Building']>>>, ParentType, ContextType>;
  campaignGroups: Resolver<Array<Maybe<ResolversTypes['EntryGroup']>>, ParentType, ContextType>;
  canonicalUrlOverride: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  commentsClosed: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  community: Resolver<ResolversTypes['Community'], ParentType, ContextType>;
  communityGroups: Resolver<Array<Maybe<ResolversTypes['EntryGroup']>>, ParentType, ContextType>;
  communityId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributorIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  contributorProfiles: Resolver<Array<Maybe<ResolversTypes['AuthorProfile']>>, ParentType, ContextType>;
  contributors: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
  createdAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  customFieldFlag: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<EntryCustomFieldFlagArgs, 'key'>>;
  customFieldText: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<EntryCustomFieldTextArgs, 'key'>>;
  customPages: Resolver<Maybe<Array<ResolversTypes['EntryCustomPage']>>, ParentType, ContextType>;
  dek: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  draft: Resolver<Maybe<ResolversTypes['EntryDraft']>, ParentType, ContextType>;
  externalIds: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  hasAffiliateLinks: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hideFromAmp: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hubPagePlacements: Resolver<Array<Maybe<ResolversTypes['HubPagePlacement']>>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isPaywalled: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isRestrictedInPrivacyConsentRegion: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  layoutTemplate: Resolver<Maybe<ResolversTypes['EntryLayoutTemplate']>, ParentType, ContextType>;
  leadArt: Resolver<Maybe<ResolversTypes['EntryLeadArt']>, ParentType, ContextType>;
  leadComponent: Resolver<Maybe<ResolversTypes['EntryLeadComponent']>, ParentType, ContextType>;
  leadImage: Resolver<Maybe<ResolversTypes['EntryImage']>, ParentType, ContextType>;
  legacyId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  linkPostCommunity: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType>;
  linkSet: Resolver<Maybe<ResolversTypes['LinkSet']>, ParentType, ContextType>;
  linkSetId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  liveCoverageEnd: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  liveCoverageEventIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  liveCoverageEvents: Resolver<Maybe<Array<Maybe<ResolversTypes['LiveCoverageEvent']>>>, ParentType, ContextType>;
  liveCoverageStart: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  mapCards: Resolver<Maybe<Array<ResolversTypes['MapCard']>>, ParentType, ContextType>;
  mmaEventIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  mmaEvents: Resolver<Maybe<Array<Maybe<ResolversTypes['MmaEvent']>>>, ParentType, ContextType>;
  mmaFightIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  mmaFighterIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  mmaFighters: Resolver<Maybe<Array<Maybe<ResolversTypes['MmaFighter']>>>, ParentType, ContextType>;
  mmaFights: Resolver<Maybe<Array<Maybe<ResolversTypes['MmaFight']>>>, ParentType, ContextType>;
  mmaPromotionIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  mmaPromotions: Resolver<Maybe<Array<Maybe<ResolversTypes['MmaPromotion']>>>, ParentType, ContextType>;
  mmaWeightClassIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  mmaWeightClasses: Resolver<Maybe<Array<Maybe<ResolversTypes['MmaWeightClass']>>>, ParentType, ContextType>;
  neighborhoodIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  neighborhoods: Resolver<Maybe<Array<Maybe<ResolversTypes['Neighborhood']>>>, ParentType, ContextType>;
  networkGroups: Resolver<Array<Maybe<ResolversTypes['EntryGroup']>>, ParentType, ContextType>;
  originalPublishDate: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  package: Resolver<Maybe<ResolversTypes['EntryRevision']>, ParentType, ContextType>;
  packageCover: Resolver<Maybe<ResolversTypes['EntryPackageCover']>, ParentType, ContextType>;
  packageLogo: Resolver<Maybe<ResolversTypes['EntryImage']>, ParentType, ContextType>;
  packageToc: Resolver<Maybe<ResolversTypes['EntryPackageToc']>, ParentType, ContextType>;
  password: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permalink: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  places: Resolver<Maybe<Array<Maybe<ResolversTypes['Place']>>>, ParentType, ContextType>;
  primaryCampaignGroup: Resolver<Maybe<ResolversTypes['EntryGroup']>, ParentType, ContextType>;
  primaryCommunityGroup: Resolver<Maybe<ResolversTypes['EntryGroup']>, ParentType, ContextType>;
  primaryCommunityGroupId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  primaryNetworkGroup: Resolver<Maybe<ResolversTypes['EntryGroup']>, ParentType, ContextType>;
  primaryNetworkGroupId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  primaryPackageGroup: Resolver<Maybe<ResolversTypes['EntryGroup']>, ParentType, ContextType>;
  printPublicationDate: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  printSlug: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productBrandIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  productBrands: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductBrand']>>>, ParentType, ContextType>;
  productCategories: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductCategory']>>>, ParentType, ContextType>;
  productCategoryIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  productIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  products: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  promoDescription: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  promoHeadline: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  promoImage: Resolver<Maybe<ResolversTypes['EntryImage']>, ParentType, ContextType>;
  publishDate: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  publishStatus: Resolver<ResolversTypes['EntryPublishStatus'], ParentType, ContextType>;
  quickAttachment: Resolver<Maybe<ResolversTypes['EntryQuickAttachment']>, ParentType, ContextType>;
  railComponents: Resolver<Array<Maybe<ResolversTypes['EntryRailComponent']>>, ParentType, ContextType>;
  scheduledForExpirationAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  seoDescription: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  seoHeadline: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seoImage: Resolver<Maybe<ResolversTypes['EntryImage']>, ParentType, ContextType>;
  seoSchema: Resolver<Maybe<Array<ResolversTypes['JSON']>>, ParentType, ContextType>;
  shoppingDealIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  shoppingDeals: Resolver<Maybe<Array<Maybe<ResolversTypes['ShoppingDeal']>>>, ParentType, ContextType>;
  shortLink: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  shouldNotDistribute: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  shouldUseHTMLNofollow: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  shouldUseHTMLNoindex: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  socialDescription: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  socialHeadline: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  socialImage: Resolver<Maybe<ResolversTypes['EntryImage']>, ParentType, ContextType>;
  sportEventIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  sportEvents: Resolver<Maybe<Array<Maybe<ResolversTypes['SportEvent']>>>, ParentType, ContextType>;
  sportPlayerIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  sportPlayers: Resolver<Maybe<Array<Maybe<ResolversTypes['SportPlayer']>>>, ParentType, ContextType>;
  sportTeamIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  sportTeams: Resolver<Maybe<Array<Maybe<ResolversTypes['SportTeam']>>>, ParentType, ContextType>;
  stream: Resolver<Maybe<ResolversTypes['EntryStream']>, ParentType, ContextType>;
  streams: Resolver<Maybe<Array<Maybe<ResolversTypes['Entry']>>>, ParentType, ContextType>;
  styles: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  teaser: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  ticketEvents: Resolver<Maybe<Array<Maybe<ResolversTypes['TicketEvent']>>>, ParentType, ContextType>;
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trashedAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  type: Resolver<ResolversTypes['EntryType'], ParentType, ContextType>;
  uid: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  url: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  urlPath: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uuid: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  venueIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  venues: Resolver<Maybe<Array<Maybe<ResolversTypes['Venue']>>>, ParentType, ContextType>;
  version: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  videoGameFranchiseIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  videoGameFranchises: Resolver<Maybe<Array<Maybe<ResolversTypes['VideoGameFranchise']>>>, ParentType, ContextType>;
  videoGameIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  videoGamePlatformIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  videoGamePlatforms: Resolver<Maybe<Array<Maybe<ResolversTypes['VideoGamePlatform']>>>, ParentType, ContextType>;
  videoGames: Resolver<Maybe<Array<Maybe<ResolversTypes['VideoGame']>>>, ParentType, ContextType>;
  visibleNetworkIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  wordCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBody'] = ResolversParentTypes['EntryBody']> = {
  components: Resolver<Array<ResolversTypes['EntryBodyComponent']>, ParentType, ContextType>;
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  quickPostComponents: Resolver<Array<ResolversTypes['EntryBodyComponent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyActionboxResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyActionbox'] = ResolversParentTypes['EntryBodyActionbox']> = {
  description: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  heading: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  label: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
  url: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyBlockquoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyBlockquote'] = ResolversParentTypes['EntryBodyBlockquote']> = {
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  paragraphs: Resolver<Array<ResolversTypes['EntryBodyParagraph']>, ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyComponentResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyComponent'] = ResolversParentTypes['EntryBodyComponent']> = {
  __resolveType: TypeResolveFn<'EntryBodyActionbox' | 'EntryBodyBlockquote' | 'EntryBodyEmbed' | 'EntryBodyGallery' | 'EntryBodyHTML' | 'EntryBodyHeading' | 'EntryBodyHorizontalRule' | 'EntryBodyImage' | 'EntryBodyImageComparison' | 'EntryBodyImageGroup' | 'EntryBodyJSON' | 'EntryBodyList' | 'EntryBodyNewsletter' | 'EntryBodyParagraph' | 'EntryBodyPoll' | 'EntryBodyProduct' | 'EntryBodyPullquote' | 'EntryBodyPymEmbed' | 'EntryBodyRatingcard' | 'EntryBodyRelatedList' | 'EntryBodyScorecard' | 'EntryBodySidebar' | 'EntryBodyTable' | 'EntryBodyVideo', ParentType, ContextType>;
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
};

export type EntryBodyComponentPlacementResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyComponentPlacement'] = ResolversParentTypes['EntryBodyComponentPlacement']> = {
  alignment: Resolver<Maybe<ResolversTypes['EntryBodyComponentAlignment']>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyEmbedResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyEmbed'] = ResolversParentTypes['EntryBodyEmbed']> = {
  embed: Resolver<ResolversTypes['EntryEmbed'], ParentType, ContextType>;
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyFormatResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyFormat'] = ResolversParentTypes['EntryBodyFormat']> = {
  html: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  plaintext: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyGalleryResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyGallery'] = ResolversParentTypes['EntryBodyGallery']> = {
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  gallery: Resolver<Maybe<ResolversTypes['EntryGallery']>, ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyHtmlResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyHTML'] = ResolversParentTypes['EntryBodyHTML']> = {
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
  rawHtml: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyHeadingResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyHeading'] = ResolversParentTypes['EntryBodyHeading']> = {
  contents: Resolver<ResolversTypes['RichText'], ParentType, ContextType>;
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  level: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyHorizontalRuleResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyHorizontalRule'] = ResolversParentTypes['EntryBodyHorizontalRule']> = {
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyImage'] = ResolversParentTypes['EntryBodyImage']> = {
  contentWarning: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  image: Resolver<ResolversTypes['EntryImage'], ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyImageComparisonResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyImageComparison'] = ResolversParentTypes['EntryBodyImageComparison']> = {
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  imageComparison: Resolver<Maybe<ResolversTypes['EntryImageComparison']>, ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyImageGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyImageGroup'] = ResolversParentTypes['EntryBodyImageGroup']> = {
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  images: Resolver<Array<ResolversTypes['EntryImage']>, ParentType, ContextType>;
  items: Resolver<Array<ResolversTypes['EntryBodyImage']>, ParentType, ContextType>;
  layout: Resolver<ResolversTypes['EntryBodyComponentGroupLayout'], ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyJsonResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyJSON'] = ResolversParentTypes['EntryBodyJSON']> = {
  data: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
  schemaName: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyListResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyList'] = ResolversParentTypes['EntryBodyList']> = {
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  items: Resolver<Array<ResolversTypes['EntryBodyListItem']>, ParentType, ContextType>;
  lines: Resolver<Array<ResolversTypes['RichText']>, ParentType, ContextType>;
  ordered: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyListItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyListItem'] = ResolversParentTypes['EntryBodyListItem']> = {
  line: Resolver<ResolversTypes['RichText'], ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyNewsletterResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyNewsletter'] = ResolversParentTypes['EntryBodyNewsletter']> = {
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  newsletter: Resolver<ResolversTypes['Newsletter'], ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyParagraphResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyParagraph'] = ResolversParentTypes['EntryBodyParagraph']> = {
  contents: Resolver<ResolversTypes['RichText'], ParentType, ContextType>;
  dropcap: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  endmark: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  lead: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyPollResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyPoll'] = ResolversParentTypes['EntryBodyPoll']> = {
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
  poll: Resolver<Maybe<ResolversTypes['EntryPoll']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyProduct'] = ResolversParentTypes['EntryBodyProduct']> = {
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
  product: Resolver<Maybe<ResolversTypes['EntryProduct']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyPullquoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyPullquote'] = ResolversParentTypes['EntryBodyPullquote']> = {
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
  quote: Resolver<ResolversTypes['RichText'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyPymEmbedResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyPymEmbed'] = ResolversParentTypes['EntryBodyPymEmbed']> = {
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
  url: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyRatingcardResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyRatingcard'] = ResolversParentTypes['EntryBodyRatingcard']> = {
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  maxRating: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
  rating: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyRelatedListResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyRelatedList'] = ResolversParentTypes['EntryBodyRelatedList']> = {
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  items: Resolver<Array<ResolversTypes['EntryBodyRelatedListItem']>, ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyRelatedListItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyRelatedListItem'] = ResolversParentTypes['EntryBodyRelatedListItem']> = {
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyScorecardResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyScorecard'] = ResolversParentTypes['EntryBodyScorecard']> = {
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
  scorecard: Resolver<Maybe<ResolversTypes['EntryScorecard']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodySecondLevelComponentResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodySecondLevelComponent'] = ResolversParentTypes['EntryBodySecondLevelComponent']> = {
  __resolveType: TypeResolveFn<'EntryBodyBlockquote' | 'EntryBodyEmbed' | 'EntryBodyHTML' | 'EntryBodyHeading' | 'EntryBodyHorizontalRule' | 'EntryBodyImage' | 'EntryBodyJSON' | 'EntryBodyList' | 'EntryBodyParagraph' | 'EntryBodyPullquote' | 'EntryBodyRatingcard' | 'EntryBodyVideo', ParentType, ContextType>;
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
};

export type EntryBodySidebarResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodySidebar'] = ResolversParentTypes['EntryBodySidebar']> = {
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
  sidebar: Resolver<Maybe<ResolversTypes['EntrySidebar']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyTableResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyTable'] = ResolversParentTypes['EntryBodyTable']> = {
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
  table: Resolver<Maybe<ResolversTypes['EntryTable']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryBodyVideoResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryBodyVideo'] = ResolversParentTypes['EntryBodyVideo']> = {
  autoplay: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  caption: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  contentWarning: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  format: Resolver<ResolversTypes['EntryBodyFormat'], ParentType, ContextType>;
  placement: Resolver<ResolversTypes['EntryBodyComponentPlacement'], ParentType, ContextType>;
  video: Resolver<Maybe<ResolversTypes['EntryVideo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryConnection'] = ResolversParentTypes['EntryConnection']> = {
  edges: Resolver<Maybe<Array<Maybe<ResolversTypes['EntryEdge']>>>, ParentType, ContextType>;
  nodes: Resolver<Maybe<Array<Maybe<ResolversTypes['Entry']>>>, ParentType, ContextType>;
  pageInfo: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryCreateResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryCreateResult'] = ResolversParentTypes['EntryCreateResult']> = {
  entry: Resolver<ResolversTypes['Entry'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryCustomPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryCustomPage'] = ResolversParentTypes['EntryCustomPage']> = {
  _key: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  build: Resolver<Maybe<ResolversTypes['BuildPage']>, ParentType, ContextType>;
  components: Resolver<Array<ResolversTypes['EntryCustomPageComponent']>, ParentType, ContextType>;
  dek: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  leadImage: Resolver<Maybe<ResolversTypes['EntryImage']>, ParentType, ContextType>;
  seoDescription: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  seoHeadline: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seoImage: Resolver<Maybe<ResolversTypes['EntryImage']>, ParentType, ContextType>;
  slug: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  socialDescription: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  socialHeadline: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  socialImage: Resolver<Maybe<ResolversTypes['EntryImage']>, ParentType, ContextType>;
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryCustomPageBodyResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryCustomPageBody'] = ResolversParentTypes['EntryCustomPageBody']> = {
  body: Resolver<Array<ResolversTypes['EntryBodySecondLevelComponent']>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  properties: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  title: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryCustomPageComponentResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryCustomPageComponent'] = ResolversParentTypes['EntryCustomPageComponent']> = {
  __resolveType: TypeResolveFn<'EntryCustomPageBody' | 'EntryCustomPageEmbed' | 'EntryCustomPageImage' | 'EntryCustomPageVideo', ParentType, ContextType>;
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  properties: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  title: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type EntryCustomPageEmbedResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryCustomPageEmbed'] = ResolversParentTypes['EntryCustomPageEmbed']> = {
  embed: Resolver<ResolversTypes['EntryEmbed'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  properties: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  title: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryCustomPageImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryCustomPageImage'] = ResolversParentTypes['EntryCustomPageImage']> = {
  contentWarning: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image: Resolver<ResolversTypes['EntryImage'], ParentType, ContextType>;
  properties: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  title: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryCustomPageVideoResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryCustomPageVideo'] = ResolversParentTypes['EntryCustomPageVideo']> = {
  caption: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  contentWarning: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  properties: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  title: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video: Resolver<Maybe<ResolversTypes['EntryVideo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryDraftResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryDraft'] = ResolversParentTypes['EntryDraft']> = {
  additionalContributors: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  affiliateLinkRewritingDisabled: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  author: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  authorId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  authorTweet: Resolver<Maybe<ResolversTypes['EntryTweet']>, ParentType, ContextType>;
  body: Resolver<ResolversTypes['EntryBody'], ParentType, ContextType>;
  buildingIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  buildings: Resolver<Maybe<Array<Maybe<ResolversTypes['Building']>>>, ParentType, ContextType>;
  campaignGroups: Resolver<Array<Maybe<ResolversTypes['EntryGroup']>>, ParentType, ContextType>;
  canonicalUrlOverride: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  community: Resolver<ResolversTypes['Community'], ParentType, ContextType>;
  communityGroups: Resolver<Array<Maybe<ResolversTypes['EntryGroup']>>, ParentType, ContextType>;
  communityId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  communityTweet: Resolver<Maybe<ResolversTypes['EntryTweet']>, ParentType, ContextType>;
  contributorIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  contributors: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
  createdAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  customFieldFlag: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<EntryDraftCustomFieldFlagArgs, 'key'>>;
  customFieldText: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<EntryDraftCustomFieldTextArgs, 'key'>>;
  customPages: Resolver<Maybe<Array<ResolversTypes['EntryCustomPage']>>, ParentType, ContextType>;
  dek: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  editUrl: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  editorialStatus: Resolver<ResolversTypes['EntryDraftEditorialStatus'], ParentType, ContextType>;
  entry: Resolver<Maybe<ResolversTypes['Entry']>, ParentType, ContextType>;
  externalIds: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  hasAffiliateLinks: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hideFromAmp: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isEmbargoed: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isPaywalled: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isRestrictedInPrivacyConsentRegion: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  layoutTemplate: Resolver<Maybe<ResolversTypes['EntryLayoutTemplate']>, ParentType, ContextType>;
  leadArt: Resolver<Maybe<ResolversTypes['EntryLeadArt']>, ParentType, ContextType>;
  leadComponent: Resolver<Maybe<ResolversTypes['EntryLeadComponent']>, ParentType, ContextType>;
  leadImage: Resolver<Maybe<ResolversTypes['EntryImage']>, ParentType, ContextType>;
  legacyId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  linkSet: Resolver<Maybe<ResolversTypes['LinkSet']>, ParentType, ContextType>;
  linkSetId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  liveCoverageEnd: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  liveCoverageEventIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  liveCoverageEvents: Resolver<Maybe<Array<Maybe<ResolversTypes['LiveCoverageEvent']>>>, ParentType, ContextType>;
  liveCoverageStart: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  mapCards: Resolver<Maybe<Array<ResolversTypes['MapCard']>>, ParentType, ContextType>;
  mmaEventIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  mmaEvents: Resolver<Maybe<Array<Maybe<ResolversTypes['MmaEvent']>>>, ParentType, ContextType>;
  mmaFightIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  mmaFighterIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  mmaFighters: Resolver<Maybe<Array<Maybe<ResolversTypes['MmaFighter']>>>, ParentType, ContextType>;
  mmaFights: Resolver<Maybe<Array<Maybe<ResolversTypes['MmaFight']>>>, ParentType, ContextType>;
  mmaPromotionIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  mmaPromotions: Resolver<Maybe<Array<Maybe<ResolversTypes['MmaPromotion']>>>, ParentType, ContextType>;
  mmaWeightClassIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  mmaWeightClasses: Resolver<Maybe<Array<Maybe<ResolversTypes['MmaWeightClass']>>>, ParentType, ContextType>;
  neighborhoodIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  neighborhoods: Resolver<Maybe<Array<Maybe<ResolversTypes['Neighborhood']>>>, ParentType, ContextType>;
  networkGroups: Resolver<Array<Maybe<ResolversTypes['EntryGroup']>>, ParentType, ContextType>;
  package: Resolver<Maybe<ResolversTypes['EntryRevision']>, ParentType, ContextType>;
  packageCover: Resolver<Maybe<ResolversTypes['EntryPackageCover']>, ParentType, ContextType>;
  packageLogo: Resolver<Maybe<ResolversTypes['EntryImage']>, ParentType, ContextType>;
  packageToc: Resolver<Maybe<ResolversTypes['EntryPackageToc']>, ParentType, ContextType>;
  password: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permalink: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  places: Resolver<Maybe<Array<Maybe<ResolversTypes['Place']>>>, ParentType, ContextType>;
  primaryCampaignGroup: Resolver<Maybe<ResolversTypes['EntryGroup']>, ParentType, ContextType>;
  primaryCommunityGroup: Resolver<Maybe<ResolversTypes['EntryGroup']>, ParentType, ContextType>;
  primaryCommunityGroupId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  primaryNetworkGroup: Resolver<Maybe<ResolversTypes['EntryGroup']>, ParentType, ContextType>;
  primaryNetworkGroupId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  printPublicationDate: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  printSlug: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productBrandIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  productBrands: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductBrand']>>>, ParentType, ContextType>;
  productCategories: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductCategory']>>>, ParentType, ContextType>;
  productCategoryIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  productIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  products: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  promoDescription: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  promoHeadline: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  promoImage: Resolver<Maybe<ResolversTypes['EntryImage']>, ParentType, ContextType>;
  publishStatus: Resolver<ResolversTypes['EntryDraftPublishStatus'], ParentType, ContextType>;
  quickAttachment: Resolver<Maybe<ResolversTypes['EntryQuickAttachment']>, ParentType, ContextType>;
  scheduledForPublishAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  seoDescription: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  seoHeadline: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seoImage: Resolver<Maybe<ResolversTypes['EntryImage']>, ParentType, ContextType>;
  seoSchema: Resolver<Maybe<Array<ResolversTypes['JSON']>>, ParentType, ContextType>;
  shoppingDealIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  shoppingDeals: Resolver<Maybe<Array<Maybe<ResolversTypes['ShoppingDeal']>>>, ParentType, ContextType>;
  shortLink: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  shouldNotDistribute: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  shouldUseHTMLNofollow: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  shouldUseHTMLNoindex: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  socialDescription: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  socialHeadline: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  socialImage: Resolver<Maybe<ResolversTypes['EntryImage']>, ParentType, ContextType>;
  sportEventIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  sportEvents: Resolver<Maybe<Array<Maybe<ResolversTypes['SportEvent']>>>, ParentType, ContextType>;
  sportPlayerIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  sportPlayers: Resolver<Maybe<Array<Maybe<ResolversTypes['SportPlayer']>>>, ParentType, ContextType>;
  sportTeamIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  sportTeams: Resolver<Maybe<Array<Maybe<ResolversTypes['SportTeam']>>>, ParentType, ContextType>;
  stream: Resolver<Maybe<ResolversTypes['EntryStream']>, ParentType, ContextType>;
  streams: Resolver<Maybe<Array<Maybe<ResolversTypes['Entry']>>>, ParentType, ContextType>;
  styles: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  teaser: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  ticketEvents: Resolver<Maybe<Array<Maybe<ResolversTypes['TicketEvent']>>>, ParentType, ContextType>;
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trashedAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  type: Resolver<ResolversTypes['EntryType'], ParentType, ContextType>;
  uid: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  urlPath: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uuid: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  venueIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  venues: Resolver<Maybe<Array<Maybe<ResolversTypes['Venue']>>>, ParentType, ContextType>;
  version: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  videoGameFranchiseIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  videoGameFranchises: Resolver<Maybe<Array<Maybe<ResolversTypes['VideoGameFranchise']>>>, ParentType, ContextType>;
  videoGameIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  videoGamePlatformIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  videoGamePlatforms: Resolver<Maybe<Array<Maybe<ResolversTypes['VideoGamePlatform']>>>, ParentType, ContextType>;
  videoGames: Resolver<Maybe<Array<Maybe<ResolversTypes['VideoGame']>>>, ParentType, ContextType>;
  visibleNetworkIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  wordCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryDraftCreateResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryDraftCreateResult'] = ResolversParentTypes['EntryDraftCreateResult']> = {
  entryDraft: Resolver<ResolversTypes['EntryDraft'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryDraftPublishResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryDraftPublishResult'] = ResolversParentTypes['EntryDraftPublishResult']> = {
  entry: Resolver<Maybe<ResolversTypes['Entry']>, ParentType, ContextType>;
  entryDraft: Resolver<Maybe<ResolversTypes['EntryDraft']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryDraftUpdateResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryDraftUpdateResult'] = ResolversParentTypes['EntryDraftUpdateResult']> = {
  entryDraft: Resolver<ResolversTypes['EntryDraft'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryDraftUpsertByExternalIdResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryDraftUpsertByExternalIdResult'] = ResolversParentTypes['EntryDraftUpsertByExternalIdResult']> = {
  entryDraft: Resolver<ResolversTypes['EntryDraft'], ParentType, ContextType>;
  isNew: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryEdge'] = ResolversParentTypes['EntryEdge']> = {
  cursor: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node: Resolver<ResolversTypes['Entry'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryEmbedResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryEmbed'] = ResolversParentTypes['EntryEmbed']> = {
  author: Resolver<ResolversTypes['EntryEmbedSource'], ParentType, ContextType>;
  embedHtml: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provider: Resolver<ResolversTypes['EntryEmbedSource'], ParentType, ContextType>;
  url: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryEmbedSourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryEmbedSource'] = ResolversParentTypes['EntryEmbedSource']> = {
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryExternalLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryExternalLink'] = ResolversParentTypes['EntryExternalLink']> = {
  source: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryFrontendResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryFrontend'] = ResolversParentTypes['EntryFrontend']> = {
  adUnitSlug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  analyticsDataLayer: Resolver<Maybe<ResolversTypes['Any']>, ParentType, ContextType>;
  bodyUnified: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<EntryFrontendBodyUnifiedArgs, 'shouldIncludeAssociatedEmbeds' | 'shouldIncludeInlineAssets' | 'shouldIncludeIntro' | 'shouldIncludeTokens' | 'shouldTruncateAll' | 'shouldUseAffiliateLinks'>>;
  entryId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryGalleryResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryGallery'] = ResolversParentTypes['EntryGallery']> = {
  externalIds: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  images: Resolver<Array<ResolversTypes['EntryImage']>, ParentType, ContextType>;
  recentEntries: Resolver<ResolversTypes['EntryPage'], ParentType, ContextType, RequireFields<EntryGalleryRecentEntriesArgs, 'pageNumber' | 'perPage'>>;
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  uuid: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryGroup'] = ResolversParentTypes['EntryGroup']> = {
  advertiserClickthroughUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  advertiserDfpOrderName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  advertiserName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  advertiserPreamble: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  campaignAdvertiserDarkImage: Resolver<Maybe<ResolversTypes['BasicImage']>, ParentType, ContextType>;
  campaignAdvertiserLightImage: Resolver<Maybe<ResolversTypes['BasicImage']>, ParentType, ContextType>;
  campaignDarkImage: Resolver<Maybe<ResolversTypes['BasicImage']>, ParentType, ContextType>;
  campaignHubImage: Resolver<Maybe<ResolversTypes['BasicImage']>, ParentType, ContextType>;
  campaignLightImage: Resolver<Maybe<ResolversTypes['BasicImage']>, ParentType, ContextType>;
  childEntryGroups: Resolver<ResolversTypes['EntryGroupPage'], ParentType, ContextType, RequireFields<EntryGroupChildEntryGroupsArgs, 'pageNumber' | 'perPage'>>;
  community: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType>;
  communityId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  coverImage: Resolver<Maybe<ResolversTypes['BasicImage']>, ParentType, ContextType>;
  createdAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasSiteConfig: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<EntryGroupHasSiteConfigArgs, 'key' | 'type'>>;
  hubPage: Resolver<Maybe<ResolversTypes['HubPage']>, ParentType, ContextType>;
  hubPageId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hubPagePlacements: Resolver<Array<Maybe<ResolversTypes['HubPagePlacement']>>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  image: Resolver<Maybe<ResolversTypes['EntryGroupImage']>, ParentType, ContextType>;
  isDisclaimer: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isInternal: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isStarred: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  network: Resolver<Maybe<ResolversTypes['Network']>, ParentType, ContextType>;
  networkId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parentEntryGroup: Resolver<Maybe<ResolversTypes['EntryGroup']>, ParentType, ContextType>;
  promoHeadline: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  railComponents: Resolver<Array<Maybe<ResolversTypes['EntryGroupRailComponent']>>, ParentType, ContextType>;
  recentEntries: Resolver<ResolversTypes['EntryPage'], ParentType, ContextType, RequireFields<EntryGroupRecentEntriesArgs, 'excludePlaceables' | 'pageNumber' | 'perPage'>>;
  redirectUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seoDescription: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seoTitle: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shouldAutoAddSubgroupEntries: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  shouldRedirect: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  siteConfigBoolean: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<EntryGroupSiteConfigBooleanArgs, 'fallback' | 'key'>>;
  siteConfigInt: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<EntryGroupSiteConfigIntArgs, 'fallback' | 'key'>>;
  siteConfigJson: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<EntryGroupSiteConfigJsonArgs, 'fallback' | 'key'>>;
  siteConfigString: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<EntryGroupSiteConfigStringArgs, 'fallback' | 'key'>>;
  slug: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  titleImage: Resolver<Maybe<ResolversTypes['BasicImage']>, ParentType, ContextType>;
  type: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  url: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  urlPath: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryGroupImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryGroupImage'] = ResolversParentTypes['EntryGroupImage']> = {
  altText: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caption: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  credit: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  thumborUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<EntryGroupImageThumborUrlArgs>>;
  url: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryGroupPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryGroupPage'] = ResolversParentTypes['EntryGroupPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perPage: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<Maybe<ResolversTypes['EntryGroup']>>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryGroupRailComponentResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryGroupRailComponent'] = ResolversParentTypes['EntryGroupRailComponent']> = {
  __resolveType: TypeResolveFn<'EntryGroupRailGroupWithImages' | 'EntryGroupRailGroupWithText' | 'EntryGroupRailNewsletter', ParentType, ContextType>;
};

export type EntryGroupRailGroupWithImagesResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryGroupRailGroupWithImages'] = ResolversParentTypes['EntryGroupRailGroupWithImages']> = {
  group: Resolver<ResolversTypes['EntryGroup'], ParentType, ContextType>;
  layout: Resolver<ResolversTypes['EntryGroupRailGroupWithImagesLayout'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryGroupRailGroupWithTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryGroupRailGroupWithText'] = ResolversParentTypes['EntryGroupRailGroupWithText']> = {
  group: Resolver<ResolversTypes['EntryGroup'], ParentType, ContextType>;
  layout: Resolver<ResolversTypes['EntryGroupRailGroupWithTextLayout'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryGroupRailNewsletterResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryGroupRailNewsletter'] = ResolversParentTypes['EntryGroupRailNewsletter']> = {
  newsletter: Resolver<ResolversTypes['Newsletter'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryImage'] = ResolversParentTypes['EntryImage']> = {
  asset: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  assetId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  caption: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  contentWarning: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  credit: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  crop: Resolver<ResolversTypes['EntryImageCrop'], ParentType, ContextType>;
  focus: Resolver<ResolversTypes['EntryImageFocus'], ParentType, ContextType>;
  height: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hideCredit: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  url: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  variantUrl: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType, RequireFields<EntryImageVariantUrlArgs, 'format' | 'width'>>;
  width: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryImageComparisonResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryImageComparison'] = ResolversParentTypes['EntryImageComparison']> = {
  caption: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  firstImage: Resolver<ResolversTypes['EntryImage'], ParentType, ContextType>;
  secondImage: Resolver<ResolversTypes['EntryImage'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryImageCropResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryImageCrop'] = ResolversParentTypes['EntryImageCrop']> = {
  height: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  width: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  x: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  y: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryImageFocusResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryImageFocus'] = ResolversParentTypes['EntryImageFocus']> = {
  x: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  y: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryLeadArtResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryLeadArt'] = ResolversParentTypes['EntryLeadArt']> = {
  __resolveType: TypeResolveFn<'EntryEmbed' | 'EntryGallery' | 'EntryImage' | 'EntryVideo', ParentType, ContextType>;
};

export type EntryLeadComponentResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryLeadComponent'] = ResolversParentTypes['EntryLeadComponent']> = {
  __resolveType: TypeResolveFn<'EntryLeadEmbed' | 'EntryLeadGallery' | 'EntryLeadHTML' | 'EntryLeadImage' | 'EntryLeadVideo', ParentType, ContextType>;
};

export type EntryLeadEmbedResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryLeadEmbed'] = ResolversParentTypes['EntryLeadEmbed']> = {
  caption: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  embed: Resolver<Maybe<ResolversTypes['EntryEmbed']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryLeadGalleryResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryLeadGallery'] = ResolversParentTypes['EntryLeadGallery']> = {
  gallery: Resolver<Maybe<ResolversTypes['EntryGallery']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryLeadHtmlResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryLeadHTML'] = ResolversParentTypes['EntryLeadHTML']> = {
  rawHtml: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryLeadImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryLeadImage'] = ResolversParentTypes['EntryLeadImage']> = {
  caption: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  image: Resolver<Maybe<ResolversTypes['EntryImage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryLeadVideoResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryLeadVideo'] = ResolversParentTypes['EntryLeadVideo']> = {
  autoplay: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  caption: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  video: Resolver<Maybe<ResolversTypes['EntryVideo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryPackageCoverResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryPackageCover'] = ResolversParentTypes['EntryPackageCover']> = {
  items: Resolver<Maybe<Array<Maybe<ResolversTypes['EntryPackageCoverItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryPackageCoverEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryPackageCoverEntry'] = ResolversParentTypes['EntryPackageCoverEntry']> = {
  entry: Resolver<ResolversTypes['Entry'], ParentType, ContextType>;
  layout: Resolver<Maybe<ResolversTypes['EntryPackageCoverEntryLayout']>, ParentType, ContextType>;
  title: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryPackageCoverItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryPackageCoverItem'] = ResolversParentTypes['EntryPackageCoverItem']> = {
  __resolveType: TypeResolveFn<'EntryPackageCoverEntry' | 'EntryPackageCoverPullquote' | 'EntryPackageCoverVideo', ParentType, ContextType>;
};

export type EntryPackageCoverPullquoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryPackageCoverPullquote'] = ResolversParentTypes['EntryPackageCoverPullquote']> = {
  quote: Resolver<ResolversTypes['RichText'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryPackageCoverVideoResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryPackageCoverVideo'] = ResolversParentTypes['EntryPackageCoverVideo']> = {
  caption: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  video: Resolver<Maybe<ResolversTypes['EntryVideo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryPackageEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryPackageEntry'] = ResolversParentTypes['EntryPackageEntry']> = {
  entry: Resolver<ResolversTypes['Entry'], ParentType, ContextType>;
  title: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryPackageTocResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryPackageToc'] = ResolversParentTypes['EntryPackageToc']> = {
  hidden: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  layout: Resolver<Maybe<ResolversTypes['EntryPackageTocLayout']>, ParentType, ContextType>;
  sections: Resolver<Maybe<Array<Maybe<ResolversTypes['EntryPackageTocSection']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryPackageTocSectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryPackageTocSection'] = ResolversParentTypes['EntryPackageTocSection']> = {
  entries: Resolver<Array<Maybe<ResolversTypes['EntryPackageEntry']>>, ParentType, ContextType>;
  heading: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryPage'] = ResolversParentTypes['EntryPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perPage: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryPollResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryPoll'] = ResolversParentTypes['EntryPoll']> = {
  closeDate: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  options: Resolver<Array<ResolversTypes['EntryPollOption']>, ParentType, ContextType>;
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalVotes: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryPollOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryPollOption'] = ResolversParentTypes['EntryPollOption']> = {
  label: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uuid: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  votes: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryProduct'] = ResolversParentTypes['EntryProduct']> = {
  description: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  image: Resolver<Maybe<ResolversTypes['EntryImage']>, ParentType, ContextType>;
  retailers: Resolver<Maybe<Array<ResolversTypes['EntryProductRetailer']>>, ParentType, ContextType>;
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryProductRetailerResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryProductRetailer'] = ResolversParentTypes['EntryProductRetailer']> = {
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  salePrice: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  url: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryQuickAttachmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryQuickAttachment'] = ResolversParentTypes['EntryQuickAttachment']> = {
  __resolveType: TypeResolveFn<'EntryEmbed' | 'EntryExternalLink' | 'EntryImage' | 'EntryRelatedEntry' | 'EntryVideo', ParentType, ContextType>;
};

export type EntryRailComponentResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryRailComponent'] = ResolversParentTypes['EntryRailComponent']> = {
  __resolveType: TypeResolveFn<'EntryRailGroupWithImages' | 'EntryRailGroupWithText' | 'EntryRailNewsletter', ParentType, ContextType>;
};

export type EntryRailGroupWithImagesResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryRailGroupWithImages'] = ResolversParentTypes['EntryRailGroupWithImages']> = {
  group: Resolver<ResolversTypes['EntryGroup'], ParentType, ContextType>;
  layout: Resolver<ResolversTypes['EntryRailGroupWithImagesLayout'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryRailGroupWithTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryRailGroupWithText'] = ResolversParentTypes['EntryRailGroupWithText']> = {
  group: Resolver<ResolversTypes['EntryGroup'], ParentType, ContextType>;
  layout: Resolver<ResolversTypes['EntryRailGroupWithTextLayout'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryRailNewsletterResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryRailNewsletter'] = ResolversParentTypes['EntryRailNewsletter']> = {
  newsletter: Resolver<ResolversTypes['Newsletter'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryRelatedEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryRelatedEntry'] = ResolversParentTypes['EntryRelatedEntry']> = {
  entry: Resolver<ResolversTypes['Entry'], ParentType, ContextType>;
  title: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryRevisionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryRevision'] = ResolversParentTypes['EntryRevision']> = {
  __resolveType: TypeResolveFn<'Entry' | 'EntryDraft', ParentType, ContextType>;
  additionalContributors: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  affiliateLinkRewritingDisabled: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  author: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  authorId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  body: Resolver<ResolversTypes['EntryBody'], ParentType, ContextType>;
  buildingIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  campaignGroups: Resolver<Array<Maybe<ResolversTypes['EntryGroup']>>, ParentType, ContextType>;
  canonicalUrlOverride: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  community: Resolver<ResolversTypes['Community'], ParentType, ContextType>;
  communityGroups: Resolver<Array<Maybe<ResolversTypes['EntryGroup']>>, ParentType, ContextType>;
  communityId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributorIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  contributors: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
  createdAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  customFieldFlag: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<EntryRevisionCustomFieldFlagArgs, 'key'>>;
  customFieldText: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<EntryRevisionCustomFieldTextArgs, 'key'>>;
  customPages: Resolver<Maybe<Array<ResolversTypes['EntryCustomPage']>>, ParentType, ContextType>;
  dek: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  externalIds: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  hasAffiliateLinks: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hideFromAmp: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isPaywalled: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isRestrictedInPrivacyConsentRegion: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  layoutTemplate: Resolver<Maybe<ResolversTypes['EntryLayoutTemplate']>, ParentType, ContextType>;
  leadArt: Resolver<Maybe<ResolversTypes['EntryLeadArt']>, ParentType, ContextType>;
  leadComponent: Resolver<Maybe<ResolversTypes['EntryLeadComponent']>, ParentType, ContextType>;
  leadImage: Resolver<Maybe<ResolversTypes['EntryImage']>, ParentType, ContextType>;
  legacyId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  linkSet: Resolver<Maybe<ResolversTypes['LinkSet']>, ParentType, ContextType>;
  linkSetId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  liveCoverageEnd: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  liveCoverageEventIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  liveCoverageStart: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  mapCards: Resolver<Maybe<Array<ResolversTypes['MapCard']>>, ParentType, ContextType>;
  mmaEventIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  mmaFightIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  mmaFighterIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  mmaPromotionIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  mmaWeightClassIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  neighborhoodIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  networkGroups: Resolver<Array<Maybe<ResolversTypes['EntryGroup']>>, ParentType, ContextType>;
  package: Resolver<Maybe<ResolversTypes['EntryRevision']>, ParentType, ContextType>;
  packageCover: Resolver<Maybe<ResolversTypes['EntryPackageCover']>, ParentType, ContextType>;
  packageLogo: Resolver<Maybe<ResolversTypes['EntryImage']>, ParentType, ContextType>;
  packageToc: Resolver<Maybe<ResolversTypes['EntryPackageToc']>, ParentType, ContextType>;
  password: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permalink: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  primaryCampaignGroup: Resolver<Maybe<ResolversTypes['EntryGroup']>, ParentType, ContextType>;
  primaryCommunityGroup: Resolver<Maybe<ResolversTypes['EntryGroup']>, ParentType, ContextType>;
  primaryCommunityGroupId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  primaryNetworkGroup: Resolver<Maybe<ResolversTypes['EntryGroup']>, ParentType, ContextType>;
  primaryNetworkGroupId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  printPublicationDate: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  printSlug: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productBrandIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  productCategoryIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  productIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  promoDescription: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  promoHeadline: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  promoImage: Resolver<Maybe<ResolversTypes['EntryImage']>, ParentType, ContextType>;
  quickAttachment: Resolver<Maybe<ResolversTypes['EntryQuickAttachment']>, ParentType, ContextType>;
  seoDescription: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  seoHeadline: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seoImage: Resolver<Maybe<ResolversTypes['EntryImage']>, ParentType, ContextType>;
  seoSchema: Resolver<Maybe<Array<ResolversTypes['JSON']>>, ParentType, ContextType>;
  shoppingDealIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  shortLink: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  shouldNotDistribute: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  shouldUseHTMLNofollow: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  shouldUseHTMLNoindex: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  socialDescription: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  socialHeadline: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  socialImage: Resolver<Maybe<ResolversTypes['EntryImage']>, ParentType, ContextType>;
  sportEventIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  sportPlayerIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  sportTeamIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  stream: Resolver<Maybe<ResolversTypes['EntryStream']>, ParentType, ContextType>;
  streams: Resolver<Maybe<Array<Maybe<ResolversTypes['Entry']>>>, ParentType, ContextType>;
  styles: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  teaser: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trashedAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  type: Resolver<ResolversTypes['EntryType'], ParentType, ContextType>;
  uid: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  urlPath: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uuid: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  venueIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  version: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  videoGameFranchiseIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  videoGameIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  videoGamePlatformIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  visibleNetworkIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  wordCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type EntryScorecardResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryScorecard'] = ResolversParentTypes['EntryScorecard']> = {
  body: Resolver<Array<ResolversTypes['EntryBodySecondLevelComponent']>, ParentType, ContextType>;
  cons: Resolver<Array<ResolversTypes['EntryBodySecondLevelComponent']>, ParentType, ContextType>;
  image: Resolver<Maybe<ResolversTypes['EntryImage']>, ParentType, ContextType>;
  maxScore: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  product: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  pros: Resolver<Array<ResolversTypes['EntryBodySecondLevelComponent']>, ParentType, ContextType>;
  score: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  tempScore: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntrySidebarResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntrySidebar'] = ResolversParentTypes['EntrySidebar']> = {
  body: Resolver<Array<ResolversTypes['EntryBodySecondLevelComponent']>, ParentType, ContextType>;
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  uuid: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntrySidebarCreateResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntrySidebarCreateResult'] = ResolversParentTypes['EntrySidebarCreateResult']> = {
  entrySidebar: Resolver<ResolversTypes['EntrySidebar'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntrySidebarUpdateResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntrySidebarUpdateResult'] = ResolversParentTypes['EntrySidebarUpdateResult']> = {
  entrySidebar: Resolver<ResolversTypes['EntrySidebar'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryStreamResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryStream'] = ResolversParentTypes['EntryStream']> = {
  entries: Resolver<ResolversTypes['EntryPage'], ParentType, ContextType, RequireFields<EntryStreamEntriesArgs, 'pageNumber' | 'perPage'>>;
  recentEntries: Resolver<ResolversTypes['EntryPage'], ParentType, ContextType, RequireFields<EntryStreamRecentEntriesArgs, 'pageNumber' | 'perPage'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryTableResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryTable'] = ResolversParentTypes['EntryTable']> = {
  caption: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  columns: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  credit: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  rows: Resolver<Array<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  searchable: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  sort: Resolver<Maybe<ResolversTypes['EntryTableSort']>, ParentType, ContextType>;
  style: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryTableSortResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryTableSort'] = ResolversParentTypes['EntryTableSort']> = {
  columnIndex: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  descending: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryTweetResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryTweet'] = ResolversParentTypes['EntryTweet']> = {
  handle: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  includeImage: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  text: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryUpdateResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryUpdateResult'] = ResolversParentTypes['EntryUpdateResult']> = {
  entry: Resolver<ResolversTypes['Entry'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryUpsertByExternalIdResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryUpsertByExternalIdResult'] = ResolversParentTypes['EntryUpsertByExternalIdResult']> = {
  entry: Resolver<ResolversTypes['Entry'], ParentType, ContextType>;
  isNew: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryVideoResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryVideo'] = ResolversParentTypes['EntryVideo']> = {
  _key: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  aspectRatio: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  asset: Resolver<ResolversTypes['VideoAsset'], ParentType, ContextType>;
  credits: Resolver<Maybe<Array<Maybe<ResolversTypes['VideoCredit']>>>, ParentType, ContextType>;
  description: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  duration: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  height: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hlsUrl: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  originalUrl: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  player: Resolver<Maybe<ResolversTypes['EntryVideoPlayer']>, ParentType, ContextType>;
  poster: Resolver<Maybe<ResolversTypes['EntryVideoImage']>, ParentType, ContextType>;
  srtCaptionUrl: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  title: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transcodedMp4Urls: Resolver<Maybe<Array<ResolversTypes['URL']>>, ParentType, ContextType>;
  type: Resolver<ResolversTypes['EntryVideoType'], ParentType, ContextType>;
  uid: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  uuid: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  vttCaptionUrl: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  width: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryVideoImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryVideoImage'] = ResolversParentTypes['EntryVideoImage']> = {
  url: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  variantUrl: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType, RequireFields<EntryVideoImageVariantUrlArgs, 'format' | 'width'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryVideoPlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryVideoPlayer'] = ResolversParentTypes['EntryVideoPlayer']> = {
  embedHtml: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventResult'] = ResolversParentTypes['EventResult']> = {
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeedResolvers<ContextType = any, ParentType extends ResolversParentTypes['Feed'] = ResolversParentTypes['Feed']> = {
  allowPaging: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  publishedWithin: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sortBy: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  syndicationPartner: Resolver<Maybe<ResolversTypes['SyndicationPartner']>, ParentType, ContextType>;
  tagWithSeries: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  templateKey: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  urlSegment: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  videoFeedAsset: Resolver<Maybe<ResolversTypes['VideoAsset']>, ParentType, ContextType, Partial<FeedVideoFeedAssetArgs>>;
  videoProvider: Resolver<Maybe<ResolversTypes['VideoProvider']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileLocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileLocation'] = ResolversParentTypes['FileLocation']> = {
  expiresAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  url: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ForumResolvers<ContextType = any, ParentType extends ResolversParentTypes['Forum'] = ResolversParentTypes['Forum']> = {
  community: Resolver<ResolversTypes['Community'], ParentType, ContextType>;
  communityId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdOn: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  open: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  provisionalWaitPeriod: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ForumMembershipResolvers<ContextType = any, ParentType extends ResolversParentTypes['ForumMembership'] = ResolversParentTypes['ForumMembership']> = {
  forum: Resolver<ResolversTypes['Forum'], ParentType, ContextType>;
  forumId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  joinedOn: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  lastVisitedOn: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  statusId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GoogleAmpLogoResolvers<ContextType = any, ParentType extends ResolversParentTypes['GoogleAmpLogo'] = ResolversParentTypes['GoogleAmpLogo']> = {
  height: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  url: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HubPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['HubPage'] = ResolversParentTypes['HubPage']> = {
  breakingNewsBanner: Resolver<Maybe<ResolversTypes['HubPageBreakingNewsBanner']>, ParentType, ContextType>;
  community: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType>;
  entryGroup: Resolver<Maybe<ResolversTypes['EntryGroup']>, ParentType, ContextType>;
  heroPlaceables: Resolver<Array<Maybe<ResolversTypes['HubPagePlaceable']>>, ParentType, ContextType>;
  heroPlacementCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  heroPlacements: Resolver<Array<Maybe<ResolversTypes['HubPagePlacement']>>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isFrontPage: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  layoutTemplateKey: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  layoutUpdatedAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  placeable: Resolver<Maybe<ResolversTypes['HubPagePlaceable']>, ParentType, ContextType, Partial<HubPagePlaceableArgs>>;
  placeables: Resolver<Array<Maybe<ResolversTypes['HubPagePlaceable']>>, ParentType, ContextType, Partial<HubPagePlaceablesArgs>>;
  placement: Resolver<Maybe<ResolversTypes['HubPagePlacement']>, ParentType, ContextType, RequireFields<HubPagePlacementArgs, 'slot'>>;
  placementCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  placementLabels: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType, Partial<HubPagePlacementLabelsArgs>>;
  placements: Resolver<Array<Maybe<ResolversTypes['HubPagePlacement']>>, ParentType, ContextType, Partial<HubPagePlacementsArgs>>;
  seoSchema: Resolver<Array<ResolversTypes['JSON']>, ParentType, ContextType>;
  slug: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  url: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  urlPath: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HubPageBreakingNewsBannerResolvers<ContextType = any, ParentType extends ResolversParentTypes['HubPageBreakingNewsBanner'] = ResolversParentTypes['HubPageBreakingNewsBanner']> = {
  content: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HubPagePageResolvers<ContextType = any, ParentType extends ResolversParentTypes['HubPagePage'] = ResolversParentTypes['HubPagePage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perPage: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<Maybe<ResolversTypes['HubPage']>>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HubPagePlaceableResolvers<ContextType = any, ParentType extends ResolversParentTypes['HubPagePlaceable'] = ResolversParentTypes['HubPagePlaceable']> = {
  __resolveType: TypeResolveFn<'Entry' | 'EntryGroup', ParentType, ContextType>;
  hubPagePlacements: Resolver<Array<Maybe<ResolversTypes['HubPagePlacement']>>, ParentType, ContextType>;
  uid: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  url: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
};

export type HubPagePlacementResolvers<ContextType = any, ParentType extends ResolversParentTypes['HubPagePlacement'] = ResolversParentTypes['HubPagePlacement']> = {
  crossPostCommunity: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType>;
  hubPage: Resolver<Maybe<ResolversTypes['HubPage']>, ParentType, ContextType>;
  label: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pinned: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  placeable: Resolver<Maybe<ResolversTypes['HubPagePlaceable']>, ParentType, ContextType>;
  slot: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type LegacySlugResolvers<ContextType = any, ParentType extends ResolversParentTypes['LegacySlug'] = ResolversParentTypes['LegacySlug']> = {
  community: Resolver<ResolversTypes['Community'], ParentType, ContextType>;
  communityId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  entryId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  format: Resolver<ResolversTypes['LegacySlugFormat'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinkSetResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkSet'] = ResolversParentTypes['LinkSet']> = {
  embedCode: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entryGroup: Resolver<Maybe<ResolversTypes['EntryGroup']>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isDefault: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isOverride: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  links: Resolver<Maybe<Array<ResolversTypes['LinkSetLink']>>, ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  populateMode: Resolver<ResolversTypes['LinkSetPopulateMode'], ParentType, ContextType>;
  uid: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinkSetLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkSetLink'] = ResolversParentTypes['LinkSetLink']> = {
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ordinal: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  url: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinkSetPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkSetPage'] = ResolversParentTypes['LinkSetPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perPage: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<Maybe<ResolversTypes['LinkSet']>>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveCoverageEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveCoverageEvent'] = ResolversParentTypes['LiveCoverageEvent']> = {
  awayTeam: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  competitors: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  draft: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hideFromAutotagger: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  homeTeam: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startTime: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  venueLocation: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  venueName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveCoverageEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveCoverageEventPage'] = ResolversParentTypes['LiveCoverageEventPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<Maybe<ResolversTypes['LiveCoverageEvent']>>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocaleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Locale'] = ResolversParentTypes['Locale']> = {
  abbreviation: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  continent: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  draft: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hideFromAutotagger: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lat: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lng: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  radiusKm: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  searchBuildings: Resolver<Maybe<ResolversTypes['BuildingPage']>, ParentType, ContextType, Partial<LocaleSearchBuildingsArgs>>;
  searchNeighborhoods: Resolver<Maybe<ResolversTypes['NeighborhoodPage']>, ParentType, ContextType, Partial<LocaleSearchNeighborhoodsArgs>>;
  searchPlaces: Resolver<Maybe<ResolversTypes['PlacePage']>, ParentType, ContextType, Partial<LocaleSearchPlacesArgs>>;
  searchShoppingDeals: Resolver<Maybe<ResolversTypes['ShoppingDealPage']>, ParentType, ContextType, Partial<LocaleSearchShoppingDealsArgs>>;
  searchVenues: Resolver<Maybe<ResolversTypes['VenuePage']>, ParentType, ContextType, Partial<LocaleSearchVenuesArgs>>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timezone: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  widename: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocalePageResolvers<ContextType = any, ParentType extends ResolversParentTypes['LocalePage'] = ResolversParentTypes['LocalePage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['Locale']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MapCardResolvers<ContextType = any, ParentType extends ResolversParentTypes['MapCard'] = ResolversParentTypes['MapCard']> = {
  address: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caption: Resolver<Maybe<ResolversTypes['RichText']>, ParentType, ContextType>;
  embed: Resolver<Maybe<ResolversTypes['EntryEmbed']>, ParentType, ContextType>;
  googlePlaceId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image: Resolver<Maybe<ResolversTypes['EntryImage']>, ParentType, ContextType>;
  latitude: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  venueId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  video: Resolver<Maybe<ResolversTypes['EntryVideo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberProfile'] = ResolversParentTypes['MemberProfile']> = {
  bio: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  commentCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  community: Resolver<ResolversTypes['Community'], ParentType, ContextType>;
  imageUrl: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  joinedOn: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  lastLoginAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  socialLinks: Resolver<Array<ResolversTypes['SocialLink']>, ParentType, ContextType>;
  title: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ugcEntryCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  url: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  user: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MmaEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['MmaEvent'] = ResolversParentTypes['MmaEvent']> = {
  coverImageUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  draft: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fights: Resolver<Array<ResolversTypes['MmaFight']>, ParentType, ContextType>;
  headlineFight: Resolver<Maybe<ResolversTypes['MmaFight']>, ParentType, ContextType>;
  headlineFightId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hideFromAutotagger: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  legacyId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  location: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  promotion: Resolver<Maybe<ResolversTypes['MmaPromotion']>, ParentType, ContextType>;
  promotionId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  shortName: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startTime: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  tvInfo: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MmaEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['MmaEventPage'] = ResolversParentTypes['MmaEventPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['MmaEvent']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MmaFightResolvers<ContextType = any, ParentType extends ResolversParentTypes['MmaFight'] = ResolversParentTypes['MmaFight']> = {
  cardOrder: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  coverImageUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  decision: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  draft: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  event: Resolver<ResolversTypes['MmaEvent'], ParentType, ContextType>;
  eventId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fighterA: Resolver<ResolversTypes['MmaFighter'], ParentType, ContextType>;
  fighterAId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fighterB: Resolver<ResolversTypes['MmaFighter'], ParentType, ContextType>;
  fighterBId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hideFromAutotagger: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  legacyId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mainCard: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  titleFight: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  weightClass: Resolver<Maybe<ResolversTypes['MmaWeightClass']>, ParentType, ContextType>;
  weightClassId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winner: Resolver<Maybe<ResolversTypes['MmaFighter']>, ParentType, ContextType>;
  winnerId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MmaFightPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['MmaFightPage'] = ResolversParentTypes['MmaFightPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['MmaFight']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MmaFighterResolvers<ContextType = any, ParentType extends ResolversParentTypes['MmaFighter'] = ResolversParentTypes['MmaFighter']> = {
  birthDate: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  draft: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  featured: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  firstName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hideFromAutotagger: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  legacyId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nickname: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  overallRank: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  placeOfBirth: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  weight: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weightClassRank: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winRecord: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MmaFighterPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['MmaFighterPage'] = ResolversParentTypes['MmaFighterPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['MmaFighter']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MmaPromotionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MmaPromotion'] = ResolversParentTypes['MmaPromotion']> = {
  abbreviation: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  draft: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hideFromAutotagger: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  legacyId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  scheduleArchiveDescription: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scheduleDescription: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MmaPromotionPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['MmaPromotionPage'] = ResolversParentTypes['MmaPromotionPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['MmaPromotion']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MmaWeightClassResolvers<ContextType = any, ParentType extends ResolversParentTypes['MmaWeightClass'] = ResolversParentTypes['MmaWeightClass']> = {
  abbreviation: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  draft: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hideFromAutotagger: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  legacyId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MmaWeightClassPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['MmaWeightClassPage'] = ResolversParentTypes['MmaWeightClassPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['MmaWeightClass']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  bulkCreateVideoAssets: Resolver<Maybe<Array<ResolversTypes['VideoAsset']>>, ParentType, ContextType, RequireFields<MutationBulkCreateVideoAssetsArgs, 'input'>>;
  bulkRemoveVideoAssets: Resolver<Maybe<Array<ResolversTypes['VideoAsset']>>, ParentType, ContextType, RequireFields<MutationBulkRemoveVideoAssetsArgs, 'input'>>;
  createAsset: Resolver<ResolversTypes['AssetCreateResult'], ParentType, ContextType, RequireFields<MutationCreateAssetArgs, 'input'>>;
  createBuild: Resolver<ResolversTypes['Build'], ParentType, ContextType, RequireFields<MutationCreateBuildArgs, 'input'>>;
  createCCPASupportRequest: Resolver<ResolversTypes['SupportRequestCreateResult'], ParentType, ContextType, RequireFields<MutationCreateCcpaSupportRequestArgs, 'input'>>;
  createCopy: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationCreateCopyArgs, 'input'>>;
  createEntry: Resolver<ResolversTypes['EntryCreateResult'], ParentType, ContextType, RequireFields<MutationCreateEntryArgs, 'input'>>;
  createEntryDraft: Resolver<ResolversTypes['EntryDraftCreateResult'], ParentType, ContextType, RequireFields<MutationCreateEntryDraftArgs, 'input'>>;
  createEntrySidebar: Resolver<ResolversTypes['EntrySidebarCreateResult'], ParentType, ContextType, RequireFields<MutationCreateEntrySidebarArgs, 'input'>>;
  createGDPRSupportRequest: Resolver<ResolversTypes['SupportRequestCreateResult'], ParentType, ContextType, RequireFields<MutationCreateGdprSupportRequestArgs, 'input'>>;
  createPersonalDataSupportRequest: Resolver<ResolversTypes['SupportRequestCreateResult'], ParentType, ContextType, RequireFields<MutationCreatePersonalDataSupportRequestArgs, 'input'>>;
  createRedirect: Resolver<ResolversTypes['RedirectCreateResult'], ParentType, ContextType, RequireFields<MutationCreateRedirectArgs, 'input'>>;
  createRegisteredQuery: Resolver<Maybe<ResolversTypes['RegisteredQueryCreateResult']>, ParentType, ContextType, RequireFields<MutationCreateRegisteredQueryArgs, 'input'>>;
  createSyndicationPartner: Resolver<ResolversTypes['SyndicationPartner'], ParentType, ContextType, RequireFields<MutationCreateSyndicationPartnerArgs, 'input'>>;
  createVideoAsset: Resolver<ResolversTypes['VideoAsset'], ParentType, ContextType, RequireFields<MutationCreateVideoAssetArgs, 'input'>>;
  createVideoProject: Resolver<ResolversTypes['VideoProject'], ParentType, ContextType, RequireFields<MutationCreateVideoProjectArgs, 'input'>>;
  createVideoProjectFile: Resolver<ResolversTypes['VideoProjectFile'], ParentType, ContextType, RequireFields<MutationCreateVideoProjectFileArgs, 'input'>>;
  createVideoProjectRights: Resolver<ResolversTypes['VideoProjectRights'], ParentType, ContextType, RequireFields<MutationCreateVideoProjectRightsArgs, 'input'>>;
  customerMigration_createLegacySlug: Resolver<ResolversTypes['LegacySlug'], ParentType, ContextType, RequireFields<MutationCustomerMigration_CreateLegacySlugArgs, 'input'>>;
  customerMigration_createOrUpdateLegacySlug: Resolver<ResolversTypes['LegacySlug'], ParentType, ContextType, RequireFields<MutationCustomerMigration_CreateOrUpdateLegacySlugArgs, 'input'>>;
  customerMigration_createOrUpdateRedirect: Resolver<ResolversTypes['Redirect'], ParentType, ContextType, RequireFields<MutationCustomerMigration_CreateOrUpdateRedirectArgs, 'input'>>;
  customerMigration_createRedirect: Resolver<ResolversTypes['Redirect'], ParentType, ContextType, RequireFields<MutationCustomerMigration_CreateRedirectArgs, 'input'>>;
  customerMigration_createSiteGroup: Resolver<ResolversTypes['EntryGroup'], ParentType, ContextType, RequireFields<MutationCustomerMigration_CreateSiteGroupArgs, 'input'>>;
  customerMigration_createSuperGroup: Resolver<ResolversTypes['EntryGroup'], ParentType, ContextType, RequireFields<MutationCustomerMigration_CreateSuperGroupArgs, 'input'>>;
  customerMigration_createUser: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCustomerMigration_CreateUserArgs, 'input'>>;
  customerMigration_createUserWithAuthorProfile: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCustomerMigration_CreateUserWithAuthorProfileArgs, 'input'>>;
  customerMigration_updateSiteGroup: Resolver<ResolversTypes['EntryGroup'], ParentType, ContextType, RequireFields<MutationCustomerMigration_UpdateSiteGroupArgs, 'input'>>;
  customerMigration_updateUser: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCustomerMigration_UpdateUserArgs, 'input'>>;
  deleteRedirect: Resolver<ResolversTypes['RedirectDeleteResult'], ParentType, ContextType, RequireFields<MutationDeleteRedirectArgs, 'where'>>;
  deleteVideoProject: Resolver<ResolversTypes['VideoProject'], ParentType, ContextType, RequireFields<MutationDeleteVideoProjectArgs, 'videoProjectId'>>;
  importRedirects: Resolver<ResolversTypes['RedirectImportResult'], ParentType, ContextType, RequireFields<MutationImportRedirectsArgs, 'input'>>;
  modifyVideoProjectFileTree: Resolver<Array<Maybe<ResolversTypes['VideoProjectFile']>>, ParentType, ContextType, RequireFields<MutationModifyVideoProjectFileTreeArgs, 'input'>>;
  promoteVideoAsset: Resolver<ResolversTypes['VideoAsset'], ParentType, ContextType, RequireFields<MutationPromoteVideoAssetArgs, 'videoAssetId'>>;
  publishEntryDraft: Resolver<ResolversTypes['EntryDraftPublishResult'], ParentType, ContextType, RequireFields<MutationPublishEntryDraftArgs, 'where'>>;
  recordAuthorProfileCreatedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordAuthorProfileCreatedEventArgs, 'input'>>;
  recordAuthorProfileDestroyedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordAuthorProfileDestroyedEventArgs, 'input'>>;
  recordAuthorProfileUpdatedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordAuthorProfileUpdatedEventArgs, 'input'>>;
  recordCommunityNavigationUpdatedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordCommunityNavigationUpdatedEventArgs, 'input'>>;
  recordEntryDraftSentToPrintEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordEntryDraftSentToPrintEventArgs, 'input'>>;
  recordEntryExpiredEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordEntryExpiredEventArgs, 'input'>>;
  recordEntryGroupCreatedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordEntryGroupCreatedEventArgs, 'input'>>;
  recordEntryGroupDestroyedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordEntryGroupDestroyedEventArgs, 'input'>>;
  recordEntryGroupEntryAddedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordEntryGroupEntryAddedEventArgs, 'input'>>;
  recordEntryGroupEntryRemovedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordEntryGroupEntryRemovedEventArgs, 'input'>>;
  recordEntryGroupUpdatedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordEntryGroupUpdatedEventArgs, 'input'>>;
  recordEntryPublishedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordEntryPublishedEventArgs, 'input'>>;
  recordEntryUnpublishedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordEntryUnpublishedEventArgs, 'input'>>;
  recordHubPageCreatedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordHubPageCreatedEventArgs, 'input'>>;
  recordHubPageDestroyedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordHubPageDestroyedEventArgs, 'input'>>;
  recordHubPagePlacementsUpdatedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordHubPagePlacementsUpdatedEventArgs, 'input'>>;
  recordHubPageTemplateUpdatedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordHubPageTemplateUpdatedEventArgs, 'input'>>;
  recordHubPageUpdatedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordHubPageUpdatedEventArgs, 'input'>>;
  recordLinkSetCreatedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordLinkSetCreatedEventArgs, 'input'>>;
  recordLinkSetDestroyedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordLinkSetDestroyedEventArgs, 'input'>>;
  recordLinkSetLinkCreatedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordLinkSetLinkCreatedEventArgs, 'input'>>;
  recordLinkSetLinkDestroyedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordLinkSetLinkDestroyedEventArgs, 'input'>>;
  recordLinkSetLinkUpdatedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordLinkSetLinkUpdatedEventArgs, 'input'>>;
  recordLinkSetUpdatedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordLinkSetUpdatedEventArgs, 'input'>>;
  recordRedirectCreatedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordRedirectCreatedEventArgs, 'input'>>;
  recordRedirectDestroyedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordRedirectDestroyedEventArgs, 'input'>>;
  recordRedirectUpdatedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordRedirectUpdatedEventArgs, 'input'>>;
  recordUserDestroyedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordUserDestroyedEventArgs, 'input'>>;
  recordUserUpdatedEvent: Resolver<Maybe<ResolversTypes['EventResult']>, ParentType, ContextType, RequireFields<MutationRecordUserUpdatedEventArgs, 'input'>>;
  removeAsset: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationRemoveAssetArgs, 'id'>>;
  removeRegisteredQuery: Resolver<Maybe<ResolversTypes['RegisteredQueryRemoveResult']>, ParentType, ContextType, RequireFields<MutationRemoveRegisteredQueryArgs, 'input'>>;
  reparentVideoAsset: Resolver<ResolversTypes['VideoAsset'], ParentType, ContextType, RequireFields<MutationReparentVideoAssetArgs, 'videoAssetId'>>;
  sendVideoFileForCaptioning: Resolver<ResolversTypes['VideoProjectFile'], ParentType, ContextType, RequireFields<MutationSendVideoFileForCaptioningArgs, 'input'>>;
  sendVideoFileForTranscoding: Resolver<ResolversTypes['VideoProjectFile'], ParentType, ContextType, RequireFields<MutationSendVideoFileForTranscodingArgs, 'videoProjectFileId'>>;
  syncVideoAsset: Resolver<ResolversTypes['VideoAsset'], ParentType, ContextType, RequireFields<MutationSyncVideoAssetArgs, 'videoAssetId'>>;
  touchVideoProjectFiles: Resolver<Array<Maybe<ResolversTypes['VideoProjectFile']>>, ParentType, ContextType, RequireFields<MutationTouchVideoProjectFilesArgs, 'videoProjectFileIds'>>;
  updateAsset: Resolver<ResolversTypes['AssetUpdateResult'], ParentType, ContextType, RequireFields<MutationUpdateAssetArgs, 'input' | 'where'>>;
  updateEntry: Resolver<ResolversTypes['EntryUpdateResult'], ParentType, ContextType, RequireFields<MutationUpdateEntryArgs, 'input' | 'where'>>;
  updateEntryDraft: Resolver<ResolversTypes['EntryDraftUpdateResult'], ParentType, ContextType, RequireFields<MutationUpdateEntryDraftArgs, 'input' | 'where'>>;
  updateEntrySidebar: Resolver<ResolversTypes['EntrySidebarUpdateResult'], ParentType, ContextType, RequireFields<MutationUpdateEntrySidebarArgs, 'input' | 'where'>>;
  updateRedirect: Resolver<ResolversTypes['RedirectUpdateResult'], ParentType, ContextType, RequireFields<MutationUpdateRedirectArgs, 'input' | 'where'>>;
  updateSyndicationPartner: Resolver<ResolversTypes['SyndicationPartner'], ParentType, ContextType, RequireFields<MutationUpdateSyndicationPartnerArgs, 'input'>>;
  updateVideoAsset: Resolver<ResolversTypes['VideoAsset'], ParentType, ContextType, RequireFields<MutationUpdateVideoAssetArgs, 'input'>>;
  updateVideoProject: Resolver<ResolversTypes['VideoProject'], ParentType, ContextType, RequireFields<MutationUpdateVideoProjectArgs, 'input'>>;
  updateVideoProjectFile: Resolver<ResolversTypes['VideoProjectFile'], ParentType, ContextType, RequireFields<MutationUpdateVideoProjectFileArgs, 'input'>>;
  updateVideoProjectRights: Resolver<ResolversTypes['VideoProjectRights'], ParentType, ContextType, RequireFields<MutationUpdateVideoProjectRightsArgs, 'input'>>;
  upsertAssetByExternalId: Resolver<ResolversTypes['AssetUpsertByExternalIdResult'], ParentType, ContextType, RequireFields<MutationUpsertAssetByExternalIdArgs, 'input'>>;
  upsertEntryByExternalId: Resolver<ResolversTypes['EntryUpsertByExternalIdResult'], ParentType, ContextType, RequireFields<MutationUpsertEntryByExternalIdArgs, 'input'>>;
  upsertEntryDraftByExternalId: Resolver<ResolversTypes['EntryDraftUpsertByExternalIdResult'], ParentType, ContextType, RequireFields<MutationUpsertEntryDraftByExternalIdArgs, 'input'>>;
};

export type NeighborhoodResolvers<ContextType = any, ParentType extends ResolversParentTypes['Neighborhood'] = ResolversParentTypes['Neighborhood']> = {
  children: Resolver<Array<ResolversTypes['Neighborhood']>, ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  draft: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hideFromAutotagger: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lat: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lng: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  locale: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  localeId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent: Resolver<Maybe<ResolversTypes['Neighborhood']>, ParentType, ContextType>;
  parentId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parentName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NeighborhoodPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['NeighborhoodPage'] = ResolversParentTypes['NeighborhoodPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['Neighborhood']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NetworkResolvers<ContextType = any, ParentType extends ResolversParentTypes['Network'] = ResolversParentTypes['Network']> = {
  allEntryGroups: Resolver<ResolversTypes['EntryGroupPage'], ParentType, ContextType, RequireFields<NetworkAllEntryGroupsArgs, 'pageNumber' | 'perPage'>>;
  communities: Resolver<Array<ResolversTypes['Community']>, ParentType, ContextType>;
  domain: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entryGroup: Resolver<Maybe<ResolversTypes['EntryGroup']>, ParentType, ContextType, RequireFields<NetworkEntryGroupArgs, 'slug'>>;
  entryGroups: Resolver<Array<Maybe<ResolversTypes['EntryGroup']>>, ParentType, ContextType, RequireFields<NetworkEntryGroupsArgs, 'slugs'>>;
  hasSiteConfig: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<NetworkHasSiteConfigArgs, 'key' | 'type'>>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isDisabled: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isMothballed: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isPrivateMode: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  networkConfigBoolean: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<NetworkNetworkConfigBooleanArgs, 'key'>>;
  networkConfigInt: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<NetworkNetworkConfigIntArgs, 'key'>>;
  networkConfigString: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<NetworkNetworkConfigStringArgs, 'key'>>;
  organization: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>;
  primaryCommunity: Resolver<ResolversTypes['Community'], ParentType, ContextType>;
  schemaDomain: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<NetworkSchemaDomainArgs, 'withPort'>>;
  searchCommunities: Resolver<ResolversTypes['CommunityPage'], ParentType, ContextType, Partial<NetworkSearchCommunitiesArgs>>;
  siteConfigBoolean: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<NetworkSiteConfigBooleanArgs, 'fallback' | 'key'>>;
  siteConfigInt: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<NetworkSiteConfigIntArgs, 'fallback' | 'key'>>;
  siteConfigJson: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<NetworkSiteConfigJsonArgs, 'fallback' | 'key'>>;
  siteConfigString: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<NetworkSiteConfigStringArgs, 'fallback' | 'key'>>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  url: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NetworkMembershipResolvers<ContextType = any, ParentType extends ResolversParentTypes['NetworkMembership'] = ResolversParentTypes['NetworkMembership']> = {
  imageUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<NetworkMembershipImageUrlArgs>>;
  joinedOn: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  network: Resolver<ResolversTypes['Network'], ParentType, ContextType>;
  networkId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NewsletterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Newsletter'] = ResolversParentTypes['Newsletter']> = {
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpentableVenueResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpentableVenue'] = ResolversParentTypes['OpentableVenue']> = {
  address: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lat: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lng: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  opentableId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  zip: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpentableVenuePageResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpentableVenuePage'] = ResolversParentTypes['OpentableVenuePage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['OpentableVenue']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = {
  authDomain: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  authSchemaDomain: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<OrganizationAuthSchemaDomainArgs, 'withPort'>>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  networks: Resolver<Array<Maybe<ResolversTypes['Network']>>, ParentType, ContextType>;
  primaryNetwork: Resolver<Maybe<ResolversTypes['Network']>, ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<OrganizationUserArgs>>;
  users: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType, Partial<OrganizationUsersArgs>>;
  usesAuth0: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  version: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Place'] = ResolversParentTypes['Place']> = {
  address: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  crossstreet: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  detail: Resolver<Maybe<ResolversTypes['PlaceDetail']>, ParentType, ContextType>;
  detailId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  detailType: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  draft: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  foursquareId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  foursquareTipId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  googlePlaceId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hideFromAutotagger: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  imageUrls: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  lat: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lng: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  locale: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  localeId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  network: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stubhubUpcomingEventCount: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stubhubVenueId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  url: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlaceDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlaceDetail'] = ResolversParentTypes['PlaceDetail']> = {
  __resolveType: TypeResolveFn<'Building' | 'Venue', ParentType, ContextType>;
  address: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crossstreet: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  foursquareId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  foursquareTipId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  googlePlaceId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  imageUrls: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  lat: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lng: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  locale: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  localeId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  network: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  place: Resolver<ResolversTypes['Place'], ParentType, ContextType>;
  placeId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stubhubUpcomingEventCount: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stubhubVenueId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type PlacePageResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlacePage'] = ResolversParentTypes['PlacePage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['Place']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PointMetricFacebookResolvers<ContextType = any, ParentType extends ResolversParentTypes['PointMetricFacebook'] = ResolversParentTypes['PointMetricFacebook']> = {
  createdAt: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fromName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  picture: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postConsumptionsByTypeLinkClicks: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  postEngagedUsers: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  postId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postImpressionsByPaidNonPaidUniqueTotal: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  postImpressionsUnique: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  postStoryAddsByActionTypeShare: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PointMetricRedditResolvers<ContextType = any, ParentType extends ResolversParentTypes['PointMetricReddit'] = ResolversParentTypes['PointMetricReddit']> = {
  comments: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  downVotes: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  permalink: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  score: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subreddit: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upVotes: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PointMetricTwitterResolvers<ContextType = any, ParentType extends ResolversParentTypes['PointMetricTwitter'] = ResolversParentTypes['PointMetricTwitter']> = {
  createdAt: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  engagements: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  favorites: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  impressions: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  picture: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  replies: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  retweets: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  text: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  aliases: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  asinCode: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  draft: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hideFromAutotagger: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  imageUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productBrand: Resolver<Maybe<ResolversTypes['ProductBrand']>, ParentType, ContextType>;
  productBrandId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  productCategory: Resolver<Maybe<ResolversTypes['ProductCategory']>, ParentType, ContextType>;
  productCategoryId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  productCategoryName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  redirectUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relatedProductIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  relatedProducts: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType>;
  releaseDate: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  retailers: Resolver<Maybe<Array<ResolversTypes['ProductRetailer']>>, ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summary: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upcCode: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductBrandResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductBrand'] = ResolversParentTypes['ProductBrand']> = {
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  draft: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hideFromAutotagger: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductBrandPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductBrandPage'] = ResolversParentTypes['ProductBrandPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['ProductBrand']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategory'] = ResolversParentTypes['ProductCategory']> = {
  childCategories: Resolver<Array<ResolversTypes['ProductCategory']>, ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  draft: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hideFromAutotagger: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parentCategory: Resolver<Maybe<ResolversTypes['ProductCategory']>, ParentType, ContextType>;
  parentCategoryId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductCategoryPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoryPage'] = ResolversParentTypes['ProductCategoryPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['ProductCategory']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductPage'] = ResolversParentTypes['ProductPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductRetailerResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductRetailer'] = ResolversParentTypes['ProductRetailer']> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  price: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storeName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectSourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectSource'] = ResolversParentTypes['ProjectSource']> = {
  builds: Resolver<Array<Maybe<ResolversTypes['Build']>>, ParentType, ContextType>;
  lastModified: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  type: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uuid: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _contentApiCommunities: Resolver<Array<Maybe<ResolversTypes['Community']>>, ParentType, ContextType, RequireFields<Query_ContentApiCommunitiesArgs, 'ids'>>;
  _entities: Resolver<Array<Maybe<ResolversTypes['_Entity']>>, ParentType, ContextType, RequireFields<Query_EntitiesArgs, 'representations'>>;
  _entryCustomPages: Resolver<Array<Maybe<ResolversTypes['EntryCustomPage']>>, ParentType, ContextType, RequireFields<Query_EntryCustomPagesArgs, 'keys'>>;
  _sbnEntries: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType, RequireFields<Query_SbnEntriesArgs, 'uids'>>;
  _sbnEntryPollOptions: Resolver<Array<Maybe<ResolversTypes['EntryPollOption']>>, ParentType, ContextType, RequireFields<Query_SbnEntryPollOptionsArgs, 'uuids'>>;
  _sbnEntryPolls: Resolver<Array<Maybe<ResolversTypes['EntryPoll']>>, ParentType, ContextType, RequireFields<Query_SbnEntryPollsArgs, 'ids'>>;
  _volumeUsers: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType, RequireFields<Query_VolumeUsersArgs, 'ids'>>;
  advertiser: Resolver<Maybe<ResolversTypes['Advertiser']>, ParentType, ContextType, RequireFields<QueryAdvertiserArgs, 'id'>>;
  advertisers: Resolver<Array<Maybe<ResolversTypes['Advertiser']>>, ParentType, ContextType, RequireFields<QueryAdvertisersArgs, 'ids'>>;
  analyticsMetric: Resolver<Maybe<ResolversTypes['AnalyticsMetric']>, ParentType, ContextType, Partial<QueryAnalyticsMetricArgs>>;
  analyticsRef: Resolver<Maybe<ResolversTypes['AnalyticsRef']>, ParentType, ContextType, RequireFields<QueryAnalyticsRefArgs, 'id'>>;
  analyticsResource: Resolver<Maybe<ResolversTypes['AnalyticsResource']>, ParentType, ContextType, RequireFields<QueryAnalyticsResourceArgs, 'identifier'>>;
  anthemStory: Resolver<Maybe<ResolversTypes['AnthemStory']>, ParentType, ContextType, RequireFields<QueryAnthemStoryArgs, 'uuid'>>;
  asset: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<QueryAssetArgs>>;
  assets: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType, Partial<QueryAssetsArgs>>;
  authorProfile: Resolver<Maybe<ResolversTypes['AuthorProfile']>, ParentType, ContextType, Partial<QueryAuthorProfileArgs>>;
  authorProfiles: Resolver<Array<Maybe<ResolversTypes['AuthorProfile']>>, ParentType, ContextType, Partial<QueryAuthorProfilesArgs>>;
  build: Resolver<Maybe<ResolversTypes['Build']>, ParentType, ContextType, RequireFields<QueryBuildArgs, 'uuid'>>;
  buildPage: Resolver<Maybe<ResolversTypes['BuildPage']>, ParentType, ContextType, RequireFields<QueryBuildPageArgs, 'key'>>;
  buildPages: Resolver<Array<Maybe<ResolversTypes['BuildPage']>>, ParentType, ContextType, RequireFields<QueryBuildPagesArgs, 'keys'>>;
  building: Resolver<Maybe<ResolversTypes['Building']>, ParentType, ContextType, RequireFields<QueryBuildingArgs, 'id'>>;
  buildings: Resolver<Array<Maybe<ResolversTypes['Building']>>, ParentType, ContextType, RequireFields<QueryBuildingsArgs, 'ids'>>;
  campaign: Resolver<Maybe<ResolversTypes['Campaign']>, ParentType, ContextType, RequireFields<QueryCampaignArgs, 'id'>>;
  campaigns: Resolver<Array<Maybe<ResolversTypes['Campaign']>>, ParentType, ContextType, RequireFields<QueryCampaignsArgs, 'ids'>>;
  cellData: Resolver<Maybe<ResolversTypes['CellData']>, ParentType, ContextType, Partial<QueryCellDataArgs>>;
  cliVersion: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  communities: Resolver<Array<Maybe<ResolversTypes['Community']>>, ParentType, ContextType, Partial<QueryCommunitiesArgs>>;
  community: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType, Partial<QueryCommunityArgs>>;
  complexityScore: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  currentUser: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  debug: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<QueryDebugArgs>>;
  entity: Resolver<Maybe<ResolversTypes['Entity']>, ParentType, ContextType, RequireFields<QueryEntityArgs, 'path'>>;
  entries: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType, Partial<QueryEntriesArgs>>;
  entriesForHermanoID: Resolver<Array<Maybe<ResolversTypes['ID']>>, ParentType, ContextType, RequireFields<QueryEntriesForHermanoIdArgs, 'hermanoID' | 'hermanoType'>>;
  entry: Resolver<Maybe<ResolversTypes['Entry']>, ParentType, ContextType, Partial<QueryEntryArgs>>;
  entryDraft: Resolver<Maybe<ResolversTypes['EntryDraft']>, ParentType, ContextType, Partial<QueryEntryDraftArgs>>;
  entryDrafts: Resolver<Array<Maybe<ResolversTypes['EntryDraft']>>, ParentType, ContextType, Partial<QueryEntryDraftsArgs>>;
  entryFrontend: Resolver<Maybe<ResolversTypes['EntryFrontend']>, ParentType, ContextType, RequireFields<QueryEntryFrontendArgs, 'uuid'>>;
  entryFrontends: Resolver<Array<Maybe<ResolversTypes['EntryFrontend']>>, ParentType, ContextType, RequireFields<QueryEntryFrontendsArgs, 'entryIds'>>;
  entryGalleries: Resolver<Array<Maybe<ResolversTypes['EntryGallery']>>, ParentType, ContextType, Partial<QueryEntryGalleriesArgs>>;
  entryGallery: Resolver<Maybe<ResolversTypes['EntryGallery']>, ParentType, ContextType, Partial<QueryEntryGalleryArgs>>;
  entryGroup: Resolver<Maybe<ResolversTypes['EntryGroup']>, ParentType, ContextType, Partial<QueryEntryGroupArgs>>;
  entryGroups: Resolver<Array<Maybe<ResolversTypes['EntryGroup']>>, ParentType, ContextType, Partial<QueryEntryGroupsArgs>>;
  entryRevision: Resolver<Maybe<ResolversTypes['EntryRevision']>, ParentType, ContextType, Partial<QueryEntryRevisionArgs>>;
  entrySidebar: Resolver<Maybe<ResolversTypes['EntrySidebar']>, ParentType, ContextType, Partial<QueryEntrySidebarArgs>>;
  entrySidebars: Resolver<Array<Maybe<ResolversTypes['EntrySidebar']>>, ParentType, ContextType, Partial<QueryEntrySidebarsArgs>>;
  entryVideo: Resolver<Maybe<ResolversTypes['EntryVideo']>, ParentType, ContextType, Partial<QueryEntryVideoArgs>>;
  entryVideos: Resolver<Array<Maybe<ResolversTypes['EntryVideo']>>, ParentType, ContextType, Partial<QueryEntryVideosArgs>>;
  errorTypes: Resolver<Array<ResolversTypes['Error']>, ParentType, ContextType>;
  feed: Resolver<Maybe<ResolversTypes['Feed']>, ParentType, ContextType, RequireFields<QueryFeedArgs, 'id'>>;
  heartbeat: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hermanoTypes: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  hubPage: Resolver<Maybe<ResolversTypes['HubPage']>, ParentType, ContextType, Partial<QueryHubPageArgs>>;
  hubPages: Resolver<Array<Maybe<ResolversTypes['HubPage']>>, ParentType, ContextType, Partial<QueryHubPagesArgs>>;
  linkSet: Resolver<Maybe<ResolversTypes['LinkSet']>, ParentType, ContextType, Partial<QueryLinkSetArgs>>;
  linkSets: Resolver<Array<Maybe<ResolversTypes['LinkSet']>>, ParentType, ContextType, Partial<QueryLinkSetsArgs>>;
  liveCoverageEvent: Resolver<Maybe<ResolversTypes['LiveCoverageEvent']>, ParentType, ContextType, RequireFields<QueryLiveCoverageEventArgs, 'id'>>;
  liveCoverageEvents: Resolver<Array<Maybe<ResolversTypes['LiveCoverageEvent']>>, ParentType, ContextType, RequireFields<QueryLiveCoverageEventsArgs, 'ids'>>;
  locale: Resolver<Maybe<ResolversTypes['Locale']>, ParentType, ContextType, RequireFields<QueryLocaleArgs, 'id'>>;
  locales: Resolver<Array<Maybe<ResolversTypes['Locale']>>, ParentType, ContextType, RequireFields<QueryLocalesArgs, 'ids'>>;
  matchLink: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryMatchLinkArgs, 'link' | 'locale' | 'networkId' | 'rewrite'>>;
  matchLinks: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType, RequireFields<QueryMatchLinksArgs, 'links' | 'locale' | 'networkId' | 'rewrite'>>;
  migratedVideoProject: Resolver<Maybe<ResolversTypes['VideoProject']>, ParentType, ContextType, RequireFields<QueryMigratedVideoProjectArgs, 'migrationUuid' | 'providerId'>>;
  mmaEvent: Resolver<Maybe<ResolversTypes['MmaEvent']>, ParentType, ContextType, RequireFields<QueryMmaEventArgs, 'id'>>;
  mmaEvents: Resolver<Array<Maybe<ResolversTypes['MmaEvent']>>, ParentType, ContextType, RequireFields<QueryMmaEventsArgs, 'ids'>>;
  mmaFight: Resolver<Maybe<ResolversTypes['MmaFight']>, ParentType, ContextType, RequireFields<QueryMmaFightArgs, 'id'>>;
  mmaFighter: Resolver<Maybe<ResolversTypes['MmaFighter']>, ParentType, ContextType, RequireFields<QueryMmaFighterArgs, 'id'>>;
  mmaFighters: Resolver<Array<Maybe<ResolversTypes['MmaFighter']>>, ParentType, ContextType, RequireFields<QueryMmaFightersArgs, 'ids'>>;
  mmaFights: Resolver<Array<Maybe<ResolversTypes['MmaFight']>>, ParentType, ContextType, RequireFields<QueryMmaFightsArgs, 'ids'>>;
  mmaPromotion: Resolver<Maybe<ResolversTypes['MmaPromotion']>, ParentType, ContextType, RequireFields<QueryMmaPromotionArgs, 'id'>>;
  mmaPromotions: Resolver<Array<Maybe<ResolversTypes['MmaPromotion']>>, ParentType, ContextType, RequireFields<QueryMmaPromotionsArgs, 'ids'>>;
  mmaWeightClass: Resolver<Maybe<ResolversTypes['MmaWeightClass']>, ParentType, ContextType, RequireFields<QueryMmaWeightClassArgs, 'id'>>;
  mmaWeightClasses: Resolver<Array<Maybe<ResolversTypes['MmaWeightClass']>>, ParentType, ContextType, RequireFields<QueryMmaWeightClassesArgs, 'ids'>>;
  neighborhood: Resolver<Maybe<ResolversTypes['Neighborhood']>, ParentType, ContextType, RequireFields<QueryNeighborhoodArgs, 'id'>>;
  neighborhoods: Resolver<Array<Maybe<ResolversTypes['Neighborhood']>>, ParentType, ContextType, RequireFields<QueryNeighborhoodsArgs, 'ids'>>;
  network: Resolver<Maybe<ResolversTypes['Network']>, ParentType, ContextType, Partial<QueryNetworkArgs>>;
  networks: Resolver<Array<Maybe<ResolversTypes['Network']>>, ParentType, ContextType, Partial<QueryNetworksArgs>>;
  opentableVenue: Resolver<Maybe<ResolversTypes['OpentableVenue']>, ParentType, ContextType, RequireFields<QueryOpentableVenueArgs, 'id'>>;
  opentableVenues: Resolver<Array<Maybe<ResolversTypes['OpentableVenue']>>, ParentType, ContextType, RequireFields<QueryOpentableVenuesArgs, 'ids'>>;
  organization: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, Partial<QueryOrganizationArgs>>;
  organizations: Resolver<Array<Maybe<ResolversTypes['Organization']>>, ParentType, ContextType, Partial<QueryOrganizationsArgs>>;
  place: Resolver<Maybe<ResolversTypes['Place']>, ParentType, ContextType, RequireFields<QueryPlaceArgs, 'id'>>;
  places: Resolver<Array<Maybe<ResolversTypes['Place']>>, ParentType, ContextType, RequireFields<QueryPlacesArgs, 'ids'>>;
  product: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  productBrand: Resolver<Maybe<ResolversTypes['ProductBrand']>, ParentType, ContextType, RequireFields<QueryProductBrandArgs, 'id'>>;
  productBrands: Resolver<Array<Maybe<ResolversTypes['ProductBrand']>>, ParentType, ContextType, RequireFields<QueryProductBrandsArgs, 'ids'>>;
  productCategories: Resolver<Array<Maybe<ResolversTypes['ProductCategory']>>, ParentType, ContextType, RequireFields<QueryProductCategoriesArgs, 'ids'>>;
  productCategory: Resolver<Maybe<ResolversTypes['ProductCategory']>, ParentType, ContextType, RequireFields<QueryProductCategoryArgs, 'id'>>;
  products: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType, RequireFields<QueryProductsArgs, 'ids'>>;
  projectSource: Resolver<Maybe<ResolversTypes['ProjectSource']>, ParentType, ContextType, RequireFields<QueryProjectSourceArgs, 'uuid'>>;
  redirect: Resolver<Maybe<ResolversTypes['Redirect']>, ParentType, ContextType, RequireFields<QueryRedirectArgs, 'id'>>;
  redirects: Resolver<Array<Maybe<ResolversTypes['Redirect']>>, ParentType, ContextType, RequireFields<QueryRedirectsArgs, 'ids'>>;
  registeredQueries: Resolver<Array<ResolversTypes['RegisteredQuery']>, ParentType, ContextType>;
  registeredQuery: Resolver<Maybe<ResolversTypes['RegisteredQuery']>, ParentType, ContextType, RequireFields<QueryRegisteredQueryArgs, 'slug'>>;
  searchAdvertisers: Resolver<Maybe<ResolversTypes['AdvertiserPage']>, ParentType, ContextType, Partial<QuerySearchAdvertisersArgs>>;
  searchAssets: Resolver<Maybe<ResolversTypes['AssetPage']>, ParentType, ContextType, RequireFields<QuerySearchAssetsArgs, 'query'>>;
  searchBuildings: Resolver<Maybe<ResolversTypes['BuildingPage']>, ParentType, ContextType, Partial<QuerySearchBuildingsArgs>>;
  searchCampaigns: Resolver<Maybe<ResolversTypes['CampaignPage']>, ParentType, ContextType, Partial<QuerySearchCampaignsArgs>>;
  searchCommunities: Resolver<ResolversTypes['CommunityPage'], ParentType, ContextType, Partial<QuerySearchCommunitiesArgs>>;
  searchEntryGroups: Resolver<ResolversTypes['EntryGroupPage'], ParentType, ContextType, Partial<QuerySearchEntryGroupsArgs>>;
  searchLiveCoverageEvents: Resolver<Maybe<ResolversTypes['LiveCoverageEventPage']>, ParentType, ContextType, Partial<QuerySearchLiveCoverageEventsArgs>>;
  searchLocales: Resolver<Maybe<ResolversTypes['LocalePage']>, ParentType, ContextType, Partial<QuerySearchLocalesArgs>>;
  searchMmaEvents: Resolver<Maybe<ResolversTypes['MmaEventPage']>, ParentType, ContextType, Partial<QuerySearchMmaEventsArgs>>;
  searchMmaFighters: Resolver<Maybe<ResolversTypes['MmaFighterPage']>, ParentType, ContextType, Partial<QuerySearchMmaFightersArgs>>;
  searchMmaFights: Resolver<Maybe<ResolversTypes['MmaFightPage']>, ParentType, ContextType, Partial<QuerySearchMmaFightsArgs>>;
  searchMmaPromotions: Resolver<Maybe<ResolversTypes['MmaPromotionPage']>, ParentType, ContextType, Partial<QuerySearchMmaPromotionsArgs>>;
  searchMmaWeightClasses: Resolver<Maybe<ResolversTypes['MmaWeightClassPage']>, ParentType, ContextType, Partial<QuerySearchMmaWeightClassesArgs>>;
  searchNeighborhoods: Resolver<Maybe<ResolversTypes['NeighborhoodPage']>, ParentType, ContextType, Partial<QuerySearchNeighborhoodsArgs>>;
  searchOpentableVenues: Resolver<Maybe<ResolversTypes['OpentableVenuePage']>, ParentType, ContextType, Partial<QuerySearchOpentableVenuesArgs>>;
  searchPlaces: Resolver<Maybe<ResolversTypes['PlacePage']>, ParentType, ContextType, Partial<QuerySearchPlacesArgs>>;
  searchProductBrands: Resolver<Maybe<ResolversTypes['ProductBrandPage']>, ParentType, ContextType, Partial<QuerySearchProductBrandsArgs>>;
  searchProductCategories: Resolver<Maybe<ResolversTypes['ProductCategoryPage']>, ParentType, ContextType, Partial<QuerySearchProductCategoriesArgs>>;
  searchProducts: Resolver<Maybe<ResolversTypes['ProductPage']>, ParentType, ContextType, Partial<QuerySearchProductsArgs>>;
  searchRedirects: Resolver<ResolversTypes['RedirectPage'], ParentType, ContextType, Partial<QuerySearchRedirectsArgs>>;
  searchShoppingDeals: Resolver<Maybe<ResolversTypes['ShoppingDealPage']>, ParentType, ContextType, Partial<QuerySearchShoppingDealsArgs>>;
  searchSportConferences: Resolver<Maybe<ResolversTypes['SportConferencePage']>, ParentType, ContextType, Partial<QuerySearchSportConferencesArgs>>;
  searchSportDivisions: Resolver<Maybe<ResolversTypes['SportDivisionPage']>, ParentType, ContextType, Partial<QuerySearchSportDivisionsArgs>>;
  searchSportEvents: Resolver<Maybe<ResolversTypes['SportEventPage']>, ParentType, ContextType, Partial<QuerySearchSportEventsArgs>>;
  searchSportLeagues: Resolver<Maybe<ResolversTypes['SportLeaguePage']>, ParentType, ContextType, Partial<QuerySearchSportLeaguesArgs>>;
  searchSportPlayers: Resolver<Maybe<ResolversTypes['SportPlayerPage']>, ParentType, ContextType, Partial<QuerySearchSportPlayersArgs>>;
  searchSportTeams: Resolver<Maybe<ResolversTypes['SportTeamPage']>, ParentType, ContextType, Partial<QuerySearchSportTeamsArgs>>;
  searchSportTickets: Resolver<Maybe<ResolversTypes['SportTicketPage']>, ParentType, ContextType, Partial<QuerySearchSportTicketsArgs>>;
  searchSports: Resolver<Maybe<ResolversTypes['SportPage']>, ParentType, ContextType, Partial<QuerySearchSportsArgs>>;
  searchTicketEvents: Resolver<Maybe<ResolversTypes['TicketEventPage']>, ParentType, ContextType, Partial<QuerySearchTicketEventsArgs>>;
  searchUsers: Resolver<ResolversTypes['UserPage'], ParentType, ContextType, Partial<QuerySearchUsersArgs>>;
  searchVenues: Resolver<Maybe<ResolversTypes['VenuePage']>, ParentType, ContextType, Partial<QuerySearchVenuesArgs>>;
  searchVideoGameFranchises: Resolver<Maybe<ResolversTypes['VideoGameFranchisePage']>, ParentType, ContextType, Partial<QuerySearchVideoGameFranchisesArgs>>;
  searchVideoGamePlatformGroups: Resolver<Maybe<ResolversTypes['VideoGamePlatformGroupPage']>, ParentType, ContextType, Partial<QuerySearchVideoGamePlatformGroupsArgs>>;
  searchVideoGamePlatforms: Resolver<Maybe<ResolversTypes['VideoGamePlatformPage']>, ParentType, ContextType, Partial<QuerySearchVideoGamePlatformsArgs>>;
  searchVideoGames: Resolver<Maybe<ResolversTypes['VideoGamePage']>, ParentType, ContextType, Partial<QuerySearchVideoGamesArgs>>;
  searchVideoProjects: Resolver<ResolversTypes['VideoProjectPage'], ParentType, ContextType, RequireFields<QuerySearchVideoProjectsArgs, 'query'>>;
  searchVideoTags: Resolver<Array<Maybe<ResolversTypes['VideoTag']>>, ParentType, ContextType, RequireFields<QuerySearchVideoTagsArgs, 'query'>>;
  shoppingDeal: Resolver<Maybe<ResolversTypes['ShoppingDeal']>, ParentType, ContextType, RequireFields<QueryShoppingDealArgs, 'id'>>;
  shoppingDeals: Resolver<Array<Maybe<ResolversTypes['ShoppingDeal']>>, ParentType, ContextType, RequireFields<QueryShoppingDealsArgs, 'ids'>>;
  sourceDownload: Resolver<Maybe<ResolversTypes['FileLocation']>, ParentType, ContextType, RequireFields<QuerySourceDownloadArgs, 'uuid'>>;
  sport: Resolver<Maybe<ResolversTypes['Sport']>, ParentType, ContextType, RequireFields<QuerySportArgs, 'id'>>;
  sportConference: Resolver<Maybe<ResolversTypes['SportConference']>, ParentType, ContextType, RequireFields<QuerySportConferenceArgs, 'id'>>;
  sportConferences: Resolver<Array<Maybe<ResolversTypes['SportConference']>>, ParentType, ContextType, RequireFields<QuerySportConferencesArgs, 'ids'>>;
  sportDivision: Resolver<Maybe<ResolversTypes['SportDivision']>, ParentType, ContextType, RequireFields<QuerySportDivisionArgs, 'id'>>;
  sportDivisions: Resolver<Array<Maybe<ResolversTypes['SportDivision']>>, ParentType, ContextType, RequireFields<QuerySportDivisionsArgs, 'ids'>>;
  sportEvent: Resolver<Maybe<ResolversTypes['SportEvent']>, ParentType, ContextType, RequireFields<QuerySportEventArgs, 'id'>>;
  sportEvents: Resolver<Array<Maybe<ResolversTypes['SportEvent']>>, ParentType, ContextType, RequireFields<QuerySportEventsArgs, 'ids'>>;
  sportLeague: Resolver<Maybe<ResolversTypes['SportLeague']>, ParentType, ContextType, RequireFields<QuerySportLeagueArgs, 'id'>>;
  sportLeagues: Resolver<Array<Maybe<ResolversTypes['SportLeague']>>, ParentType, ContextType, RequireFields<QuerySportLeaguesArgs, 'ids'>>;
  sportPlayer: Resolver<Maybe<ResolversTypes['SportPlayer']>, ParentType, ContextType, RequireFields<QuerySportPlayerArgs, 'id'>>;
  sportPlayers: Resolver<Array<Maybe<ResolversTypes['SportPlayer']>>, ParentType, ContextType, RequireFields<QuerySportPlayersArgs, 'ids'>>;
  sportTeam: Resolver<Maybe<ResolversTypes['SportTeam']>, ParentType, ContextType, RequireFields<QuerySportTeamArgs, 'id'>>;
  sportTeams: Resolver<Array<Maybe<ResolversTypes['SportTeam']>>, ParentType, ContextType, RequireFields<QuerySportTeamsArgs, 'ids'>>;
  sportTicket: Resolver<Maybe<ResolversTypes['SportTicket']>, ParentType, ContextType, RequireFields<QuerySportTicketArgs, 'id'>>;
  sportTickets: Resolver<Array<Maybe<ResolversTypes['SportTicket']>>, ParentType, ContextType, RequireFields<QuerySportTicketsArgs, 'ids'>>;
  sports: Resolver<Array<Maybe<ResolversTypes['Sport']>>, ParentType, ContextType, RequireFields<QuerySportsArgs, 'ids'>>;
  syndicationPartners: Resolver<Array<Maybe<ResolversTypes['SyndicationPartner']>>, ParentType, ContextType, Partial<QuerySyndicationPartnersArgs>>;
  ticketEvent: Resolver<Maybe<ResolversTypes['TicketEvent']>, ParentType, ContextType, RequireFields<QueryTicketEventArgs, 'id'>>;
  ticketEvents: Resolver<Array<Maybe<ResolversTypes['TicketEvent']>>, ParentType, ContextType, RequireFields<QueryTicketEventsArgs, 'ids'>>;
  user: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryUserArgs>>;
  users: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType, Partial<QueryUsersArgs>>;
  venue: Resolver<Maybe<ResolversTypes['Venue']>, ParentType, ContextType, RequireFields<QueryVenueArgs, 'id'>>;
  venues: Resolver<Array<Maybe<ResolversTypes['Venue']>>, ParentType, ContextType, RequireFields<QueryVenuesArgs, 'ids'>>;
  videoBrandConfig: Resolver<ResolversTypes['VideoBrandConfig'], ParentType, ContextType, Partial<QueryVideoBrandConfigArgs>>;
  videoCategories: Resolver<Array<Maybe<ResolversTypes['VideoCategory']>>, ParentType, ContextType, RequireFields<QueryVideoCategoriesArgs, 'providerId'>>;
  videoGame: Resolver<Maybe<ResolversTypes['VideoGame']>, ParentType, ContextType, RequireFields<QueryVideoGameArgs, 'id'>>;
  videoGameFranchise: Resolver<Maybe<ResolversTypes['VideoGameFranchise']>, ParentType, ContextType, RequireFields<QueryVideoGameFranchiseArgs, 'id'>>;
  videoGameFranchises: Resolver<Array<Maybe<ResolversTypes['VideoGameFranchise']>>, ParentType, ContextType, RequireFields<QueryVideoGameFranchisesArgs, 'ids'>>;
  videoGamePlatform: Resolver<Maybe<ResolversTypes['VideoGamePlatform']>, ParentType, ContextType, RequireFields<QueryVideoGamePlatformArgs, 'id'>>;
  videoGamePlatformGroup: Resolver<Maybe<ResolversTypes['VideoGamePlatformGroup']>, ParentType, ContextType, RequireFields<QueryVideoGamePlatformGroupArgs, 'id'>>;
  videoGamePlatformGroups: Resolver<Array<Maybe<ResolversTypes['VideoGamePlatformGroup']>>, ParentType, ContextType, RequireFields<QueryVideoGamePlatformGroupsArgs, 'ids'>>;
  videoGamePlatforms: Resolver<Array<Maybe<ResolversTypes['VideoGamePlatform']>>, ParentType, ContextType, RequireFields<QueryVideoGamePlatformsArgs, 'ids'>>;
  videoGames: Resolver<Array<Maybe<ResolversTypes['VideoGame']>>, ParentType, ContextType, RequireFields<QueryVideoGamesArgs, 'ids'>>;
  videoProject: Resolver<Maybe<ResolversTypes['VideoProject']>, ParentType, ContextType, Partial<QueryVideoProjectArgs>>;
  videoProjects: Resolver<Array<Maybe<ResolversTypes['VideoProject']>>, ParentType, ContextType, Partial<QueryVideoProjectsArgs>>;
  videoSeries: Resolver<Array<Maybe<ResolversTypes['VideoSeries']>>, ParentType, ContextType, Partial<QueryVideoSeriesArgs>>;
  videoTypes: Resolver<Array<Maybe<ResolversTypes['VideoType']>>, ParentType, ContextType, Partial<QueryVideoTypesArgs>>;
};

export type RedirectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Redirect'] = ResolversParentTypes['Redirect']> = {
  destination: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  host: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  path: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RedirectCreateResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RedirectCreateResult'] = ResolversParentTypes['RedirectCreateResult']> = {
  redirect: Resolver<ResolversTypes['Redirect'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RedirectDeleteResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RedirectDeleteResult'] = ResolversParentTypes['RedirectDeleteResult']> = {
  redirect: Resolver<ResolversTypes['Redirect'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RedirectImportResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RedirectImportResult'] = ResolversParentTypes['RedirectImportResult']> = {
  importQueued: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  recipientEmail: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RedirectPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['RedirectPage'] = ResolversParentTypes['RedirectPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perPage: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<Maybe<ResolversTypes['Redirect']>>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RedirectUpdateResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RedirectUpdateResult'] = ResolversParentTypes['RedirectUpdateResult']> = {
  redirect: Resolver<ResolversTypes['Redirect'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegisteredQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisteredQuery'] = ResolversParentTypes['RegisteredQuery']> = {
  query: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegisteredQueryCreateResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisteredQueryCreateResult'] = ResolversParentTypes['RegisteredQueryCreateResult']> = {
  registeredQuery: Resolver<ResolversTypes['RegisteredQuery'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegisteredQueryRemoveResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisteredQueryRemoveResult'] = ResolversParentTypes['RegisteredQueryRemoveResult']> = {
  success: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RichTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['RichText'] = ResolversParentTypes['RichText']> = {
  html: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ops: Resolver<Array<ResolversTypes['RichTextOp']>, ParentType, ContextType>;
  plaintext: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface RichTextOpScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RichTextOp'], any> {
  name: 'RichTextOp';
}

export type RoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Role'] = ResolversParentTypes['Role']> = {
  name: Resolver<ResolversTypes['RoleName'], ParentType, ContextType>;
  scopeId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  scopeType: Resolver<ResolversTypes['RoleScopeType'], ParentType, ContextType>;
  user: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShoppingDealResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShoppingDeal'] = ResolversParentTypes['ShoppingDeal']> = {
  address: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  draft: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  endsAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  featured: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hideFromAutotagger: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lat: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lng: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  locale: Resolver<Maybe<ResolversTypes['Locale']>, ParentType, ContextType>;
  localeId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startsAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  state: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  url: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShoppingDealPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShoppingDealPage'] = ResolversParentTypes['ShoppingDealPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['ShoppingDeal']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SocialLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['SocialLink'] = ResolversParentTypes['SocialLink']> = {
  label: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type: Resolver<ResolversTypes['SocialLinkType'], ParentType, ContextType>;
  url: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SportResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sport'] = ResolversParentTypes['Sport']> = {
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  leagues: Resolver<Array<ResolversTypes['SportLeague']>, ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ticketsUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SportConferenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['SportConference'] = ResolversParentTypes['SportConference']> = {
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  displayName: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  divisions: Resolver<Array<ResolversTypes['SportDivision']>, ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  league: Resolver<Maybe<ResolversTypes['SportLeague']>, ParentType, ContextType>;
  leagueId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  teams: Resolver<Array<ResolversTypes['SportTeam']>, ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SportConferencePageResolvers<ContextType = any, ParentType extends ResolversParentTypes['SportConferencePage'] = ResolversParentTypes['SportConferencePage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['SportConference']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SportDivisionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SportDivision'] = ResolversParentTypes['SportDivision']> = {
  conference: Resolver<Maybe<ResolversTypes['SportConference']>, ParentType, ContextType>;
  conferenceId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  displayName: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  teams: Resolver<Array<ResolversTypes['SportTeam']>, ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SportDivisionPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['SportDivisionPage'] = ResolversParentTypes['SportDivisionPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['SportDivision']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SportEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['SportEvent'] = ResolversParentTypes['SportEvent']> = {
  awayTeam: Resolver<ResolversTypes['SportTeam'], ParentType, ContextType>;
  awayTeamId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  awayTeamScore: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  boxScore: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  eventTime: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  homeTeam: Resolver<ResolversTypes['SportTeam'], ParentType, ContextType>;
  homeTeamId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  homeTeamScore: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  league: Resolver<ResolversTypes['SportLeague'], ParentType, ContextType>;
  leagueId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  leagueSlug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  period: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  season: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  seasonType: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sportsNetworkId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  statsllcId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stubhubEventId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stubhubEventTime: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  stubhubMinTicketPrice: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stubhubTicketsAvailable: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tbd: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  timeRemaining: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SportEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['SportEventPage'] = ResolversParentTypes['SportEventPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['SportEvent']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SportLeagueResolvers<ContextType = any, ParentType extends ResolversParentTypes['SportLeague'] = ResolversParentTypes['SportLeague']> = {
  abbreviation: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conferences: Resolver<Array<ResolversTypes['SportConference']>, ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  normalNumPeriods: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  searchEvents: Resolver<Maybe<ResolversTypes['SportEventPage']>, ParentType, ContextType, Partial<SportLeagueSearchEventsArgs>>;
  searchPlayers: Resolver<Maybe<ResolversTypes['SportPlayerPage']>, ParentType, ContextType, Partial<SportLeagueSearchPlayersArgs>>;
  searchTeams: Resolver<Maybe<ResolversTypes['SportTeamPage']>, ParentType, ContextType, Partial<SportLeagueSearchTeamsArgs>>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sport: Resolver<Maybe<ResolversTypes['Sport']>, ParentType, ContextType>;
  sportId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ticketsUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SportLeaguePageResolvers<ContextType = any, ParentType extends ResolversParentTypes['SportLeaguePage'] = ResolversParentTypes['SportLeaguePage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['SportLeague']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SportPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['SportPage'] = ResolversParentTypes['SportPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['Sport']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SportPlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['SportPlayer'] = ResolversParentTypes['SportPlayer']> = {
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  dateOfBirth: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  experience: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  jerseyNumber: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  league: Resolver<ResolversTypes['SportLeague'], ParentType, ContextType>;
  leagueId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  leagueSlug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  moreInfo: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  position: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secondaryTeamIds: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  secondaryTeamLabels: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  secondaryTeams: Resolver<Array<Maybe<ResolversTypes['SportTeam']>>, ParentType, ContextType>;
  slug: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sportsNetworkId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  statistics: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  statsllcId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  team: Resolver<ResolversTypes['SportTeam'], ParentType, ContextType>;
  teamId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  weight: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SportPlayerPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['SportPlayerPage'] = ResolversParentTypes['SportPlayerPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['SportPlayer']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SportTeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['SportTeam'] = ResolversParentTypes['SportTeam']> = {
  abbreviation: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conference: Resolver<Maybe<ResolversTypes['SportConference']>, ParentType, ContextType>;
  conferenceId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  currentRecord: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  division: Resolver<Maybe<ResolversTypes['SportDivision']>, ParentType, ContextType>;
  divisionId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  draft: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fullName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hideFromAutotagger: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  league: Resolver<Maybe<ResolversTypes['SportLeague']>, ParentType, ContextType>;
  leagueId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  leagueSlug: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  searchAwayEvents: Resolver<Maybe<ResolversTypes['SportEventPage']>, ParentType, ContextType, Partial<SportTeamSearchAwayEventsArgs>>;
  searchHomeEvents: Resolver<Maybe<ResolversTypes['SportEventPage']>, ParentType, ContextType, Partial<SportTeamSearchHomeEventsArgs>>;
  searchPlayers: Resolver<Maybe<ResolversTypes['SportPlayerPage']>, ParentType, ContextType, Partial<SportTeamSearchPlayersArgs>>;
  searchSecondaryPlayers: Resolver<Maybe<ResolversTypes['SportPlayerPage']>, ParentType, ContextType, Partial<SportTeamSearchSecondaryPlayersArgs>>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sport: Resolver<Maybe<ResolversTypes['Sport']>, ParentType, ContextType>;
  sportId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sportsNetworkId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statsllcId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stubhubPerformerId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ticketsUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SportTeamPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['SportTeamPage'] = ResolversParentTypes['SportTeamPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['SportTeam']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SportTicketResolvers<ContextType = any, ParentType extends ResolversParentTypes['SportTicket'] = ResolversParentTypes['SportTicket']> = {
  affiliateUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  awayTeam: Resolver<Maybe<ResolversTypes['SportTeam']>, ParentType, ContextType>;
  awayTeamId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  domain: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  league: Resolver<Maybe<ResolversTypes['SportLeague']>, ParentType, ContextType>;
  leagueId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  team: Resolver<Maybe<ResolversTypes['SportTeam']>, ParentType, ContextType>;
  teamId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ticketDate: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ticketmasterEventId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  url: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SportTicketPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['SportTicketPage'] = ResolversParentTypes['SportTicketPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['SportTicket']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SupportRequestResolvers<ContextType = any, ParentType extends ResolversParentTypes['SupportRequest'] = ResolversParentTypes['SupportRequest']> = {
  additionalAttributes: Resolver<Maybe<Array<ResolversTypes['SupportRequestAttribute']>>, ParentType, ContextType>;
  email: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  explanation: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summary: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SupportRequestAttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SupportRequestAttribute'] = ResolversParentTypes['SupportRequestAttribute']> = {
  key: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SupportRequestCreateResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SupportRequestCreateResult'] = ResolversParentTypes['SupportRequestCreateResult']> = {
  supportRequest: Resolver<ResolversTypes['SupportRequest'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SyndicationPartnerResolvers<ContextType = any, ParentType extends ResolversParentTypes['SyndicationPartner'] = ResolversParentTypes['SyndicationPartner']> = {
  createdAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  templateKey: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TicketEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['TicketEvent'] = ResolversParentTypes['TicketEvent']> = {
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  date: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  place: Resolver<Maybe<ResolversTypes['Place']>, ParentType, ContextType>;
  placeId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stubhubEventId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stubhubMinTicketPrice: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stubhubTicketAvailable: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timeZone: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TicketEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['TicketEventPage'] = ResolversParentTypes['TicketEventPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['TicketEvent']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeZoneScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TimeZone'], any> {
  name: 'TimeZone';
}

export type TimeseriesMetricResolvers<ContextType = any, ParentType extends ResolversParentTypes['TimeseriesMetric'] = ResolversParentTypes['TimeseriesMetric']> = {
  timestamp: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  activity: Resolver<Array<ResolversTypes['UserActivityLog']>, ParentType, ContextType, RequireFields<UserActivityArgs, 'communityId' | 'pageNumber' | 'perPage'>>;
  authorProfile: Resolver<Maybe<ResolversTypes['AuthorProfile']>, ParentType, ContextType, RequireFields<UserAuthorProfileArgs, 'communityId'>>;
  canAccessChorusVideo: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<UserCanAccessChorusVideoArgs, 'scopeId' | 'scopeType'>>;
  chorusVideoId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  communityMembership: Resolver<Maybe<ResolversTypes['CommunityMembership']>, ParentType, ContextType, RequireFields<UserCommunityMembershipArgs, 'communityId'>>;
  communityMemberships: Resolver<Array<ResolversTypes['CommunityMembership']>, ParentType, ContextType, Partial<UserCommunityMembershipsArgs>>;
  createdOn: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailOrLoginIdentityEmail: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailVerified: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  forumMemberships: Resolver<Array<ResolversTypes['ForumMembership']>, ParentType, ContextType, RequireFields<UserForumMembershipsArgs, 'communityId'>>;
  fullName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullOrUserName: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasApiAccess: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastLoginAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  memberProfile: Resolver<Maybe<ResolversTypes['MemberProfile']>, ParentType, ContextType, RequireFields<UserMemberProfileArgs, 'communityId'>>;
  membership: Resolver<Maybe<ResolversTypes['CommunityMembership']>, ParentType, ContextType, RequireFields<UserMembershipArgs, 'communityId'>>;
  memberships: Resolver<Array<ResolversTypes['CommunityMembership']>, ParentType, ContextType, Partial<UserMembershipsArgs>>;
  networkMembership: Resolver<Maybe<ResolversTypes['NetworkMembership']>, ParentType, ContextType, RequireFields<UserNetworkMembershipArgs, 'networkId'>>;
  networkMemberships: Resolver<Array<ResolversTypes['NetworkMembership']>, ParentType, ContextType>;
  networkRoles: Resolver<Array<ResolversTypes['NetworkRole']>, ParentType, ContextType>;
  organization: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>;
  roles: Resolver<Array<Maybe<ResolversTypes['Role']>>, ParentType, ContextType>;
  status: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  timeZone: Resolver<Maybe<ResolversTypes['TimeZone']>, ParentType, ContextType>;
  twitterUsername: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserActivityLogResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserActivityLog'] = ResolversParentTypes['UserActivityLog']> = {
  activityType: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contentBody: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentCreatedOn: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  contentEntryTitle: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentTitle: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserPage'] = ResolversParentTypes['UserPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perPage: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserProfile'] = ResolversParentTypes['UserProfile']> = {
  __resolveType: TypeResolveFn<'AuthorProfile' | 'MemberProfile', ParentType, ContextType>;
  bio: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  community: Resolver<ResolversTypes['Community'], ParentType, ContextType>;
  imageUrl: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  socialLinks: Resolver<Array<ResolversTypes['SocialLink']>, ParentType, ContextType>;
  title: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  user: Resolver<ResolversTypes['User'], ParentType, ContextType>;
};

export type VenueResolvers<ContextType = any, ParentType extends ResolversParentTypes['Venue'] = ResolversParentTypes['Venue']> = {
  address: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  closed: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  crossstreet: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  draft: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  foursquareId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  foursquareTipId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  googlePlaceId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hideFromAutotagger: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  imageUrls: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  lat: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lng: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  locale: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  localeId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  network: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  opentableId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  opentableVenue: Resolver<Maybe<ResolversTypes['OpentableVenue']>, ParentType, ContextType>;
  phone: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  place: Resolver<ResolversTypes['Place'], ParentType, ContextType>;
  placeId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  priceTier: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stubhubUpcomingEventCount: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stubhubVenueId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  twitter: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  url: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VenuePageResolvers<ContextType = any, ParentType extends ResolversParentTypes['VenuePage'] = ResolversParentTypes['VenuePage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['Venue']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoAccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoAccount'] = ResolversParentTypes['VideoAccount']> = {
  code: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoAssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoAsset'] = ResolversParentTypes['VideoAsset']> = {
  accountId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  channelName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cmsId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  duration: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  embedTag: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enableAds: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  enableRelatedVideos: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  feed: Resolver<Maybe<ResolversTypes['Feed']>, ParentType, ContextType>;
  feedExpirationDate: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  feedPublishDate: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  hidden: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  imageFileId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isPrimary: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isRefreshable: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  livestream: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  permalink: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  platformId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  previewStatus: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  publishedAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  refreshedAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  status: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  statusMessage: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  syndicationStatus: Resolver<Maybe<ResolversTypes['SyndicationStatus']>, ParentType, ContextType>;
  title: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type: Resolver<ResolversTypes['VideoAssetType'], ParentType, ContextType>;
  videoFileId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  videoProjectId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoBrandConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoBrandConfig'] = ResolversParentTypes['VideoBrandConfig']> = {
  customPlayerSkin: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  enablesAdvancedMetadata: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enablesAppleNews: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enablesCaptioning: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enablesCaptioningJobNumber: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enablesChorusPlayer: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enablesFacebook: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enablesGoogleAnalytics: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enablesHeadless: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enablesKnotch: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enablesRights: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enablesSimpleReach: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enablesSyndication: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enablesTranscoding: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enablesYouTube: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  manualTranscoding: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  namespace: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoBrightcoveInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoBrightcoveInfo'] = ResolversParentTypes['VideoBrightcoveInfo']> = {
  autoNoAdsUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  autoUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hlsNoAdsUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hlsUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mp4NoAdsUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mp4Url: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoCategory'] = ResolversParentTypes['VideoCategory']> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoCreditResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoCredit'] = ResolversParentTypes['VideoCredit']> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoGameResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoGame'] = ResolversParentTypes['VideoGame']> = {
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  developer: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  franchises: Resolver<Array<Maybe<ResolversTypes['VideoGameFranchise']>>, ParentType, ContextType>;
  hideFromAutotagger: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  imageUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  platforms: Resolver<Array<Maybe<ResolversTypes['VideoGamePlatform']>>, ParentType, ContextType>;
  publisher: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  releaseDate: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  releaseDisplayDate: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reviewDate: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  reviewScore: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoGameFranchiseResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoGameFranchise'] = ResolversParentTypes['VideoGameFranchise']> = {
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  searchGames: Resolver<Maybe<ResolversTypes['VideoGamePage']>, ParentType, ContextType, Partial<VideoGameFranchiseSearchGamesArgs>>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoGameFranchisePageResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoGameFranchisePage'] = ResolversParentTypes['VideoGameFranchisePage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['VideoGameFranchise']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoGamePageResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoGamePage'] = ResolversParentTypes['VideoGamePage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['VideoGame']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoGamePlatformResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoGamePlatform'] = ResolversParentTypes['VideoGamePlatform']> = {
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  platformGroup: Resolver<Maybe<ResolversTypes['VideoGamePlatformGroup']>, ParentType, ContextType>;
  platformGroupId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  searchGames: Resolver<Maybe<ResolversTypes['VideoGamePage']>, ParentType, ContextType, Partial<VideoGamePlatformSearchGamesArgs>>;
  shortName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoGamePlatformGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoGamePlatformGroup'] = ResolversParentTypes['VideoGamePlatformGroup']> = {
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  externalForeignKey: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  platforms: Resolver<Array<ResolversTypes['VideoGamePlatform']>, ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoGamePlatformGroupPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoGamePlatformGroupPage'] = ResolversParentTypes['VideoGamePlatformGroupPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['VideoGamePlatformGroup']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoGamePlatformPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoGamePlatformPage'] = ResolversParentTypes['VideoGamePlatformPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<ResolversTypes['VideoGamePlatform']>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoNetworkResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoNetwork'] = ResolversParentTypes['VideoNetwork']> = {
  brandConfig: Resolver<ResolversTypes['VideoBrandConfig'], ParentType, ContextType>;
  createdAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  domain: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providers: Resolver<Array<Maybe<ResolversTypes['VideoProvider']>>, ParentType, ContextType>;
  publisher: Resolver<ResolversTypes['VideoPublisher'], ParentType, ContextType>;
  syncedAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoProject'] = ResolversParentTypes['VideoProject']> = {
  airtableId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  brandConfig: Resolver<ResolversTypes['VideoBrandConfig'], ParentType, ContextType>;
  brightcoveInfo: Resolver<Maybe<ResolversTypes['VideoBrightcoveInfo']>, ParentType, ContextType>;
  category: Resolver<Maybe<ResolversTypes['VideoCategory']>, ParentType, ContextType>;
  categoryId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  chorusPlayerAssetId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  createdBy: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  credits: Resolver<Maybe<Array<Maybe<ResolversTypes['VideoCredit']>>>, ParentType, ContextType>;
  description: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enableSyndication: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  episodeNumber: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isMetadataComplete: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  jobCode: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keyname: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  knotchUnitId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manualFeeds: Resolver<Maybe<Array<Maybe<ResolversTypes['Feed']>>>, ParentType, ContextType>;
  migrationFeedGuid: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  migrationUuid: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  network: Resolver<ResolversTypes['VideoNetwork'], ParentType, ContextType>;
  networkId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  notes: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  operativeLineItem: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  operativeOrder: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parentalRating: Resolver<ResolversTypes['VideoParentalRating'], ParentType, ContextType>;
  provider: Resolver<ResolversTypes['VideoProvider'], ParentType, ContextType>;
  providerId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  publishedAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publisher: Resolver<ResolversTypes['VideoPublisher'], ParentType, ContextType>;
  publisherId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  revenueTypeId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rights: Resolver<Maybe<ResolversTypes['VideoProjectRights']>, ParentType, ContextType>;
  seasonNumber: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sequence: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  series: Resolver<Maybe<ResolversTypes['VideoSeries']>, ParentType, ContextType>;
  seriesId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  simplereachPublisherId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnailUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedBy: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uuid: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  videoAccounts: Resolver<Maybe<Array<Maybe<ResolversTypes['VideoAccount']>>>, ParentType, ContextType>;
  videoAssets: Resolver<Maybe<Array<Maybe<ResolversTypes['VideoAsset']>>>, ParentType, ContextType>;
  videoProjectFiles: Resolver<Maybe<Array<Maybe<ResolversTypes['VideoProjectFile']>>>, ParentType, ContextType>;
  videoTags: Resolver<Maybe<Array<Maybe<ResolversTypes['VideoTag']>>>, ParentType, ContextType>;
  videoType: Resolver<ResolversTypes['VideoType'], ParentType, ContextType>;
  videoTypeId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoProjectFileResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoProjectFile'] = ResolversParentTypes['VideoProjectFile']> = {
  aspectRatio: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  captioningJob: Resolver<Maybe<ResolversTypes['VideoProjectFileJob']>, ParentType, ContextType>;
  children: Resolver<Maybe<Array<Maybe<ResolversTypes['VideoProjectFile']>>>, ParentType, ContextType>;
  contentType: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  createdBy: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  fileName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isTranscoded: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  md5: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent: Resolver<Maybe<ResolversTypes['VideoProjectFile']>, ParentType, ContextType>;
  parentId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  publicUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  siblings: Resolver<Maybe<Array<Maybe<ResolversTypes['VideoProjectFile']>>>, ParentType, ContextType>;
  size: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  source: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statusMessage: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnailUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transcodingJob: Resolver<Maybe<ResolversTypes['VideoProjectFileJob']>, ParentType, ContextType>;
  type: Resolver<ResolversTypes['VideoProjectFileType'], ParentType, ContextType>;
  updatedAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedBy: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  videoProjectId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoProjectFileJobResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoProjectFileJob'] = ResolversParentTypes['VideoProjectFileJob']> = {
  accountId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  allowRetry: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  orderNumber: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  remoteId: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  statusMessage: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoProjectPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoProjectPage'] = ResolversParentTypes['VideoProjectPage']> = {
  pageNumber: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results: Resolver<Array<Maybe<ResolversTypes['VideoProject']>>, ParentType, ContextType>;
  totalCount: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoProjectRightsResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoProjectRights'] = ResolversParentTypes['VideoProjectRights']> = {
  broadDist: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  cannotSyndicate: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  complexTakedown: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createdAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  cueSheetUrl: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ownedOperated: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  selfTakedown: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sensitive: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sensitiveDetails: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  videoProjectId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  videoProjectThumbnail: Resolver<Maybe<ResolversTypes['VideoProjectFile']>, ParentType, ContextType>;
  videoProjectVideoFile: Resolver<Maybe<ResolversTypes['VideoProjectFile']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoProviderResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoProvider'] = ResolversParentTypes['VideoProvider']> = {
  accounts: Resolver<Array<Maybe<ResolversTypes['VideoAccount']>>, ParentType, ContextType>;
  brandConfig: Resolver<ResolversTypes['VideoBrandConfig'], ParentType, ContextType>;
  chorusCommunityId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  code: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  network: Resolver<ResolversTypes['VideoNetwork'], ParentType, ContextType>;
  publisher: Resolver<ResolversTypes['VideoPublisher'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoPublisherResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoPublisher'] = ResolversParentTypes['VideoPublisher']> = {
  brandConfig: Resolver<ResolversTypes['VideoBrandConfig'], ParentType, ContextType>;
  createdAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  networks: Resolver<Array<Maybe<ResolversTypes['VideoNetwork']>>, ParentType, ContextType>;
  updatedAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoSeriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoSeries'] = ResolversParentTypes['VideoSeries']> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isActive: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoTagResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoTag'] = ResolversParentTypes['VideoTag']> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  publisherId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoType'] = ResolversParentTypes['VideoType']> = {
  code: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nextInSequence: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _EntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Entity'] = ResolversParentTypes['_Entity']> = {
  __resolveType: TypeResolveFn<'AutoTaggingScope' | 'Community' | 'Entry' | 'EntryDraft', ParentType, ContextType>;
};

export interface _EntityRepresentationScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['_EntityRepresentation'], any> {
  name: '_EntityRepresentation';
}

export type Resolvers<ContextType = any> = {
  Advertiser: AdvertiserResolvers<ContextType>;
  AdvertiserPage: AdvertiserPageResolvers<ContextType>;
  AnalyticsMetric: AnalyticsMetricResolvers<ContextType>;
  AnalyticsRef: AnalyticsRefResolvers<ContextType>;
  AnalyticsResource: AnalyticsResourceResolvers<ContextType>;
  AnalyticsTag: AnalyticsTagResolvers<ContextType>;
  AnthemStory: AnthemStoryResolvers<ContextType>;
  Any: GraphQLScalarType;
  Asset: AssetResolvers<ContextType>;
  AssetCreateResult: AssetCreateResultResolvers<ContextType>;
  AssetIPTCMetadata: AssetIptcMetadataResolvers<ContextType>;
  AssetPage: AssetPageResolvers<ContextType>;
  AssetUpdateResult: AssetUpdateResultResolvers<ContextType>;
  AssetUpsertByExternalIdResult: AssetUpsertByExternalIdResultResolvers<ContextType>;
  AuthorProfile: AuthorProfileResolvers<ContextType>;
  AutoTaggingScope: AutoTaggingScopeResolvers<ContextType>;
  BasicImage: BasicImageResolvers<ContextType>;
  BigInt: GraphQLScalarType;
  BucketedDeltaMetric: BucketedDeltaMetricResolvers<ContextType>;
  Build: BuildResolvers<ContextType>;
  BuildPage: BuildPageResolvers<ContextType>;
  Building: BuildingResolvers<ContextType>;
  BuildingPage: BuildingPageResolvers<ContextType>;
  Campaign: CampaignResolvers<ContextType>;
  CampaignPage: CampaignPageResolvers<ContextType>;
  CellData: CellDataResolvers<ContextType>;
  Community: CommunityResolvers<ContextType>;
  CommunityMembership: CommunityMembershipResolvers<ContextType>;
  CommunityPage: CommunityPageResolvers<ContextType>;
  Date: GraphQLScalarType;
  DateTime: GraphQLScalarType;
  Entity: EntityResolvers<ContextType>;
  Entry: EntryResolvers<ContextType>;
  EntryBody: EntryBodyResolvers<ContextType>;
  EntryBodyActionbox: EntryBodyActionboxResolvers<ContextType>;
  EntryBodyBlockquote: EntryBodyBlockquoteResolvers<ContextType>;
  EntryBodyComponent: EntryBodyComponentResolvers<ContextType>;
  EntryBodyComponentPlacement: EntryBodyComponentPlacementResolvers<ContextType>;
  EntryBodyEmbed: EntryBodyEmbedResolvers<ContextType>;
  EntryBodyFormat: EntryBodyFormatResolvers<ContextType>;
  EntryBodyGallery: EntryBodyGalleryResolvers<ContextType>;
  EntryBodyHTML: EntryBodyHtmlResolvers<ContextType>;
  EntryBodyHeading: EntryBodyHeadingResolvers<ContextType>;
  EntryBodyHorizontalRule: EntryBodyHorizontalRuleResolvers<ContextType>;
  EntryBodyImage: EntryBodyImageResolvers<ContextType>;
  EntryBodyImageComparison: EntryBodyImageComparisonResolvers<ContextType>;
  EntryBodyImageGroup: EntryBodyImageGroupResolvers<ContextType>;
  EntryBodyJSON: EntryBodyJsonResolvers<ContextType>;
  EntryBodyList: EntryBodyListResolvers<ContextType>;
  EntryBodyListItem: EntryBodyListItemResolvers<ContextType>;
  EntryBodyNewsletter: EntryBodyNewsletterResolvers<ContextType>;
  EntryBodyParagraph: EntryBodyParagraphResolvers<ContextType>;
  EntryBodyPoll: EntryBodyPollResolvers<ContextType>;
  EntryBodyProduct: EntryBodyProductResolvers<ContextType>;
  EntryBodyPullquote: EntryBodyPullquoteResolvers<ContextType>;
  EntryBodyPymEmbed: EntryBodyPymEmbedResolvers<ContextType>;
  EntryBodyRatingcard: EntryBodyRatingcardResolvers<ContextType>;
  EntryBodyRelatedList: EntryBodyRelatedListResolvers<ContextType>;
  EntryBodyRelatedListItem: EntryBodyRelatedListItemResolvers<ContextType>;
  EntryBodyScorecard: EntryBodyScorecardResolvers<ContextType>;
  EntryBodySecondLevelComponent: EntryBodySecondLevelComponentResolvers<ContextType>;
  EntryBodySidebar: EntryBodySidebarResolvers<ContextType>;
  EntryBodyTable: EntryBodyTableResolvers<ContextType>;
  EntryBodyVideo: EntryBodyVideoResolvers<ContextType>;
  EntryConnection: EntryConnectionResolvers<ContextType>;
  EntryCreateResult: EntryCreateResultResolvers<ContextType>;
  EntryCustomPage: EntryCustomPageResolvers<ContextType>;
  EntryCustomPageBody: EntryCustomPageBodyResolvers<ContextType>;
  EntryCustomPageComponent: EntryCustomPageComponentResolvers<ContextType>;
  EntryCustomPageEmbed: EntryCustomPageEmbedResolvers<ContextType>;
  EntryCustomPageImage: EntryCustomPageImageResolvers<ContextType>;
  EntryCustomPageVideo: EntryCustomPageVideoResolvers<ContextType>;
  EntryDraft: EntryDraftResolvers<ContextType>;
  EntryDraftCreateResult: EntryDraftCreateResultResolvers<ContextType>;
  EntryDraftPublishResult: EntryDraftPublishResultResolvers<ContextType>;
  EntryDraftUpdateResult: EntryDraftUpdateResultResolvers<ContextType>;
  EntryDraftUpsertByExternalIdResult: EntryDraftUpsertByExternalIdResultResolvers<ContextType>;
  EntryEdge: EntryEdgeResolvers<ContextType>;
  EntryEmbed: EntryEmbedResolvers<ContextType>;
  EntryEmbedSource: EntryEmbedSourceResolvers<ContextType>;
  EntryExternalLink: EntryExternalLinkResolvers<ContextType>;
  EntryFrontend: EntryFrontendResolvers<ContextType>;
  EntryGallery: EntryGalleryResolvers<ContextType>;
  EntryGroup: EntryGroupResolvers<ContextType>;
  EntryGroupImage: EntryGroupImageResolvers<ContextType>;
  EntryGroupPage: EntryGroupPageResolvers<ContextType>;
  EntryGroupRailComponent: EntryGroupRailComponentResolvers<ContextType>;
  EntryGroupRailGroupWithImages: EntryGroupRailGroupWithImagesResolvers<ContextType>;
  EntryGroupRailGroupWithText: EntryGroupRailGroupWithTextResolvers<ContextType>;
  EntryGroupRailNewsletter: EntryGroupRailNewsletterResolvers<ContextType>;
  EntryImage: EntryImageResolvers<ContextType>;
  EntryImageComparison: EntryImageComparisonResolvers<ContextType>;
  EntryImageCrop: EntryImageCropResolvers<ContextType>;
  EntryImageFocus: EntryImageFocusResolvers<ContextType>;
  EntryLeadArt: EntryLeadArtResolvers<ContextType>;
  EntryLeadComponent: EntryLeadComponentResolvers<ContextType>;
  EntryLeadEmbed: EntryLeadEmbedResolvers<ContextType>;
  EntryLeadGallery: EntryLeadGalleryResolvers<ContextType>;
  EntryLeadHTML: EntryLeadHtmlResolvers<ContextType>;
  EntryLeadImage: EntryLeadImageResolvers<ContextType>;
  EntryLeadVideo: EntryLeadVideoResolvers<ContextType>;
  EntryPackageCover: EntryPackageCoverResolvers<ContextType>;
  EntryPackageCoverEntry: EntryPackageCoverEntryResolvers<ContextType>;
  EntryPackageCoverItem: EntryPackageCoverItemResolvers<ContextType>;
  EntryPackageCoverPullquote: EntryPackageCoverPullquoteResolvers<ContextType>;
  EntryPackageCoverVideo: EntryPackageCoverVideoResolvers<ContextType>;
  EntryPackageEntry: EntryPackageEntryResolvers<ContextType>;
  EntryPackageToc: EntryPackageTocResolvers<ContextType>;
  EntryPackageTocSection: EntryPackageTocSectionResolvers<ContextType>;
  EntryPage: EntryPageResolvers<ContextType>;
  EntryPoll: EntryPollResolvers<ContextType>;
  EntryPollOption: EntryPollOptionResolvers<ContextType>;
  EntryProduct: EntryProductResolvers<ContextType>;
  EntryProductRetailer: EntryProductRetailerResolvers<ContextType>;
  EntryQuickAttachment: EntryQuickAttachmentResolvers<ContextType>;
  EntryRailComponent: EntryRailComponentResolvers<ContextType>;
  EntryRailGroupWithImages: EntryRailGroupWithImagesResolvers<ContextType>;
  EntryRailGroupWithText: EntryRailGroupWithTextResolvers<ContextType>;
  EntryRailNewsletter: EntryRailNewsletterResolvers<ContextType>;
  EntryRelatedEntry: EntryRelatedEntryResolvers<ContextType>;
  EntryRevision: EntryRevisionResolvers<ContextType>;
  EntryScorecard: EntryScorecardResolvers<ContextType>;
  EntrySidebar: EntrySidebarResolvers<ContextType>;
  EntrySidebarCreateResult: EntrySidebarCreateResultResolvers<ContextType>;
  EntrySidebarUpdateResult: EntrySidebarUpdateResultResolvers<ContextType>;
  EntryStream: EntryStreamResolvers<ContextType>;
  EntryTable: EntryTableResolvers<ContextType>;
  EntryTableSort: EntryTableSortResolvers<ContextType>;
  EntryTweet: EntryTweetResolvers<ContextType>;
  EntryUpdateResult: EntryUpdateResultResolvers<ContextType>;
  EntryUpsertByExternalIdResult: EntryUpsertByExternalIdResultResolvers<ContextType>;
  EntryVideo: EntryVideoResolvers<ContextType>;
  EntryVideoImage: EntryVideoImageResolvers<ContextType>;
  EntryVideoPlayer: EntryVideoPlayerResolvers<ContextType>;
  EventResult: EventResultResolvers<ContextType>;
  Feed: FeedResolvers<ContextType>;
  FileLocation: FileLocationResolvers<ContextType>;
  Forum: ForumResolvers<ContextType>;
  ForumMembership: ForumMembershipResolvers<ContextType>;
  GoogleAmpLogo: GoogleAmpLogoResolvers<ContextType>;
  HubPage: HubPageResolvers<ContextType>;
  HubPageBreakingNewsBanner: HubPageBreakingNewsBannerResolvers<ContextType>;
  HubPagePage: HubPagePageResolvers<ContextType>;
  HubPagePlaceable: HubPagePlaceableResolvers<ContextType>;
  HubPagePlacement: HubPagePlacementResolvers<ContextType>;
  JSON: GraphQLScalarType;
  LegacySlug: LegacySlugResolvers<ContextType>;
  LinkSet: LinkSetResolvers<ContextType>;
  LinkSetLink: LinkSetLinkResolvers<ContextType>;
  LinkSetPage: LinkSetPageResolvers<ContextType>;
  LiveCoverageEvent: LiveCoverageEventResolvers<ContextType>;
  LiveCoverageEventPage: LiveCoverageEventPageResolvers<ContextType>;
  Locale: LocaleResolvers<ContextType>;
  LocalePage: LocalePageResolvers<ContextType>;
  MapCard: MapCardResolvers<ContextType>;
  MemberProfile: MemberProfileResolvers<ContextType>;
  MmaEvent: MmaEventResolvers<ContextType>;
  MmaEventPage: MmaEventPageResolvers<ContextType>;
  MmaFight: MmaFightResolvers<ContextType>;
  MmaFightPage: MmaFightPageResolvers<ContextType>;
  MmaFighter: MmaFighterResolvers<ContextType>;
  MmaFighterPage: MmaFighterPageResolvers<ContextType>;
  MmaPromotion: MmaPromotionResolvers<ContextType>;
  MmaPromotionPage: MmaPromotionPageResolvers<ContextType>;
  MmaWeightClass: MmaWeightClassResolvers<ContextType>;
  MmaWeightClassPage: MmaWeightClassPageResolvers<ContextType>;
  Mutation: MutationResolvers<ContextType>;
  Neighborhood: NeighborhoodResolvers<ContextType>;
  NeighborhoodPage: NeighborhoodPageResolvers<ContextType>;
  Network: NetworkResolvers<ContextType>;
  NetworkMembership: NetworkMembershipResolvers<ContextType>;
  Newsletter: NewsletterResolvers<ContextType>;
  OpentableVenue: OpentableVenueResolvers<ContextType>;
  OpentableVenuePage: OpentableVenuePageResolvers<ContextType>;
  Organization: OrganizationResolvers<ContextType>;
  PageInfo: PageInfoResolvers<ContextType>;
  Place: PlaceResolvers<ContextType>;
  PlaceDetail: PlaceDetailResolvers<ContextType>;
  PlacePage: PlacePageResolvers<ContextType>;
  PointMetricFacebook: PointMetricFacebookResolvers<ContextType>;
  PointMetricReddit: PointMetricRedditResolvers<ContextType>;
  PointMetricTwitter: PointMetricTwitterResolvers<ContextType>;
  Product: ProductResolvers<ContextType>;
  ProductBrand: ProductBrandResolvers<ContextType>;
  ProductBrandPage: ProductBrandPageResolvers<ContextType>;
  ProductCategory: ProductCategoryResolvers<ContextType>;
  ProductCategoryPage: ProductCategoryPageResolvers<ContextType>;
  ProductPage: ProductPageResolvers<ContextType>;
  ProductRetailer: ProductRetailerResolvers<ContextType>;
  ProjectSource: ProjectSourceResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  Redirect: RedirectResolvers<ContextType>;
  RedirectCreateResult: RedirectCreateResultResolvers<ContextType>;
  RedirectDeleteResult: RedirectDeleteResultResolvers<ContextType>;
  RedirectImportResult: RedirectImportResultResolvers<ContextType>;
  RedirectPage: RedirectPageResolvers<ContextType>;
  RedirectUpdateResult: RedirectUpdateResultResolvers<ContextType>;
  RegisteredQuery: RegisteredQueryResolvers<ContextType>;
  RegisteredQueryCreateResult: RegisteredQueryCreateResultResolvers<ContextType>;
  RegisteredQueryRemoveResult: RegisteredQueryRemoveResultResolvers<ContextType>;
  RichText: RichTextResolvers<ContextType>;
  RichTextOp: GraphQLScalarType;
  Role: RoleResolvers<ContextType>;
  ShoppingDeal: ShoppingDealResolvers<ContextType>;
  ShoppingDealPage: ShoppingDealPageResolvers<ContextType>;
  SocialLink: SocialLinkResolvers<ContextType>;
  Sport: SportResolvers<ContextType>;
  SportConference: SportConferenceResolvers<ContextType>;
  SportConferencePage: SportConferencePageResolvers<ContextType>;
  SportDivision: SportDivisionResolvers<ContextType>;
  SportDivisionPage: SportDivisionPageResolvers<ContextType>;
  SportEvent: SportEventResolvers<ContextType>;
  SportEventPage: SportEventPageResolvers<ContextType>;
  SportLeague: SportLeagueResolvers<ContextType>;
  SportLeaguePage: SportLeaguePageResolvers<ContextType>;
  SportPage: SportPageResolvers<ContextType>;
  SportPlayer: SportPlayerResolvers<ContextType>;
  SportPlayerPage: SportPlayerPageResolvers<ContextType>;
  SportTeam: SportTeamResolvers<ContextType>;
  SportTeamPage: SportTeamPageResolvers<ContextType>;
  SportTicket: SportTicketResolvers<ContextType>;
  SportTicketPage: SportTicketPageResolvers<ContextType>;
  SupportRequest: SupportRequestResolvers<ContextType>;
  SupportRequestAttribute: SupportRequestAttributeResolvers<ContextType>;
  SupportRequestCreateResult: SupportRequestCreateResultResolvers<ContextType>;
  SyndicationPartner: SyndicationPartnerResolvers<ContextType>;
  TicketEvent: TicketEventResolvers<ContextType>;
  TicketEventPage: TicketEventPageResolvers<ContextType>;
  TimeZone: GraphQLScalarType;
  TimeseriesMetric: TimeseriesMetricResolvers<ContextType>;
  URL: GraphQLScalarType;
  User: UserResolvers<ContextType>;
  UserActivityLog: UserActivityLogResolvers<ContextType>;
  UserPage: UserPageResolvers<ContextType>;
  UserProfile: UserProfileResolvers<ContextType>;
  Venue: VenueResolvers<ContextType>;
  VenuePage: VenuePageResolvers<ContextType>;
  VideoAccount: VideoAccountResolvers<ContextType>;
  VideoAsset: VideoAssetResolvers<ContextType>;
  VideoBrandConfig: VideoBrandConfigResolvers<ContextType>;
  VideoBrightcoveInfo: VideoBrightcoveInfoResolvers<ContextType>;
  VideoCategory: VideoCategoryResolvers<ContextType>;
  VideoCredit: VideoCreditResolvers<ContextType>;
  VideoGame: VideoGameResolvers<ContextType>;
  VideoGameFranchise: VideoGameFranchiseResolvers<ContextType>;
  VideoGameFranchisePage: VideoGameFranchisePageResolvers<ContextType>;
  VideoGamePage: VideoGamePageResolvers<ContextType>;
  VideoGamePlatform: VideoGamePlatformResolvers<ContextType>;
  VideoGamePlatformGroup: VideoGamePlatformGroupResolvers<ContextType>;
  VideoGamePlatformGroupPage: VideoGamePlatformGroupPageResolvers<ContextType>;
  VideoGamePlatformPage: VideoGamePlatformPageResolvers<ContextType>;
  VideoNetwork: VideoNetworkResolvers<ContextType>;
  VideoProject: VideoProjectResolvers<ContextType>;
  VideoProjectFile: VideoProjectFileResolvers<ContextType>;
  VideoProjectFileJob: VideoProjectFileJobResolvers<ContextType>;
  VideoProjectPage: VideoProjectPageResolvers<ContextType>;
  VideoProjectRights: VideoProjectRightsResolvers<ContextType>;
  VideoProvider: VideoProviderResolvers<ContextType>;
  VideoPublisher: VideoPublisherResolvers<ContextType>;
  VideoSeries: VideoSeriesResolvers<ContextType>;
  VideoTag: VideoTagResolvers<ContextType>;
  VideoType: VideoTypeResolvers<ContextType>;
  _Entity: _EntityResolvers<ContextType>;
  _EntityRepresentation: GraphQLScalarType;
};

