---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import WizardNavigation from '@site/src/components/WizardNavigation';

# Buat Undangan

Ikuti panduan interaktif ini untuk mulai membuat undangan digital Anda sendiri. Pastikan Anda sudah masuk ke akun Anda sebelum memulai.

:::tip Belum punya akun?
Jika Anda belum terdaftar, silakan ikuti panduan [Pendaftaran Akun](../akun/buat-akun.md) terlebih dahulu.
:::

## 6 Tahap Invitation Wizard

Gunakan tab di bawah ini untuk melihat detail setiap langkah dalam proses pembuatan undangan.

<Tabs groupId="invitation-wizard" queryString="step" defaultValue="paket">
  <TabItem value="paket" label="1. Pilih Paket">
    ### Langkah 1: Pilih Paket Layanan
    Tentukan paket yang paling sesuai dengan kebutuhan acara Anda. Kami menyediakan berbagai pilihan mulai dari paket Ekonomis hingga Premium dengan fitur lengkap.

    - **Bandingkan Fitur**: Perhatikan jumlah tamu, masa aktif, dan fitur eksklusif lainnya.
    - **Pilih & Klik**: Klik tombol **"Pilih Paket"** pada paket yang Anda inginkan.

    ![Pilih Paket](/img/wizard/package.png)

    <WizardNavigation next="tema" nextLabel="Pilih Tema" />
  </TabItem>

  <TabItem value="tema" label="2. Pilih Tema">
    ### Langkah 2: Pilih Tema Desain
    Pilih template desain yang paling menggambarkan karakter dan nuansa acara Anda.

    - **Kategori Tema**: Gunakan filter kategori (Modern, Tradisional, Minimalist, dll) untuk mempermudah pencarian.
    - **Preview**: Anda bisa melihat pratinjau tema secara langsung sebelum memilih.
    - **Gunakan Tema**: Klik tombol **"Gunakan Tema"** untuk melanjutkan.

    ![Pilih Tema](/img/wizard/theme.png)

    <WizardNavigation back="paket" next="url" nextLabel="Sesuaikan URL" />
  </TabItem>

  <TabItem value="url" label="3. Sesuaikan URL">
    ### Langkah 3: Sesuaikan URL & Detail
    Buat alamat link undangan yang unik dan mudah diingat oleh tamu Anda.

    - **Custom URL**: Masukkan nama unik (contoh: `budi-ani`). Sistem akan mengecek ketersediaan URL tersebut secara otomatis.
    - **Informasi Dasar**: Isi judul undangan dan jenis acara.

    ![Sesuaikan URL](/img/wizard/details.png)

    <WizardNavigation back="tema" next="addons" nextLabel="Tambah Add-ons" />
  </TabItem>

  <TabItem value="addons" label="4. Add-ons">
    ### Langkah 4: Tambah Fitur Ekstra (Add-ons)
    Perkaya fungsi undangan Anda dengan berbagai fitur tambahan yang tersedia.

    - **Pilihan Add-ons**: Anda bisa menambahkan fitur seperti RSVP lanjut, Buku Tamu Digital, atau integrasi maps khusus.
    - **Opsional**: Langkah ini bersifat opsional. Jika tidak memerlukan tambahan, Anda bisa langsung melanjutkan.

    :::info Kustomisasi Lanjut
    Fitur add-ons dapat membantu meningkatkan pengalaman tamu Anda saat berinteraksi dengan undangan digital.
    :::

    <WizardNavigation back="url" next="review" nextLabel="Review Pesanan" />
  </TabItem>

  <TabItem value="review" label="5. Review Pesanan">
    ### Langkah 5: Review & Konfirmasi
    Periksa kembali semua pilihan paket, tema, dan detail yang telah Anda masukkan.

    - **Ringkasan Biaya**: Pastikan total biaya sudah sesuai dengan pilihan Anda.
    - **Detail Undangan**: Verifikasi kembali URL dan paket yang dipilih.
    - **Konfirmasi**: Jika semua sudah benar, klik **"Lanjutkan ke Pembayaran"**.

    ![Review](/img/wizard/review.png)

    <WizardNavigation back="addons" next="pembayaran" nextLabel="Lanjut Pembayaran" />
  </TabItem>

  <TabItem value="pembayaran" label="6. Pembayaran">
    ### Langkah 6: Selesaikan Pembayaran
    Pilih metode pembayaran yang paling memudahkan Anda untuk mengaktifkan undangan.

    - **Metode Otomatis**: Gunakan Virtual Account atau E-Wallet untuk aktivasi instan tanpa perlu konfirmasi manual.
    - **Metode Manual**: Transfer bank manual tersedia jika Anda lebih nyaman menggunakannya.

    ![Pilih Metode](/img/wizard/metode-pembayaran.png)

    :::important Konfirmasi Pembayaran Manual
    Jika memilih metode **Manual Transfer**, Anda wajib mengunggah bukti pembayaran di menu **Payments** agar akun Anda segera diproses oleh admin.
    :::

    ![Pilih Bank](/img/wizard/pilih-bank.png)

    <WizardNavigation back="review" />
  </TabItem>
</Tabs>

## Apa Setelah Ini?

Setelah pembayaran Anda terverifikasi (otomatis atau manual), status undangan Anda akan berubah menjadi **Aktif**. Anda dapat mulai mengisi detail acara, lokasi, dan daftar tamu melalui dashboard manajemen undangan.

:::tip Butuh Bantuan?
Jika mengalami kendala selama proses pembuatan, silakan hubungi tim support kami melalui tombol WhatsApp yang tersedia di dashboard.
:::

