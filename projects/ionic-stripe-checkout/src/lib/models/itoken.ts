export interface ICreateTokenCard {
  id: string;
  object: string;
  card: Card;
  client_ip?: any;
  created: number;
  livemode: boolean;
  type: string;
  used: boolean;
}

interface Card {
  id: string;
  object: string;
  address_city?: any;
  address_country?: any;
  address_line1?: any;
  address_line1_check?: any;
  address_line2?: any;
  address_state?: any;
  address_zip?: any;
  address_zip_check?: any;
  brand: string;
  country: string;
  cvc_check: string;
  dynamic_last4?: any;
  exp_month: number;
  exp_year: number;
  fingerprint: string;
  funding: string;
  last4: string;
  metadata: Metadata;
  name?: any;
  tokenization_method?: any;
}

interface Metadata {}
