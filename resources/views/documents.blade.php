<?xml version="1.0" encoding="Windows-1251"?>
<audit>
    <eik>208679039</eik>
    <e_shop_n>RF0005985</e_shop_n>
    <domain_name>https://rabotazamen.bg/</domain_name>
    <creation_date>{{ $creationDate }}</creation_date>
    <mon>{{ $month }}</mon>
    <god>{{ $year }}</god>
    <e_shop_type>1</e_shop_type>
    <order>
        @foreach ($orders as $index => $order)
            @php
                $productAmount = number_format($order->amount_total / 100, 2);
                $productBeforeVAT = number_format($productAmount / (1 + $vatPercent / 100), 2);
                $calculatedVAT = number_format($productAmount - $productBeforeVAT, 2);
                $ord_n_padded = str_pad($index + 1, 10, '0', STR_PAD_LEFT);
                $doc_n_padded = str_pad($index + 1, 10, '0', STR_PAD_LEFT);
            @endphp


            <orderenum>
                <ord_n>{{ $ord_n_padded }}</ord_n>
                <ord_d>{{ $order->human_date }}</ord_d>
                <doc_n>{{ $doc_n_padded }}</doc_n>
                <doc_date>{{ $order->human_date }}</doc_date>
                <art>
                    <artenum>
                        <art_name>{{ $order->list_items[0]->description }}</art_name>
                        <art_quant>1.00</art_quant>
                        <art_price>{{ $productBeforeVAT }}</art_price>
                        <art_vat_rate>{{ $vatPercent }}</art_vat_rate>
                        <art_vat>{{ $calculatedVAT }}</art_vat>
                        <art_sum>{{ $productAmount }}</art_sum>
                    </artenum>
                </art>
                <ord_total1>{{ $productBeforeVAT }}</ord_total1>
                <ord_disc>0.00</ord_disc>
                <ord_vat>{{ $calculatedVAT }}</ord_vat>
                <ord_total2>{{ $productAmount }}</ord_total2>
                <paym>2</paym>
                <trans_n>{{ $order->id }}</trans_n>
                <pos_n>1-STRIPE</pos_n>
                <proc_id>IE3206488LH</proc_id>
            </orderenum>
        @endforeach

    </order>
    <r_ord>0</r_ord>
    <rorder />
</audit>


