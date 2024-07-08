
import {
    Box,
    Typography,
    Divider,
    Stack,
} from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import { COLORS } from "@/app/styles/colors";
import { DrawerContent, DrawerHeader, StyledDrawer } from "./style";

interface Transaction {
    id: string;
    status: string;
    paymentMethod: string;
    salesType: string;
    createdAt: number;
    transactionReference: number;
    amount: number;
    deduction?: number;
    franchise?: string;
}

const paymentIcon = {
    BANCOLOMBIA: "/payment/bancolombia.jpg",
    NEQUI: "/payment/nequi.png",
    MASTERCARD: "/payment/mastercard.svg",
    DAVIPLATA: "/payment/daviplata.svg",
    VISA: "/payment/visa.svg",
    PSE: "/payment/pse.png",
};

interface TransactionDrawerProps {
    open: boolean;
    onClose: () => void;
    transaction: Transaction | null;
}

const TransactionDrawer: React.FC<TransactionDrawerProps> = ({
    open,
    onClose,
    transaction,
}) => {
    if (!transaction) return null;

    return (
        <StyledDrawer anchor="right" open={open} onClose={onClose}>
            <Box display='flex' justifyContent="right" textAlign='right'>
                <Typography variant="body2" fontWeight={600} fontSize="18px" onClick={onClose}>
                    X
                </Typography>
            </Box>
            <DrawerHeader display="flex" flexDirection="column">
                <Stack justifyContent="center" textAlign="center" alignItems="center">
                    <Image src="/check.svg" width={30} height={30} alt="Icono check" />
                    <Typography variant="body2" fontSize='16px' color='black' mt={2} fontWeight={600}>
                        {transaction.status === "SUCCESSFUL"
                            ? "¡Cobro exitoso!"
                            : "Cobro no realizado"}
                    </Typography>
                    <Typography mt={1} variant="h5" color={COLORS.SECUNDARY} fontWeight="bold">
                        ${transaction.amount.toLocaleString()}
                    </Typography>
                    <Typography mt={1} variant="body2" fontSize='12px' color='textSecondary' >
                        {format(new Date(transaction.createdAt), "dd/MM/yyyy HH:mm:ss")}
                    </Typography>
                </Stack>
            </DrawerHeader>
            <DrawerContent>
                <Stack spacing={2}>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body2" color="textSecondary">
                            ID transacción Bold
                        </Typography>
                        <Typography variant="body2" fontWeight={600}>{transaction.id}</Typography>
                    </Stack>
                    {transaction.deduction && (
                        <Stack direction="row" justifyContent="space-between">
                            <Typography variant="body2" color="textSecondary">
                                Deducción Bold
                            </Typography>
                            <Typography variant="body2" color="primary" fontSize='12px' fontWeight={600}>
                                -$ {transaction.deduction.toLocaleString()}
                            </Typography>
                        </Stack>
                    )}
                    <Divider sx={{ my: 2 }} />
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body2" color="textSecondary">
                            Método de pago
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Image
                                src={
                                    paymentIcon[
                                    transaction.franchise as keyof typeof paymentIcon
                                    ] ||
                                    paymentIcon[
                                    transaction.paymentMethod as keyof typeof paymentIcon
                                    ]
                                }
                                width={20}
                                height={20}
                                alt="Icono filtro"
                            />
                            <Typography variant="body2" color='textSecondary'>
                                *** {transaction.transactionReference}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body2" color="textSecondary">
                            Tipo de pago
                        </Typography>
                        <Stack direction='row' gap={2}>
                            <Image
                                src={
                                    transaction.salesType === "PAYMENT_LINK"
                                        ? "/link.svg"
                                        : "/terminal.svg"
                                }
                                width={20}
                                height={20}
                                alt="Logo Link"
                            />
                            <Typography variant="body2" fontWeight={600}>
                                {transaction.salesType === "PAYMENT_LINK"
                                    ? "Link de pagos"
                                    : "Datáfono"}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </DrawerContent>
        </StyledDrawer>
    );
};

export default TransactionDrawer;
