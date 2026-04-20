export default function CompanyStatus({ companyStatus }) {
    switch (companyStatus) {
        case 'no_company':
            return (
                <div className="alert-danger rounded-4 p-3 mb-3">
                    <strong>
                        <i className="fas fa-info-circle me-2"></i>
                        Следващи стъпки: Трябва да попълните формата с всички задължителни полета (*) <br />
                        След като попълните всички необходими фирмени данни, вашата компания ще
                        бъде разгледана от наш представител.
                        <br />
                        След като приключим с разглеждането, ще видите различен статус от този който виждате в момента.

                    </strong>
                </div>
            );

        case 'incomplete':
            return (
                <div className="alert-warning rounded-4 p-3 mb-3">
                    <strong>
                        <i className="fas fa-exclamation-triangle me-2"></i>
                        Профилът е непълен! <br />
                        Това означава, че някои от задължителните полета не са попълнени! <br />
                        Моля проверете всички полета и направете необходимите промени!
                    </strong>
                </div>
            );

        case 'pending':
            return (
                <div className="alert-info rounded-4 p-3 mb-3">
                    <strong>
                        <i className="fas fa-clock me-2"></i>
                        Профилът чака одобрение!
                        Всички данни са попълнени правилно. <br />
                        Нашият екип ще прегледа фирмените данни и ще получите известие със следващи стъпки. <br />
                        При одобрение, ще получите достъп до всички функционалности на платформата!
                    </strong>
                </div>
            );

        case 'approved':
            return (
                <div className="alert-success rounded-4 p-3 mb-3">
                    <strong>
                        <i className="fas fa-check-circle me-2"></i>
                        Профилът е одобрен! Вече можете да ползвате всички функционалности на платформата! <br />
                        Оставени са инструкции в оделните секции. В случай, че имате въпроси, не се притеснявайте да ни потърсите.
                    </strong>
                </div>
            );

        case 'rejected':
            return (
                <div className="alert-danger rounded-4 p-3 mb-3">
                    <strong>
                        <i className="fas fa-times-circle me-2"></i>
                        Профилът е отхвърлен
                    </strong>
                </div>
            );

        case 'closed':
            return (
                <div className="alert-danger rounded-4 p-3 mb-3">
                    <strong>
                        <i className="fas fa-ban me-2"></i>
                        Профилът ви е блокиран от администраторите!
                    </strong>
                </div>
            );

        default:
            return null;
    }
}
